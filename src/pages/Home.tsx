import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-drp-maroon overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=2000" 
            alt="Dr Pepper Background" 
            className="w-full h-full object-cover opacity-40 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-drp-dark via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold text-drp-cream leading-[0.85] mb-6 uppercase">
              The One You <br/><span className="text-drp-accent">Crave.</span>
            </h1>
            <p className="text-xl md:text-2xl text-drp-cream/90 font-medium mb-10 max-w-xl">
              23 signature flavors. Zero compromises. Discover the bold taste of Dr Pepper.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/where-to-buy" 
                className="bg-drp-cream text-drp-dark px-8 py-4 rounded-full font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-white transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Find Near You
              </Link>
              <Link 
                to="/products" 
                className="bg-transparent border-2 border-drp-cream text-drp-cream px-8 py-4 rounded-full font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-drp-cream/10 transition-colors"
              >
                Explore Flavors
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Lineup */}
      <section className="py-24 bg-drp-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-drp-dark uppercase leading-none">
                Meet The <br/>Family
              </h2>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 font-bold uppercase tracking-wide hover:text-drp-maroon transition-colors">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  to={`/products/${product.id}`}
                  className="group block relative rounded-2xl overflow-hidden aspect-[3/4] bg-zinc-100"
                >
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${product.bgColor}`} />
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                    <h3 className="text-2xl font-display font-bold text-white uppercase mb-1">{product.name}</h3>
                    <p className="text-white/80 text-sm font-medium">{product.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
            <Link to="/products" className="flex items-center justify-center gap-2 font-bold uppercase tracking-wide w-full py-4 border-2 border-drp-dark rounded-full">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pepper Perks Teaser */}
      <section className="py-24 bg-drp-dark text-drp-cream overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-drp-maroon/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase leading-[0.9] mb-6">
                Drink. Earn. <br/><span className="text-drp-accent">Get Rewarded.</span>
              </h2>
              <p className="text-xl text-white/70 mb-8 max-w-md">
                Join Pepper Perks today. Buy Dr Pepper, scan your receipt, and unlock exclusive gear, experiences, and more.
              </p>
              <Link 
                to="/pepper-perks" 
                className="inline-flex bg-drp-accent text-drp-dark px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white transition-colors"
              >
                Join The Pack
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-full border border-white/10 flex items-center justify-center p-8"
            >
              <div className="absolute inset-8 rounded-full border border-white/20 border-dashed animate-[spin_20s_linear_infinite]" />
              <img 
                src="https://images.unsplash.com/photo-1527269534026-c86f4009eace?auto=format&fit=crop&q=80&w=800" 
                alt="Pepper Perks Merch" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
