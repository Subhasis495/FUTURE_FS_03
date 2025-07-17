import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Clock, Heart, Settings, LogOut, Edit2, Plus } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Profile: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const pastOrders = [
    {
      id: 'ORD001',
      restaurant: 'Burger King',
      items: ['Whopper', 'French Fries', 'Coca Cola'],
      total: 397,
      date: '2024-01-15',
      status: 'Delivered'
    },
    {
      id: 'ORD002',
      restaurant: 'Pizza Hut',
      items: ['Margherita Pizza', 'Garlic Bread'],
      total: 599,
      date: '2024-01-12',
      status: 'Delivered'
    },
    {
      id: 'ORD003',
      restaurant: 'KFC',
      items: ['Chicken Bucket', 'Pepsi'],
      total: 449,
      date: '2024-01-10',
      status: 'Delivered'
    }
  ];

  const addresses = [
    {
      id: '1',
      type: 'home',
      address: '123 Main Street, Brigade Road',
      landmark: 'Near Commercial Street',
      city: 'Bangalore',
      pincode: '560001',
      isDefault: true
    },
    {
      id: '2',
      type: 'work',
      address: '456 Tech Park, Whitefield',
      landmark: 'Next to ITPL',
      city: 'Bangalore',
      pincode: '560066',
      isDefault: false
    }
  ];

  const favorites = [
    {
      id: 1,
      name: 'Burger King',
      cuisine: 'Burgers, American',
      rating: 4.2,
      image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Pizza Hut',
      cuisine: 'Pizzas, Italian',
      rating: 4.1,
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const tabs = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Orders', icon: Clock },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'favorites', label: 'Favorites', icon: Heart }
  ];

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
                  <p className="text-gray-600">{user.phone}</p>
                  {user.email && <p className="text-gray-600">{user.email}</p>}
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                  <Settings size={20} />
                  <span>Settings</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-800 transition-colors"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-orange-500 text-orange-600'
                        : 'border-transparent text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    <Icon size={20} />
                    <span className="font-medium">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={user.name}
                          readOnly
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                        <button className="text-orange-500 hover:text-orange-600">
                          <Edit2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="tel"
                          value={user.phone}
                          readOnly
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                        />
                        <button className="text-orange-500 hover:text-orange-600">
                          <Edit2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <div className="flex items-center space-x-2">
                        <input
                          type="email"
                          value={user.email || ''}
                          readOnly
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                          placeholder="Add email address"
                        />
                        <button className="text-orange-500 hover:text-orange-600">
                          <Edit2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Orders Tab */}
            {activeTab === 'orders' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Orders</h2>
                <div className="space-y-4">
                  {pastOrders.map((order) => (
                    <div key={order.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-gray-800">{order.restaurant}</h3>
                          <p className="text-sm text-gray-600">Order #{order.id}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800">₹{order.total}</p>
                          <p className="text-sm text-gray-600">{order.date}</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        <p className="text-sm text-gray-600">Items: {order.items.join(', ')}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                          {order.status}
                        </span>
                        <div className="space-x-2">
                          <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                            View Details
                          </button>
                          <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                            Reorder
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Addresses Tab */}
            {activeTab === 'addresses' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">Saved Addresses</h2>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2">
                    <Plus size={16} />
                    <span>Add New Address</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {addresses.map((address) => (
                    <div key={address.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium capitalize">
                              {address.type}
                            </span>
                            {address.isDefault && (
                              <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                                Default
                              </span>
                            )}
                          </div>
                          <p className="text-gray-800 font-medium">{address.address}</p>
                          <p className="text-gray-600 text-sm">{address.landmark}</p>
                          <p className="text-gray-600 text-sm">{address.city} - {address.pincode}</p>
                        </div>
                        <div className="space-x-2">
                          <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                            Edit
                          </button>
                          <button className="text-red-500 hover:text-red-600 text-sm font-medium">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Favorites Tab */}
            {activeTab === 'favorites' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Favorites</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {favorites.map((restaurant) => (
                    <div key={restaurant.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center space-x-4">
                        <img
                          src={restaurant.image}
                          alt={restaurant.name}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">{restaurant.name}</h3>
                          <p className="text-sm text-gray-600">{restaurant.cuisine}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <span className="text-sm font-medium">{restaurant.rating}</span>
                            <span className="text-yellow-400">★</span>
                          </div>
                        </div>
                        <button className="text-red-500 hover:text-red-600">
                          <Heart className="fill-current" size={20} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;