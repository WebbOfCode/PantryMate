import { useParams, Link } from 'react-router-dom'
import { getRecipeById } from '../data/recipes'

export default function RecipeDetail() {
  const { id } = useParams()
  const recipe = getRecipeById(id)
  if (!recipe) return <div>Recipe not found. <Link to="/recipes" className="underline">Back to recipes</Link></div>

  return (
    <article className="max-w-2xl">
      <Link to="/recipes" className="text-sm text-[color:var(--pm-text-dim)]">← Back to recipes</Link>
      <header className="mt-2 flex items-center gap-3">
        <div className="text-4xl" aria-hidden>{recipe.hero}</div>
        <div>
          <h1 className="text-3xl font-bold">{recipe.name}</h1>
          <div className="text-sm text-[color:var(--pm-text-dim)]">{recipe.time} min • {recipe.difficulty}</div>
        </div>
      </header>
      <section className="mt-4">
        <h2 className="font-semibold">Ingredients</h2>
        <ul className="list-disc list-inside text-sm mt-1 space-y-0.5">
          {recipe.ingredients.map((it, idx) => <li key={idx}>{it}</li>)}
        </ul>
      </section>
      <section className="mt-4">
        <h2 className="font-semibold">Steps</h2>
        <ol className="list-decimal list-inside text-sm mt-1 space-y-1">
          {recipe.steps.map((s, idx) => <li key={idx}>{s}</li>)}
        </ol>
      </section>
    </article>
  )
}
