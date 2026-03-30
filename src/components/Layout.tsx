import { Link, Outlet, useLocation } from 'react-router-dom';
import { MapPin, Menu, X, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-drp-dark text-drp-cream border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="text-3xl font-display font-bold tracking-tighter text-drp-cream">
            Dr Pepper
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans font-medium">
            <Link to="/products" className="hover:text-drp-accent transition-colors">The Lineup</Link>
            <Link to="/pepper-perks" className="hover:text-drp-accent transition-colors">Pepper Perks</Link>
            <Link to="/where-to-buy" className="hover:text-drp-accent transition-colors">Where to Buy</Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/pepper-perks" className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link 
              to="/where-to-buy" 
              className="bg-drp-maroon hover:bg-red-800 text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wide text-sm flex items-center gap-2 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Find Near You
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-drp-dark text-drp-cream pt-20 flex flex-col"
          >
            <nav className="flex flex-col p-6 gap-6 text-2xl font-display uppercase">
              <Link to="/products" className="border-b border-white/10 pb-4">The Lineup</Link>
              <Link to="/pepper-perks" className="border-b border-white/10 pb-4">Pepper Perks</Link>
              <Link to="/where-to-buy" className="border-b border-white/10 pb-4">Where to Buy</Link>
              <Link to="/trade" className="border-b border-white/10 pb-4">Trade & Partners</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-drp-dark text-drp-cream py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-display font-bold mb-6">Dr Pepper</h3>
            <p className="text-white/60 text-sm">The one you crave. 23 signature flavors. Zero compromises.</p>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-sm">Explore</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link to="/products" className="hover:text-white transition-colors">The Lineup</Link></li>
              <li><Link to="/pepper-perks" className="hover:text-white transition-colors">Pepper Perks</Link></li>
              <li><Link to="/where-to-buy" className="hover:text-white transition-colors">Store Locator</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-sm">Business</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><Link to="/trade" className="hover:text-white transition-colors">Trade & Partners</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Fountain & Equipment</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Media & Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
