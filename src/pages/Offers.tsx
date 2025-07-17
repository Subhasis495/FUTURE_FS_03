import React, { useState } from 'react';
import { Copy, Check, Filter } from 'lucide-react';

const Offers: React.FC = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const offers = [
    {
      id: 1,
      code: 'WELCOME50',
      title: '50% OFF up to ₹100',
      description: 'Get 50% off on your first order. Maximum discount ₹100.',
      validUntil: '2024-12-31',
      minOrder: 199,
      category: 'new-user',
      restaurants: ['All Restaurants'],
      color: 'bg-gradient-to-r from-orange-500 to-red-500'
    },
    {
      id: 2,
      code: 'FLAT125',
      title: 'Flat ₹125 OFF',
      description: 'Get flat ₹125 off on orders above ₹499.',
      validUntil: '2024-12-31',
      minOrder: 499,
      category: 'all',
      restaurants: ['Pizza Hut', 'Dominos', 'KFC'],
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      id: 3,
      code: 'FREEDEL',
      title: 'Free Delivery',
      description: 'Free delivery on orders above ₹199.',
      validUntil: '2024-12-31',
      minOrder: 199,
      category: 'delivery',
      restaurants: ['All Restaurants'],
      color: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    {
      id: 4,
      code: 'BANK20',
      title: '20% OFF with Bank Card',
      description: 'Get 20% off on payments with Bank Credit/Debit Cards.',
      validUntil: '2024-12-31',
      minOrder: 299,
      category: 'bank',
      restaurants: ['Selected Restaurants'],
      color: 'bg-gradient-to-r from-blue-500 to-indigo-500'
    },
    {
      id: 5,
      code: 'BURGER40',
      title: '40% OFF on Burgers',
      description: 'Get 40% off on all burger orders.',
      validUntil: '2024-12-31',
      minOrder: 149,
      category: 'category',
      restaurants: ['Burger King', 'McDonalds', 'KFC'],
      color: 'bg-gradient-to-r from-yellow-500 to-orange-500'
    },
    {
      id: 6,
      code: 'PIZZA60',
      title: '60% OFF on Pizza',
      description: 'Get 60% off on pizza orders above ₹399.',
      validUntil: '2024-12-31',
      minOrder: 399,
      category: 'category',
      restaurants: ['Pizza Hut', 'Dominos'],
      color: 'bg-gradient-to-r from-red-500 to-pink-500'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Offers', count: offers.length },
    { id: 'new-user', label: 'New User', count: offers.filter(o => o.category === 'new-user').length },
    { id: 'delivery', label: 'Free Delivery', count: offers.filter(o => o.category === 'delivery').length },
    { id: 'bank', label: 'Bank Offers', count: offers.filter(o => o.category === 'bank').length },
    { id: 'category', label: 'Category Offers', count: offers.filter(o => o.category === 'category').length }
  ];

  const filteredOffers = selectedFilter === 'all' 
    ? offers 
    : offers.filter(offer => offer.category === selectedFilter);

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Great Offers</h1>
          <p className="text-gray-600">Save more with these amazing deals and offers</p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="text-gray-600" size={20} />
            <span className="text-lg font-medium text-gray-800">Filter by:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg border transition-colors ${
                  selectedFilter === filter.id
                    ? 'bg-orange-500 text-white border-orange-500'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {filter.label} ({filter.count})
              </button>
            ))}
          </div>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOffers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className={`${offer.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{offer.title}</h3>
                  <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    <span className="text-sm font-medium">{offer.code}</span>
                  </div>
                </div>
                <p className="text-sm opacity-90">{offer.description}</p>
              </div>
              
              <div className="p-6">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Minimum Order:</span>
                    <span className="font-medium">₹{offer.minOrder}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Valid Until:</span>
                    <span className="font-medium">{offer.validUntil}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Valid at:</span>
                    <div className="mt-1">
                      {offer.restaurants.map((restaurant, index) => (
                        <span key={index} className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1 mt-1">
                          {restaurant}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => copyCode(offer.code)}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check size={20} />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={20} />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredOffers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No offers available for the selected category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Offers;