import { useState } from 'react'
import { useProfiles } from '../context/ProfilesContext'

export default function Profiles() {
  const { profiles, activeId, setActiveId, addProfile, removeProfile } = useProfiles()
  const [name, setName] = useState('')

  function create() {
    const v = name.trim()
    if (!v) return
    addProfile(v)
    setName('')
  }

  return (
    <section>
      <h2 className="text-2xl font-semibold">Profiles</h2>
      <div className="mt-3 grid grid-cols-[1fr_auto] max-w-md gap-2">
        <input className="pm-input" placeholder="Add profile name" value={name} onChange={e=>setName(e.target.value)} onKeyDown={e=>e.key==='Enter'&&create()} />
        <button className="pm-btn pm-btn-primary" onClick={create}>Add</button>
      </div>
      <ul className="pm-list mt-4" role="list">
        {profiles.map(p => (
          <li key={p.id} className="pm-list-item">
            <div>
              <div className="font-medium">{p.name}</div>
              <div className="text-xs text-[color:var(--pm-text-dim)]">{Object.keys(p.sections).length} sections</div>
            </div>
            <div className="flex items-center gap-2">
              <button className={`pm-chip ${activeId===p.id ? '' : ''}`} onClick={()=>setActiveId(p.id)}>{activeId===p.id? 'Active' : 'Set active'}</button>
              <button className="pm-chip" onClick={()=>removeProfile(p.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
