import { Link } from 'react-router-dom'
import { recipes } from '../data/recipes'

export default function Recipes() {
  const american = recipes.filter(r => r.tags.includes('american'))
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">American Comfort Food</h2>
        <p className="text-[var(--pm-text-dim)] mt-1">Classic recipes you'll actually make. Click any card to see the full recipe.</p>
      </div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
        {american.map(r => (
          <li key={r.id} className="group">
            <Link 
              to={`/recipes/${r.id}`} 
              className="block rounded-xl border border-white/10 bg-[var(--pm-surface)] p-5 hover:border-[var(--pm-primary)] hover:shadow-lg transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl group-hover:scale-110 transition-transform" aria-hidden>{r.hero}</div>
                <div className="flex-1">
                  <div className="font-semibold text-lg group-hover:text-[var(--pm-primary)] transition-colors">{r.name}</div>
                  <div className="text-sm text-[var(--pm-text-dim)] mt-1">{r.time} min • {r.difficulty}</div>
                  <div className="text-xs text-[var(--pm-primary)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">View recipe →</div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
