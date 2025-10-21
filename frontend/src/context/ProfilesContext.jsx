import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getJSON, setJSON } from '../utils/storage'

const ProfilesContext = createContext(null)

const DEFAULT_SECTIONS = ['fridge', 'cabinet', 'pantry', 'freezer', 'medicine']

function createDefaultProfile(name = 'My Kitchen') {
  return {
    id: crypto.randomUUID(),
    name,
    sections: Object.fromEntries(DEFAULT_SECTIONS.map(s => [s, []]))
  }
}

export function ProfilesProvider({ children }) {
  const [profiles, setProfiles] = useState(() => {
    const stored = getJSON('pm_profiles', null)
    return stored && Array.isArray(stored) && stored.length > 0 ? stored : [createDefaultProfile()]
  })
  const [activeId, setActiveId] = useState(() => {
    const stored = getJSON('pm_active_profile', null)
    return stored || profiles[0]?.id
  })

  useEffect(() => { setJSON('pm_profiles', profiles) }, [profiles])
  useEffect(() => { setJSON('pm_active_profile', activeId) }, [activeId])

  const active = useMemo(() => profiles.find(p => p.id === activeId) ?? profiles[0], [profiles, activeId])

  function addProfile(name) {
    const p = createDefaultProfile(name)
    setProfiles(prev => [p, ...prev])
    setActiveId(p.id)
  }

  function removeProfile(id) {
    setProfiles(prev => prev.filter(p => p.id !== id))
    if (id === activeId) {
      const next = profiles.find(p => p.id !== id)
      setActiveId(next?.id || null)
    }
  }

  function upsertItem(section, item) {
    setProfiles(prev => prev.map(p => {
      if (p.id !== active.id) return p
      const list = p.sections[section] || []
      return { ...p, sections: { ...p.sections, [section]: [item, ...list] } }
    }))
  }

  function removeItem(section, id) {
    setProfiles(prev => prev.map(p => {
      if (p.id !== active.id) return p
      const list = p.sections[section] || []
      return { ...p, sections: { ...p.sections, [section]: list.filter(i => i.id !== id) } }
    }))
  }

  function updateItem(section, id, data) {
    setProfiles(prev => prev.map(p => {
      if (p.id !== active.id) return p
      const list = p.sections[section] || []
      return {
        ...p,
        sections: {
          ...p.sections,
          [section]: list.map(item => (item.id === id ? { ...item, ...data } : item)),
        },
      }
    }))
  }

  function clearSection(section) {
    setProfiles(prev => prev.map(p => {
      if (p.id !== active.id) return p
      return { ...p, sections: { ...p.sections, [section]: [] } }
    }))
  }

  const value = {
    profiles,
    active,
    activeId,
    setActiveId,
    addProfile,
    removeProfile,
    upsertItem,
    removeItem,
    updateItem,
    clearSection,
    sections: DEFAULT_SECTIONS,
  }

  return <ProfilesContext.Provider value={value}>{children}</ProfilesContext.Provider>
}

export function useProfiles() {
  const ctx = useContext(ProfilesContext)
  if (!ctx) throw new Error('useProfiles must be used within ProfilesProvider')
  return ctx
}
