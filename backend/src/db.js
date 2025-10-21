import Database from 'better-sqlite3'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dbDir = path.join(__dirname, '../data')
const dbPath = path.join(dbDir, 'pantrymate.db')

let db

export function initDatabase() {
  // Ensure data directory exists
  try {
    if (!fs.existsSync(dbDir)) {
      fs.mkdirSync(dbDir, { recursive: true })
    }
  } catch (err) {
    console.error('Failed to create data directory', err)
    throw err
  }

  db = new Database(dbPath)
  db.pragma('journal_mode = WAL')

  // Profiles table
  db.exec(`
    CREATE TABLE IF NOT EXISTS profiles (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `)

  // Pantry items table
  db.exec(`
    CREATE TABLE IF NOT EXISTS pantry_items (
      id TEXT PRIMARY KEY,
      profile_id TEXT NOT NULL,
      section_key TEXT NOT NULL,
      name TEXT NOT NULL,
      quantity TEXT,
      expires_on TEXT,
      notes TEXT,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      FOREIGN KEY (profile_id) REFERENCES profiles(id) ON DELETE CASCADE
    )
  `)

  // Indexes
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_pantry_profile_section 
    ON pantry_items(profile_id, section_key)
  `)

  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_pantry_expires 
    ON pantry_items(expires_on)
  `)

  console.log('✅ Database initialized')
}

export function getDb() {
  if (!db) throw new Error('Database not initialized')
  return db
}
