import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, MapPin, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const { state } = useCart();
  const { user, isAuthenticated, selectedLocation, setLocation } = useUser();
  const navigate = useNavigate();

  const locations = ['Bangalore', 'Mumbai', 'Delhi', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune'];

  const handleLocationSelect = (location: string) => {
    setLocation(location);
    setIsLocationOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Location */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-800 hidden sm:block">Swiggy</span>
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <MapPin size={16} />
                <span className="text-sm font-medium">{selectedLocation}</span>
              </button>
              
              {isLocationOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                  {locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => handleLocationSelect(location)}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for restaurants and food"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                onClick={() => navigate('/restaurants')}
              />
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/offers" className="text-gray-700 hover:text-orange-500 transition-colors">
              Offers
            </Link>
            <Link to="/help" className="text-gray-700 hover:text-orange-500 transition-colors">
              Help
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-orange-500 transition-colors">
              <ShoppingCart size={20} />
              {state.totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {state.totalItems}
                </span>
              )}
            </Link>
            {isAuthenticated ? (
              <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors">
                <User size={20} />
                <span className="text-sm">{user?.name}</span>
              </Link>
            ) : (
              <Link to="/login" className="text-gray-700 hover:text-orange-500 transition-colors">
                Sign In
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search for restaurants and food"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  onClick={() => navigate('/restaurants')}
                />
              </div>
              <Link to="/offers" className="text-gray-700 hover:text-orange-500 transition-colors">
                Offers
              </Link>
              <Link to="/help" className="text-gray-700 hover:text-orange-500 transition-colors">
                Help
              </Link>
              <Link to="/cart" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors">
                <ShoppingCart size={20} />
                <span>Cart {state.totalItems > 0 && `(${state.totalItems})`}</span>
              </Link>
              {isAuthenticated ? (
                <Link to="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors">
                  <User size={20} />
                  <span>{user?.name}</span>
                </Link>
              ) : (
                <Link to="/login" className="text-gray-700 hover:text-orange-500 transition-colors">
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;