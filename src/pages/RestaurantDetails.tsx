import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Clock, MapPin, Plus, Minus, ShoppingCart, Leaf, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getRestaurantById } from '../data/restaurants';

const RestaurantDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useCart();
  const [activeCategory, setActiveCategory] = useState('recommended');

  const restaurant = getRestaurantById(id || '');

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Restaurant not found</h2>
          <button
            onClick={() => navigate('/restaurants')}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Browse Restaurants
          </button>
        </div>
      </div>
    );
  }

  const filteredItems = activeCategory === 'recommended' 
    ? restaurant.menu.filter(item => item.popular)
    : restaurant.menu.filter(item => item.category === activeCategory);

  const getItemQuantity = (itemId: string) => {
    const item = state.items.find(item => item.id === itemId);
    return item ? item.quantity : 0;
  };

  const addToCart = (item: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        restaurantId: restaurant.id,
        image: item.image
      }
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
    }
  };

  const getSpiceIcon = (level?: string) => {
    if (!level) return null;
    const color = level === 'mild' ? 'text-green-500' : level === 'medium' ? 'text-yellow-500' : 'text-red-500';
    return <Flame className={color} size={16} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            
            <div className="md:w-2/3">
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-800">{restaurant.name}</h1>
                {restaurant.isOpen ? (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    Open
                  </span>
                ) : (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                    Closed
                  </span>
                )}
              </div>
              <p className="text-gray-600 mb-4">{restaurant.cuisine}</p>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="text-green-500 fill-current" size={20} />
                  <span className="font-medium">{restaurant.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="text-gray-400" size={20} />
                  <span>{restaurant.deliveryTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="text-gray-400" size={20} />
                  <span>{restaurant.distance}</span>
                </div>
              </div>
              
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <span className="text-orange-600 font-semibold">{restaurant.offer}</span>
              </div>
              
              <p className="text-gray-600 mb-2">{restaurant.address}</p>
              <p className="text-gray-500 text-sm">{restaurant.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Menu Categories */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Menu</h2>
              <nav className="space-y-2">
                {restaurant.categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeCategory === category.id
                        ? 'bg-orange-50 text-orange-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="capitalize">{category.name}</span>
                      <span className="text-sm text-gray-400">({category.count})</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Menu Items */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800 capitalize">
                  {activeCategory === 'recommended' ? 'Recommended' : activeCategory}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {filteredItems.length} items available
                </p>
              </div>
              
              <div className="divide-y divide-gray-200">
                {filteredItems.map((item) => (
                  <div key={item.id} className="p-6 flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-3 h-3 rounded-full ${
                          item.isVeg ? 'bg-green-500' : 'bg-red-500'
                        }`}></div>
                        <Leaf className={`${item.isVeg ? 'text-green-500' : 'text-red-500'}`} size={16} />
                        {item.popular && (
                          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-medium">
                            Popular
                          </span>
                        )}
                        {getSpiceIcon(item.spiceLevel)}
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.name}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                      
                      {item.customizations && item.customizations.length > 0 && (
                        <div className="mb-3">
                          <p className="text-xs text-gray-500 mb-1">Customizations available:</p>
                          <div className="flex flex-wrap gap-1">
                            {item.customizations.slice(0, 3).map((custom, index) => (
                              <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                {custom}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-bold text-gray-800">₹{item.price}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="text-green-500 fill-current" size={16} />
                          <span className="text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      
                      {getItemQuantity(item.id) === 0 ? (
                        <button
                          onClick={() => addToCart(item)}
                          disabled={!restaurant.isOpen}
                          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-1 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          <Plus size={16} />
                          <span>Add</span>
                        </button>
                      ) : (
                        <div className="flex items-center space-x-2 bg-orange-500 text-white rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, getItemQuantity(item.id) - 1)}
                            className="p-2 hover:bg-orange-600 rounded-l-lg transition-colors"
                          >
                            <Minus size={16} />
                          </button>
                          <span className="px-3 py-2 font-medium">{getItemQuantity(item.id)}</span>
                          <button
                            onClick={() => updateQuantity(item.id, getItemQuantity(item.id) + 1)}
                            className="p-2 hover:bg-orange-600 rounded-r-lg transition-colors"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {filteredItems.length === 0 && (
                <div className="p-12 text-center">
                  <p className="text-gray-500 text-lg">No items available in this category</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Cart Button */}
      {state.totalItems > 0 && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
          <button
            onClick={() => navigate('/cart')}
            className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
          >
            <ShoppingCart size={20} />
            <span>{state.totalItems} items | ₹{state.totalAmount}</span>
            <span className="ml-2">View Cart</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetails;