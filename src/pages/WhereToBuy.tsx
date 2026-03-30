import { motion } from 'motion/react';
import { Search, MapPin, Navigation } from 'lucide-react';
import { useState } from 'react';

export default function WhereToBuy() {
  const [zip, setZip] = useState('');

  return (
    <div className="min-h-screen bg-drp-cream flex flex-col">
      <div className="bg-drp-dark text-drp-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase mb-6">
              Find Your <span className="text-drp-accent">Pepper</span>
            </h1>
            
            <div className="max-w-2xl flex gap-2">
              <div className="relative flex-grow">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-drp-dark/50 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="Enter Zip Code or City"
                  className="w-full pl-12 pr-4 py-4 rounded-full text-drp-dark font-medium focus:outline-none focus:ring-2 focus:ring-drp-accent"
                  value={zip}
                  onChange={(e) => setZip(e.target.value)}
                />
              </div>
              <button className="bg-drp-accent text-drp-dark px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white transition-colors flex items-center gap-2">
                <Search className="w-5 h-5 hidden sm:block" />
                Search
              </button>
            </div>
            
            <button className="mt-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-drp-cream/70 hover:text-drp-cream transition-colors">
              <Navigation className="w-4 h-4" /> Use Current Location
            </button>
          </motion.div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center bg-zinc-200 relative overflow-hidden">
        {/* Mock Map Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2000")', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        
        <div className="relative z-10 text-center p-8 max-w-md bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-drp-maroon" />
          <h2 className="text-2xl font-display font-bold uppercase mb-2">Ready to locate</h2>
          <p className="text-drp-dark/70 mb-6">Enter your location above to find Dr Pepper at retailers and restaurants near you.</p>
          
          <div className="border-t border-drp-dark/10 pt-6">
            <p className="text-sm font-bold uppercase tracking-wider text-drp-dark/50 mb-4">Or Order Online</p>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 border-2 border-drp-dark/10 rounded-xl font-bold hover:bg-drp-dark hover:text-white transition-colors">Amazon</button>
              <button className="py-3 border-2 border-drp-dark/10 rounded-xl font-bold hover:bg-drp-dark hover:text-white transition-colors">Walmart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
