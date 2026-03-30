import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import WhereToBuy from './pages/WhereToBuy';
import PepperPerks from './pages/PepperPerks';
import Trade from './pages/Trade';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="where-to-buy" element={<WhereToBuy />} />
          <Route path="pepper-perks" element={<PepperPerks />} />
          <Route path="trade" element={<Trade />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
