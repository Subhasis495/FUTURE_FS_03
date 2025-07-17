import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Clock, Star, MapPin, ArrowRight } from 'lucide-react';
import { restaurants } from '../data/restaurants';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const offers = [
    {
      id: 1,
      title: "50% OFF up to ₹100",
      subtitle: "Use code WELCOME50",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
      color: "bg-orange-500"
    },
    {
      id: 2,
      title: "Free delivery",
      subtitle: "On orders above ₹199",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Flat ₹125 OFF",
      subtitle: "Use code FLAT125",
      image: "https://images.pexels.com/photos/1373915/pexels-photo-1373915.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop",
      color: "bg-purple-500"
    }
  ];

  const categories = [
    { name: "Pizza", image: "https://imgs.search.brave.com/tp4ajryGjvC2kgsrFsFYXj3OvbQcXFe3CUZpZbqm0kY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzM2LzMwLzI2/LzM2MF9GXzYzNjMw/MjYwOV9UYjFKdERU/UTR6YXdPMHViNkwy/Zkh6bHJXNTg2Zjl0/ci5qcGc" },
    { name: "Biryani", image: "https://imgs.search.brave.com/EqSYfUrxinLQ55MUUVbmtyIEXA-IM2gh8oE70WRh2XE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMz/MzEyNzY3NS9waG90/by9jaGlja2VuLWJp/cnlhbmktc3BpY3kt/aW5kaWFuLW1hbGFi/YXItYmlyeWFuaS1o/eWRlcmFiYWRpLWJp/cnlhbmktZHVtLWJp/cml5YW5pLXB1bGFv/LWdvbGRlbi5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9Y3Vv/ZjhvLThWa2RLdzJF/dURWNlhUT0ZqcVFC/b2JpZmY1dWdzQndE/NEVyZz0" },
    { name: "Chinese", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/23/7dee8d3e-b28e-4ea0-aad9-680ccbf53ca3_44277.ss.jpg" },
    { name: "Desserts", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/388bf5ed3fa93f63cc6b901466d016cf" },
    { name: "Burgers", image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/4/10/59328308-ad20-49d9-956a-c898d6573a43_45cefdad-94dc-4499-b28b-61bcd2635365.jpg" },
    { name: "South Indian", image: "https://imgs.search.brave.com/TobuH5XBaldZ3-4JIxuXKIKGgRY-mPpNyLtmJfxFmBk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vaHozZ211cXc2/L2ltYWdlL3VwbG9h/ZC9jX2ZpbGwscV8z/MCx3Xzc1MC9mX2F1/dG8vc291dGgtaW5k/aWFuLWZvb2QtcGhw/bEh0WUNG" },
    { name: "North Indian", image: "https://imgs.search.brave.com/I2-I0pb236y4J0tTKbYNAgqtQRjEAGy0LhfDqW4pzac/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTUv/OTMzLzExNS9zbWFs/bC9jaG9sZS1iaGF0/dXJlLWlzLWEtbm9y/dGgtaW5kaWFuLWZv/b2QtZGlzaC1hLWNv/bWJpbmF0aW9uLW9m/LWNoYW5hLW1hc2Fs/YS1hbmQtYmhhdHVy/YS1vci1wdXJpLWZy/ZWUtcGhvdG8uanBn" },
    { name: "Beverages", image: "https://imgs.search.brave.com/18Bgsf2ozJ4djF-lj8geN23a_HH-AfC1dCZj8DN1Kl8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWNhbGlzdGVyc2Rl/bGkuY29tLy0vbWVk/aWEvbWNhbGlzdGVy/cy9jb21wLWltYWdl/cy9tZW51L2JldmVy/YWdlcy9iZXZlcmFn/ZXNfdGVhX3RodW1i/bmFpbC02NjR4NDQw/LmpwZz92PTEmZD0y/MDI0MDUwOFQwODAy/MzBa" }
  ];

  // Show only first 6 restaurants on home page
  const featuredRestaurants = restaurants.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Order food & Discover best restaurants.
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Swiggy it!
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative">
            </div>
            <Link
              to="/restaurants"
              className="inline-flex items-center mt-6 bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Find Restaurants <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Best offers for you</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer) => (
              <div key={offer.id} className={`${offer.color} rounded-lg p-6 text-white relative overflow-hidden`}>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-sm opacity-90">{offer.subtitle}</p>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white bg-opacity-20 rounded-full transform translate-x-8 -translate-y-8"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What's on your mind?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/restaurants?category=${category.name.toLowerCase()}`}
                className="text-center group"
              >
                <div className="w-full aspect-square rounded-full overflow-hidden mb-3 transform group-hover:scale-105 transition-transform">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-medium text-gray-800 group-hover:text-orange-500 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Restaurants Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Popular restaurants</h2>
            <Link
              to="/restaurants"
              className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
            >
              See all <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRestaurants.map((restaurant) => (
              <Link
                key={restaurant.id}
                to={`/restaurant/${restaurant.id}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
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
                  
                  <div className="flex items-center justify-between text-sm">
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
                    <span className="text-gray-600">{restaurant.priceForTwo} for two</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;