export default function Privacy() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-4 text-gray-600 leading-relaxed">
        PantryMate is built for privacy. Your data stays on your device by default. We don’t sell your data.
        If cloud sync or accounts are introduced in the future, we’ll ask for consent and document exactly
        what’s stored and why.
      </p>
      <ul className="list-disc ml-6 mt-4 text-gray-600 space-y-2">
        <li>Local-first: items, profiles, and settings are stored locally on your device.</li>
        <li>No tracking: no analytics or tracking scripts are embedded.</li>
        <li>Data export: we aim to provide easy export in human-readable formats.</li>
      </ul>
      <p className="mt-6 text-gray-600">Questions? Email <a className="text-blue-600 hover:underline" href="mailto:privacy@pantrymate.app">privacy@pantrymate.app</a>.</p>
    </section>
  )
}
