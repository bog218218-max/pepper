import { motion } from 'motion/react';
import { Gift, ScanLine, Trophy } from 'lucide-react';

export default function PepperPerks() {
  return (
    <div className="min-h-screen bg-drp-dark text-drp-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block bg-drp-accent text-drp-dark text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Official Rewards Program
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase leading-[0.9] mb-6">
              Pepper <br/><span className="text-drp-maroon">Perks</span>
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-lg">
              Turn your cravings into rewards. Buy Dr Pepper, scan your receipt, and unlock exclusive gear, digital rewards, and VIP experiences.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8 backdrop-blur-sm">
              <h2 className="text-2xl font-display font-bold uppercase mb-6">Join The Pack</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:border-drp-accent"
                />
                <button className="w-full bg-drp-accent text-drp-dark font-bold uppercase tracking-wide py-4 rounded-xl hover:bg-white transition-colors">
                  Sign Up / Log In
                </button>
              </form>
              <p className="text-xs text-white/40 text-center mt-4">
                By joining, you agree to the Terms of Service and Privacy Policy.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="bg-drp-maroon rounded-3xl p-8 flex gap-6 items-start">
              <div className="bg-white/20 p-4 rounded-2xl">
                <ScanLine className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold uppercase mb-2">1. Buy & Scan</h3>
                <p className="text-white/80">Purchase any participating Dr Pepper product and scan your receipt or enter the code under the cap.</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 flex gap-6 items-start">
              <div className="bg-white/10 p-4 rounded-2xl">
                <Trophy className="w-8 h-8 text-drp-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold uppercase mb-2">2. Earn Points</h3>
                <p className="text-white/80">Watch your points stack up in your Pepper Perks dashboard. Look out for double point days!</p>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-3xl p-8 flex gap-6 items-start">
              <div className="bg-white/10 p-4 rounded-2xl">
                <Gift className="w-8 h-8 text-drp-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold uppercase mb-2">3. Get Rewarded</h3>
                <p className="text-white/80">Redeem points for exclusive apparel, gaming DLC, concert tickets, and more.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
