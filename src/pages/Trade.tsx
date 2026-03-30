import { motion } from 'motion/react';

export default function Trade() {
  return (
    <div className="min-h-screen bg-drp-cream py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-drp-dark uppercase leading-none mb-6">
            Trade & <br/>Partnerships
          </h1>
          <p className="text-xl text-drp-dark/70 max-w-2xl mx-auto">
            Bring the 23 flavors to your business. Whether you're a retailer, restaurant, or distributor, we're ready to partner.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-wider text-sm text-drp-dark/60">1. How can we help?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {['Retail Stocking', 'Fountain Equipment', 'Distribution'].map((type) => (
                  <label key={type} className="flex items-center p-4 border-2 border-drp-dark/10 rounded-xl cursor-pointer hover:border-drp-maroon transition-colors has-[:checked]:border-drp-maroon has-[:checked]:bg-drp-maroon/5">
                    <input type="radio" name="inquiryType" className="mr-3 text-drp-maroon focus:ring-drp-maroon" />
                    <span className="font-bold text-sm">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-wider text-sm text-drp-dark/60">2. Business Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Business Name</label>
                  <input type="text" className="w-full bg-zinc-100 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:border-drp-maroon focus:ring-2 focus:ring-drp-maroon/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Zip Code</label>
                  <input type="text" className="w-full bg-zinc-100 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:border-drp-maroon focus:ring-2 focus:ring-drp-maroon/20 outline-none transition-all" />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold uppercase tracking-wider text-sm text-drp-dark/60">3. Contact Info</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2">Full Name</label>
                  <input type="text" className="w-full bg-zinc-100 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:border-drp-maroon focus:ring-2 focus:ring-drp-maroon/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2">Email Address</label>
                  <input type="email" className="w-full bg-zinc-100 border-transparent rounded-xl px-4 py-3 focus:bg-white focus:border-drp-maroon focus:ring-2 focus:ring-drp-maroon/20 outline-none transition-all" />
                </div>
              </div>
            </div>

            <button className="w-full bg-drp-dark text-white font-bold uppercase tracking-wide py-4 rounded-xl hover:bg-drp-maroon transition-colors mt-8">
              Submit Inquiry
            </button>
            <p className="text-center text-sm text-drp-dark/50">
              Your inquiry will be routed to the appropriate regional representative. Expect a response within 24-48 hours.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
