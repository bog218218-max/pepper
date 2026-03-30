import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data';
import { MapPin, ArrowLeft, Info } from 'lucide-react';
import { useState } from 'react';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [showNutrition, setShowNutrition] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-drp-cream">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Flavor Not Found</h1>
          <Link to="/products" className="text-drp-maroon font-bold uppercase hover:underline">Back to Lineup</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-drp-cream">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
        
        {/* Left: Image/Sensory */}
        <div className={`relative flex items-center justify-center p-12 ${product.bgColor}`}>
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          <Link to="/products" className="absolute top-8 left-8 text-white flex items-center gap-2 font-bold uppercase tracking-wide hover:opacity-70 transition-opacity z-20">
            <ArrowLeft className="w-5 h-5" /> Back
          </Link>
          
          <motion.img 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            src={product.image} 
            alt={product.name}
            className="relative z-10 w-full max-w-md object-contain mix-blend-multiply drop-shadow-2xl"
          />
        </div>

        {/* Right: Content */}
        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 bg-drp-cream">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {product.isLimitedEdition && (
              <span className="inline-block bg-drp-accent text-drp-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
                Limited Edition
              </span>
            )}
            
            <h1 className="text-5xl md:text-7xl font-display font-bold text-drp-dark uppercase leading-none mb-4">
              {product.name}
            </h1>
            <p className="text-2xl font-display text-drp-maroon uppercase tracking-wide mb-8">
              {product.subtitle}
            </p>
            
            <p className="text-lg text-drp-dark/80 mb-12 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-12">
              <h3 className="font-bold uppercase tracking-wider text-sm mb-4 text-drp-dark/60">Tasting Notes</h3>
              <div className="flex flex-wrap gap-2">
                {product.tastingNotes.map(note => (
                  <span key={note} className="bg-white border border-drp-dark/10 px-4 py-2 rounded-full text-sm font-medium">
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-12">
              <h3 className="font-bold uppercase tracking-wider text-sm mb-4 text-drp-dark/60">Available In</h3>
              <div className="flex flex-wrap gap-2">
                {product.formats.map(format => (
                  <span key={format} className="bg-drp-dark/5 px-4 py-2 rounded-full text-sm font-medium">
                    {format}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link 
                to="/where-to-buy" 
                className="bg-drp-maroon text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide flex items-center gap-2 hover:bg-red-800 transition-colors"
              >
                <MapPin className="w-5 h-5" />
                Find Near You
              </Link>
              
              <button 
                onClick={() => setShowNutrition(!showNutrition)}
                className="p-4 rounded-full border-2 border-drp-dark/10 hover:bg-drp-dark/5 transition-colors"
                aria-label="Nutritional Information"
              >
                <Info className="w-5 h-5" />
              </button>
            </div>

            {/* Nutrition Accordion */}
            {showNutrition && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-8 p-6 bg-white rounded-2xl border border-drp-dark/10"
              >
                <h4 className="font-bold uppercase tracking-wider mb-4">Nutrition Facts</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-drp-dark/10 pb-2">
                    <span>Calories</span>
                    <span className="font-bold">{product.id.includes('zero') ? '0' : '150'}</span>
                  </div>
                  <div className="flex justify-between border-b border-drp-dark/10 pb-2">
                    <span>Total Fat</span>
                    <span className="font-bold">0g</span>
                  </div>
                  <div className="flex justify-between border-b border-drp-dark/10 pb-2">
                    <span>Sodium</span>
                    <span className="font-bold">55mg</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span>Total Carbohydrate</span>
                    <span className="font-bold">{product.id.includes('zero') ? '0g' : '40g'}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
