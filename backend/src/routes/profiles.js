import express from 'express'
import { getDb } from '../db.js'

const router = express.Router()

// GET /api/v1/profiles
router.get('/', (req, res) => {
  const db = getDb()
  
  try {
    const profiles = db.prepare('SELECT * FROM profiles ORDER BY created_at DESC').all()
    res.json({ profiles })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// POST /api/v1/profiles
router.post('/', (req, res) => {
  const { name } = req.body

  if (!name) {
    return res.status(400).json({ error: 'name is required' })
  }

  const db = getDb()
  const id = crypto.randomUUID()
  const now = new Date().toISOString()

  try {
    const stmt = db.prepare(`
      INSERT INTO profiles (id, name, created_at, updated_at)
      VALUES (?, ?, ?, ?)
    `)
    
    stmt.run(id, name, now, now)
    
    const profile = db.prepare('SELECT * FROM profiles WHERE id = ?').get(id)
    res.status(201).json(profile)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// DELETE /api/v1/profiles/:profileId
router.delete('/:profileId', (req, res) => {
  const { profileId } = req.params
  const db = getDb()

  try {
    const stmt = db.prepare('DELETE FROM profiles WHERE id = ?')
    const result = stmt.run(profileId)

    if (result.changes === 0) {
      return res.status(404).json({ error: 'Profile not found' })
    }

    res.status(204).send()
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
