import { Link } from 'react-router-dom'
import { ChefHat, Refrigerator, ShoppingBag, Sparkles, CheckCircle2, ArrowRight, Github, Lightbulb, Star } from 'lucide-react'
import { toast } from 'sonner'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 border border-blue-200">
          <Sparkles className="w-4 h-4" />
          Made for real kitchens
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-in fade-in-50 slide-in-from-bottom-2 duration-700">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#2F855A] to-[#D69E2E]">PantryMate</span>
        </h1>

        <p className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4 animate-in fade-in-50 slide-in-from-bottom-1 duration-700 delay-150">
          Scan, track, and cook — reduce waste and save time
        </p>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in-50 duration-700 delay-200">
          Scan your pantry with your phone and get recipe suggestions instantly. PantryMate keeps smart inventory, suggests meals from what you already have, and builds shopping lists for what you need.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center animate-in fade-in-50 zoom-in-95 duration-700 delay-300">
          <Link 
            to="/pantry" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-xl"
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            to="/recipes" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all"
          >
            View Demo
          </Link>
        </div>
      </section>

        {/* Demo / Screenshots */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">See it in action</h2>
          <p className="text-gray-600">Short demo — scan, inventory, cook.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="bg-white rounded-2xl shadow-sm p-4 border border-gray-100">
            <img src="/src/assets/react.svg" alt="demo screenshot" className="w-full rounded-lg" />
          </div>
          <div>
            <p className="text-gray-700 mb-4">Upload a quick video or screenshots here that walk through scanning a barcode or snapping a photo, seeing items populate your pantry, and getting recipe suggestions instantly.</p>
            <p className="text-sm text-gray-500">Tip: keep the demo under 60s for highest conversions.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Loved by home cooks</h2>
          <p className="text-lg text-gray-600">Real feedback from early users</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-yellow-500 mb-2"><Star className="w-4 h-4" /><Star className="w-4 h-4" /><Star className="w-4 h-4" /><Star className="w-4 h-4" /><Star className="w-4 h-4" /></div>
            <p className="text-gray-700">“PantryMate cut our weekly grocery bill and we finally stopped tossing expired food.”</p>
            <p className="text-sm text-gray-500 mt-3">— Jordan, Chicago</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-yellow-500 mb-2"><Star className="w-4 h-4" /><Star className="w-4 h-4" /><Star className="w-4 h-4" /><Star className="w-4 h-4" /><Star className="w-4 h-4" /></div>
            <p className="text-gray-700">“The interface is clean and fast. I know exactly what’s in my fridge.”</p>
            <p className="text-sm text-gray-500 mt-3">— Priya, Austin</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-yellow-500 mb-2"><Star className="w-4 h-4" /><Star className="w-4 h-4" /><Star className="w-4 h-4" /><Star className="w-4 h-4" /><Star className="w-4 h-4" /></div>
            <p className="text-gray-700">“Meal suggestions help me cook with what I already have. Huge time saver.”</p>
            <p className="text-sm text-gray-500 mt-3">— Marcus, Seattle</p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="max-w-6xl mx-auto px-4 pb-6 -mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-500 opacity-70 text-sm items-center justify-items-center">
          <div className="px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm w-full text-center">Product Hunt</div>
          <div className="px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm w-full text-center">Hacker News</div>
          <div className="px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm w-full text-center">Reddit</div>
          <div className="px-4 py-2 rounded-lg bg-white border border-gray-100 shadow-sm w-full text-center">GitHub</div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Everything you need</h2>
          <p className="text-lg text-gray-600">Powerful features designed for everyday cooking</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Refrigerator className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Track everything</h3>
            <p className="text-gray-600 leading-relaxed">
              Organize by fridge, freezer, pantry, and more. Know what you have at a glance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ChefHat className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Real recipes</h3>
            <p className="text-gray-600 leading-relaxed">
              Comfort food recipes you'll actually make. No complicated techniques.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Smart shopping</h3>
            <p className="text-gray-600 leading-relaxed">
              Generate shopping lists from recipes. Never forget ingredients again.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Meal suggestions</h3>
            <p className="text-gray-600 leading-relaxed">
              See meal ideas based on what’s already in your kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose PantryMate */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why choose PantryMate</h2>
            <p className="text-lg text-gray-600 mb-6">Designed for home cooks who want clarity, not chaos. PantryMate keeps your kitchen organized without getting in the way.</p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" /> Fast item entry with quantities and expiration.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" /> Simple sections that mirror how your kitchen is laid out.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" /> Shopping list that only adds what you’re missing.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" /> Works offline. Your data stays on your device.</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Join the beta</h3>
            <p className="text-gray-600 mb-4">Get early access updates and tips. No spam, unsubscribe anytime.</p>
            <form onSubmit={(e)=>{e.preventDefault(); toast.success('Thanks! We\'ll be in touch.')}} className="grid sm:grid-cols-[1fr_auto] gap-3">
              <input type="email" required placeholder="your@email"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none" />
              <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all">Join the Beta</button>
            </form>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
          <p className="text-lg text-gray-600">Scan → Track → Cook → Shop — four steps to a smarter kitchen</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2F855A] to-[#D69E2E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Scan</h3>
            <p className="text-gray-600">
              Use barcode scanning or quick photo entry to add items in seconds.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2F855A] to-[#D69E2E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Track</h3>
            <p className="text-gray-600">
              Smart inventory tracks quantities, locations, and expirations so you always know whats on hand.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2F855A] to-[#D69E2E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Cook</h3>
            <p className="text-gray-600">
              Get instant recipe suggestions that use what you already have — reduce waste and eat better.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2F855A] to-[#D69E2E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">Shop</h3>
            <p className="text-gray-600">
              Automatically generate a shopping list for missing items and share it with others.
            </p>
          </div>
        </div>
      </section>

      {/* Smart inventory management */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Smart inventory management</h3>
            <p className="text-gray-700 mb-4">PantryMate keeps track of quantities, locations (fridge/pantry/freezer), and expiration dates. Get reminders for soon-to-expire items and reduce food waste automatically.</p>
            <ul className="text-gray-700 space-y-2">
              <li>• Expiration alerts and suggested recipes to use food before it spoils</li>
              <li>• Seamless barcode and photo entry</li>
              <li>• Offline-first design — your data stays on your device</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <img src="/src/assets/react.svg" alt="inventory screenshot" className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Community / AI meal planner */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Community recipes & AI meal planner</h2>
          <p className="text-gray-600">Share recipes, save favorites, or let our AI suggest weekly meal plans based on your pantry.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-semibold mb-2">Community recipes</h4>
            <p className="text-gray-700">Discover meals from other users and add your own tried-and-true dishes.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-semibold mb-2">AI meal planner</h4>
            <p className="text-gray-700">Generate weekly meal plans and shopping lists tailored to your pantry and dietary preferences.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-semibold mb-2">Share & collaborate</h4>
            <p className="text-gray-700">Share shopping lists or meal plans with family easily.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to get organized?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of home cooks who've simplified their kitchen management.
          </p>
          <Link 
            to="/pantry" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all hover:scale-105 hover:shadow-xl"
          >
            Start for free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">PantryMate</h3>
              <p className="text-gray-600 mb-4">Your kitchen, organized naturally.</p>
              <p className="text-sm text-gray-500">
                Built with care for home cooks everywhere. No account required, everything stays on your device.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Product</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/pantry" className="hover:text-blue-600 transition-colors">Pantry</Link></li>
                  <li><Link to="/recipes" className="hover:text-blue-600 transition-colors">Recipes</Link></li>
                  <li><Link to="/list" className="hover:text-blue-600 transition-colors">Shopping List</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Company</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><Link to="/about" className="hover:text-blue-600 transition-colors">About</Link></li>
                  <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                  <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy</Link></li>
                  <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors inline-flex items-center gap-1">
                    <Github className="w-4 h-4" />
                    GitHub
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center text-sm text-gray-500">
            <p>© 2025 PantryMate. Made with care in the kitchen.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
