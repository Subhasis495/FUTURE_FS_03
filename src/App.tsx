import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RestaurantListing from './pages/RestaurantListing';
import RestaurantDetails from './pages/RestaurantDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import OrderTracking from './pages/OrderTracking';
import Offers from './pages/Offers';
import Help from './pages/Help';
import Profile from './pages/Profile';

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurants" element={<RestaurantListing />} />
                <Route path="/restaurant/:id" element={<RestaurantDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/order-tracking/:orderId" element={<OrderTracking />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/help" element={<Help />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;