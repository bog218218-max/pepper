import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { products } from '../data';

export default function Products() {
  return (
    <div className="min-h-screen bg-drp-cream pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold text-drp-dark uppercase leading-none mb-6">
            The Lineup
          </h1>
          <p className="text-xl text-drp-dark/70 max-w-2xl">
            From the original 23 flavors to zero sugar and bold new twists. Find your perfect Pepper.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                to={`/products/${product.id}`}
                className="group block relative rounded-3xl overflow-hidden aspect-[4/5] bg-zinc-100 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${product.bgColor}`} />
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />
                
                {product.isLimitedEdition && (
                  <div className="absolute top-6 left-6 bg-drp-accent text-drp-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
                    Limited Edition
                  </div>
                )}

                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                  <h2 className="text-3xl font-display font-bold text-white uppercase mb-2 group-hover:-translate-y-2 transition-transform duration-300">{product.name}</h2>
                  <p className="text-white/80 font-medium group-hover:-translate-y-2 transition-transform duration-300 delay-75">{product.subtitle}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
