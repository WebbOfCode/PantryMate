import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { initDatabase } from './db.js'
import pantryRoutes from './routes/pantry.js'
import profileRoutes from './routes/profiles.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Initialize database
initDatabase()

// Routes
app.use('/api/v1/pantry', pantryRoutes)
app.use('/api/v1/profiles', profileRoutes)

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.listen(PORT, () => {
  console.log(`🚀 PantryMate API running on http://localhost:${PORT}`)
})
