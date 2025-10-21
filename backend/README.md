# PantryMate Backend API

REST API for PantryMate inventory management.

## Setup

```bash
npm install
npm run dev
```

Server runs on `http://localhost:3001`

## API Endpoints

### Profiles
- `GET /api/v1/profiles` - List all profiles
- `POST /api/v1/profiles` - Create profile
- `DELETE /api/v1/profiles/:profileId` - Delete profile

### Pantry Items
- `GET /api/v1/pantry/items?profileId=&section=` - List items
- `POST /api/v1/pantry/items` - Create item
- `PATCH /api/v1/pantry/items/:itemId` - Update item
- `DELETE /api/v1/pantry/items/:itemId?profileId=` - Delete item
- `DELETE /api/v1/pantry/sections/:sectionKey?profileId=` - Clear section

### Health
- `GET /api/health` - Health check

## Database

SQLite database stored in `data/pantrymate.db`
