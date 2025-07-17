import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, Clock, Truck, MapPin, Phone } from 'lucide-react';

const OrderTracking: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const orderDetails = {
    id: orderId,
    status: 'preparing',
    items: [
      { name: 'Whopper', quantity: 1, price: 199 },
      { name: 'French Fries', quantity: 1, price: 89 },
      { name: 'Coca Cola', quantity: 1, price: 59 }
    ],
    total: 397,
    estimatedTime: '25-30 mins',
    restaurant: {
      name: 'Burger King',
      address: '1st Floor, Brigade Road, Bangalore'
    },
    rider: {
      name: 'Rajesh Kumar',
      phone: '+91 9876543210',
      rating: 4.8
    }
  };

  const statuses = [
    { id: 'confirmed', label: 'Order Confirmed', icon: CheckCircle, completed: true },
    { id: 'preparing', label: 'Preparing', icon: Clock, completed: true },
    { id: 'ready', label: 'Ready for Pickup', icon: CheckCircle, completed: false },
    { id: 'picked', label: 'Picked Up', icon: Truck, completed: false },
    { id: 'delivered', label: 'Delivered', icon: CheckCircle, completed: false }
  ];

  const currentStatusIndex = statuses.findIndex(s => s.id === orderDetails.status);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Order #{orderDetails.id}</h1>
              <p className="text-gray-600">Estimated delivery: {orderDetails.estimatedTime}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-orange-500">₹{orderDetails.total}</div>
              <div className="text-sm text-gray-600">Total Amount</div>
            </div>
          </div>

          {/* Order Status */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Status</h2>
            <div className="relative">
              <div className="flex items-center justify-between">
                {statuses.map((status, index) => {
                  const Icon = status.icon;
                  const isCompleted = index <= currentStatusIndex;
                  const isCurrent = index === currentStatusIndex;
                  
                  return (
                    <div key={status.id} className="flex flex-col items-center relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        isCompleted 
                          ? 'bg-green-500 text-white' 
                          : isCurrent 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        <Icon size={20} />
                      </div>
                      <span className={`text-sm font-medium ${
                        isCompleted || isCurrent ? 'text-gray-800' : 'text-gray-400'
                      }`}>
                        {status.label}
                      </span>
                      
                      {index < statuses.length - 1 && (
                        <div className={`absolute top-6 left-12 w-full h-0.5 ${
                          isCompleted ? 'bg-green-500' : 'bg-gray-200'
                        }`} style={{ width: 'calc(100% + 1rem)' }} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Live Tracking */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Live Tracking</h2>
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Truck className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Your order is being prepared</h3>
                  <p className="text-sm text-gray-600">The restaurant is preparing your delicious meal</p>
                </div>
              </div>
              
              <div className="bg-blue-100 rounded-lg p-4 mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="text-blue-600" size={16} />
                  <span className="text-sm font-medium text-blue-800">Restaurant Location</span>
                </div>
                <p className="text-sm text-blue-700">{orderDetails.restaurant.address}</p>
              </div>
            </div>
          </div>

          {/* Rider Details */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Delivery Partner</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">
                      {orderDetails.rider.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">{orderDetails.rider.name}</h3>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm text-gray-600">Rating: {orderDetails.rider.rating}</span>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < Math.floor(orderDetails.rider.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href={`tel:${orderDetails.rider.phone}`}
                  className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-3">
              {orderDetails.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-gray-600 text-sm ml-2">x{item.quantity}</span>
                  </div>
                  <span className="font-medium">₹{item.price}</span>
                </div>
              ))}
              <div className="border-t pt-3">
                <div className="flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span>₹{orderDetails.total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
          >
            Order Again
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;