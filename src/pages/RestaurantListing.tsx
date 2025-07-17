import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Clock, ArrowRight } from 'lucide-react';
import { restaurants } from '../data/restaurants';

const RestaurantListing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('relevance');

  const filters = {
    cuisines: ['North Indian', 'South Indian', 'Chinese', 'Italian', 'Pizza', 'Burgers', 'Desserts', 'Beverages'],
    ratings: ['4.0+', '3.5+', '3.0+'],
    deliveryTime: ['Under 30 mins', '30-45 mins', '45+ mins'],
    offers: ['Great Offers', 'Free Delivery', 'New on Swiggy']
  };

  const filteredRestaurants = restaurants.filter(restaurant => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         restaurant.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedFilters.length === 0) return matchesSearch;
    
    return matchesSearch && selectedFilters.some(filter => {
      // Check cuisine filters
      if (filters.cuisines.includes(filter)) {
        return restaurant.cuisine.toLowerCase().includes(filter.toLowerCase());
      }
      
      // Check rating filters
      if (filters.ratings.includes(filter)) {
        const minRating = parseFloat(filter.replace('+', ''));
        return restaurant.rating >= minRating;
      }
      
      // Check delivery time filters
      if (filters.deliveryTime.includes(filter)) {
        const deliveryMinutes = parseInt(restaurant.deliveryTime.split('-')[0]);
        if (filter === 'Under 30 mins') return deliveryMinutes < 30;
        if (filter === '30-45 mins') return deliveryMinutes >= 30 && deliveryMinutes <= 45;
        if (filter === '45+ mins') return deliveryMinutes > 45;
      }
      
      return false;
    });
  });

  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const clearFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for restaurants and food"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-800">Filters</h2>
                {selectedFilters.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-orange-500 hover:text-orange-600 text-sm font-medium"
                  >
                    Clear all
                  </button>
                )}
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Sort by</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="relevance">Relevance</option>
                  <option value="rating">Rating</option>
                  <option value="deliveryTime">Delivery Time</option>
                  <option value="priceForTwo">Price: Low to High</option>
                </select>
              </div>

              {/* Cuisines */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Cuisines</h3>
                <div className="space-y-2">
                  {filters.cuisines.map((cuisine) => (
                    <label key={cuisine} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(cuisine)}
                        onChange={() => toggleFilter(cuisine)}
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{cuisine}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ratings */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Rating</h3>
                <div className="space-y-2">
                  {filters.ratings.map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(rating)}
                        onChange={() => toggleFilter(rating)}
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Delivery Time */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Delivery Time</h3>
                <div className="space-y-2">
                  {filters.deliveryTime.map((time) => (
                    <label key={time} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(time)}
                        onChange={() => toggleFilter(time)}
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Offers */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Offers</h3>
                <div className="space-y-2">
                  {filters.offers.map((offer) => (
                    <label key={offer} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedFilters.includes(offer)}
                        onChange={() => toggleFilter(offer)}
                        className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">{offer}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Restaurant Grid */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Restaurants delivering to you
              </h1>
              <p className="text-gray-600">
                {filteredRestaurants.length} restaurants found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <Link
                  key={restaurant.id}
                  to={`/restaurant/${restaurant.id}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow group"
                >
                  <div className="relative">
                    <img
                      src={restaurant.image}
                      alt={restaurant.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
                      <span className="text-white text-sm font-medium bg-orange-500 px-2 py-1 rounded">
                        {restaurant.offer}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{restaurant.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{restaurant.cuisine}</p>
                    
                    <div className="flex items-center justify-between text-sm mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1">
                          <Star className="text-green-500 fill-current" size={16} />
                          <span className="font-medium">{restaurant.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="text-gray-400" size={16} />
                          <span>{restaurant.deliveryTime}</span>
                        </div>
                      </div>
                      <span className="text-gray-600">{restaurant.distance}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">{restaurant.priceForTwo} for two</span>
                      <ArrowRight className="text-orange-500" size={16} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredRestaurants.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No restaurants found matching your criteria.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Load More */}
            {filteredRestaurants.length > 0 && (
              <div className="text-center mt-8">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                Load More Restaurants
              </button>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantListing;