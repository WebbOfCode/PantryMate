import express from 'express'
import { getDb } from '../db.js'

const router = express.Router()

// GET /api/v1/pantry/items?profileId=&section=
router.get('/items', (req, res) => {
  const { profileId, section } = req.query
  
  if (!profileId) {
    return res.status(400).json({ error: 'profileId is required' })
  }

  const db = getDb()
  let query = 'SELECT * FROM pantry_items WHERE profile_id = ?'
  const params = [profileId]

  if (section) {
    query += ' AND section_key = ?'
    params.push(section)
  }

  query += ' ORDER BY created_at DESC'

  try {
    const items = db.prepare(query).all(...params)
    res.json({ items })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// POST /api/v1/pantry/items
router.post('/items', (req, res) => {
  const { profileId, sectionKey, name, quantity, expiresOn, notes } = req.body

  if (!profileId || !sectionKey || !name) {
    return res.status(400).json({ error: 'profileId, sectionKey, and name are required' })
  }

  const db = getDb()
  const id = crypto.randomUUID()
  const now = new Date().toISOString()

  try {
    const stmt = db.prepare(`
      INSERT INTO pantry_items (id, profile_id, section_key, name, quantity, expires_on, notes, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `)
    
    stmt.run(id, profileId, sectionKey, name, quantity || null, expiresOn || null, notes || null, now, now)
    
    const item = db.prepare('SELECT * FROM pantry_items WHERE id = ?').get(id)
    res.status(201).json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// PATCH /api/v1/pantry/items/:itemId
router.patch('/items/:itemId', (req, res) => {
  const { itemId } = req.params
  const { profileId, name, quantity, expiresOn, notes } = req.body

  if (!profileId) {
    return res.status(400).json({ error: 'profileId is required' })
  }

  const db = getDb()
  const now = new Date().toISOString()

  try {
    const updates = []
    const params = []

    if (name !== undefined) {
      updates.push('name = ?')
      params.push(name)
    }
    if (quantity !== undefined) {
      updates.push('quantity = ?')
      params.push(quantity)
    }
    if (expiresOn !== undefined) {
      updates.push('expires_on = ?')
      params.push(expiresOn)
    }
    if (notes !== undefined) {
      updates.push('notes = ?')
      params.push(notes)
    }

    updates.push('updated_at = ?')
    params.push(now)
    params.push(itemId)
    params.push(profileId)

    const stmt = db.prepare(`
      UPDATE pantry_items 
      SET ${updates.join(', ')}
      WHERE id = ? AND profile_id = ?
    `)
    
    const result = stmt.run(...params)
    
    if (result.changes === 0) {
      return res.status(404).json({ error: 'Item not found' })
    }

    const item = db.prepare('SELECT * FROM pantry_items WHERE id = ?').get(itemId)
    res.json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE /api/v1/pantry/items/:itemId
router.delete('/items/:itemId', (req, res) => {
  const { itemId } = req.params
  const { profileId } = req.query

  if (!profileId) {
    return res.status(400).json({ error: 'profileId is required' })
  }

  const db = getDb()

  try {
    const stmt = db.prepare('DELETE FROM pantry_items WHERE id = ? AND profile_id = ?')
    const result = stmt.run(itemId, profileId)

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Item not found' })
    }

    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE /api/v1/pantry/sections/:sectionKey
router.delete('/sections/:sectionKey', (req, res) => {
  const { sectionKey } = req.params
  const { profileId } = req.query

  if (!profileId) {
    return res.status(400).json({ error: 'profileId is required' })
  }

  const db = getDb()

  try {
    const stmt = db.prepare('DELETE FROM pantry_items WHERE profile_id = ? AND section_key = ?')
    stmt.run(profileId, sectionKey)

    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
