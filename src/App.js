import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Home from './pages/HomePage/Home';
import Shop from './pages/ShopPage/Shop';
import Cart from './pages/CartPage/Cart';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
