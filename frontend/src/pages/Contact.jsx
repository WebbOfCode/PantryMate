export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900">Contact</h1>
      <p className="mt-4 text-gray-600 leading-relaxed">
        Questions, ideas, or feedback? We’d love to hear from you. Send us a note and we’ll get back within 1–2 business days.
      </p>
      <form className="mt-8 grid gap-4" onSubmit={(e)=>{e.preventDefault(); alert('Thanks! We\'ll reply soon.')}}>
        <input className="rounded-xl border border-gray-200 bg-white px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="Your name" required />
        <input type="email" className="rounded-xl border border-gray-200 bg-white px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="Email address" required />
        <textarea className="rounded-xl border border-gray-200 bg-white px-4 py-3 min-h-[140px] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" placeholder="How can we help?" required />
        <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all w-fit">Send message</button>
      </form>
      <p className="mt-6 text-sm text-gray-500">Or email us directly at <a className="text-blue-600 hover:underline" href="mailto:support@pantrymate.app">support@pantrymate.app</a></p>
    </section>
  )
}
