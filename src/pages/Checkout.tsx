import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, CreditCard, Smartphone, Banknote, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const Checkout: React.FC = () => {
  const { state, dispatch } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();
  
  const [selectedAddress, setSelectedAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: 'home',
    address: '',
    landmark: '',
    city: '',
    pincode: ''
  });

  const deliveryFee = 40;
  const gstAndCharges = state.totalAmount * 0.05;
  const totalAmount = state.totalAmount + deliveryFee + gstAndCharges;

  const addresses = [
    {
      id: '1',
      type: 'home',
      address: '123 Main Street, Brigade Road',
      landmark: 'Near Commercial Street',
      city: 'Bangalore',
      pincode: '560001'
    },
    {
      id: '2',
      type: 'work',
      address: '456 Tech Park, Whitefield',
      landmark: 'Next to ITPL',
      city: 'Bangalore',
      pincode: '560066'
    }
  ];

  const paymentOptions = [
    { id: 'upi', name: 'UPI', icon: <Smartphone className="text-blue-500" size={20} /> },
    { id: 'card', name: 'Credit/Debit Card', icon: <CreditCard className="text-green-500" size={20} /> },
    { id: 'cod', name: 'Cash on Delivery', icon: <Banknote className="text-orange-500" size={20} /> }
  ];

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to the backend
    setShowAddressForm(false);
    setNewAddress({ type: 'home', address: '', landmark: '', city: '', pincode: '' });
  };

  const handlePlaceOrder = () => {
    if (!selectedAddress || !paymentMethod) {
      alert('Please select address and payment method');
      return;
    }

    const orderId = 'ORD' + Date.now();
    dispatch({ type: 'CLEAR_CART' });
    navigate(`/order-tracking/${orderId}`);
  };

  if (state.totalItems === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                  <MapPin className="mr-2" size={20} />
                  Delivery Address
                </h2>
                <button
                  onClick={() => setShowAddressForm(!showAddressForm)}
                  className="text-orange-500 hover:text-orange-600 font-medium flex items-center"
                >
                  <Plus size={16} className="mr-1" />
                  Add New
                </button>
              </div>
              
              {showAddressForm && (
                <form onSubmit={handleAddressSubmit} className="mb-6 p-4 border border-gray-200 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address Type
                      </label>
                      <select
                        value={newAddress.type}
                        onChange={(e) => setNewAddress({...newAddress, type: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Pincode
                      </label>
                      <input
                        type="text"
                        value={newAddress.pincode}
                        onChange={(e) => setNewAddress({...newAddress, pincode: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Address
                      </label>
                      <textarea
                        value={newAddress.address}
                        onChange={(e) => setNewAddress({...newAddress, address: e.target.value})}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Landmark
                      </label>
                      <input
                        type="text"
                        value={newAddress.landmark}
                        onChange={(e) => setNewAddress({...newAddress, landmark: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        value={newAddress.city}
                        onChange={(e) => setNewAddress({...newAddress, city: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex space-x-3 mt-4">
                    <button
                      type="submit"
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Save Address
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowAddressForm(false)}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
              
              <div className="space-y-3">
                {addresses.map((address) => (
                  <label key={address.id} className="block">
                    <input
                      type="radio"
                      name="address"
                      value={address.id}
                      checked={selectedAddress === address.id}
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      selectedAddress === address.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm font-medium capitalize mb-2">
                            {address.type}
                          </span>
                          <p className="text-gray-800 font-medium">{address.address}</p>
                          <p className="text-gray-600 text-sm">{address.landmark}</p>
                          <p className="text-gray-600 text-sm">{address.city} - {address.pincode}</p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedAddress === address.id
                            ? 'border-orange-500 bg-orange-500'
                            : 'border-gray-300'
                        }`}>
                          {selectedAddress === address.id && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Payment Method</h2>
              
              <div className="space-y-3">
                {paymentOptions.map((option) => (
                  <label key={option.id} className="block">
                    <input
                      type="radio"
                      name="payment"
                      value={option.id}
                      checked={paymentMethod === option.id}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="sr-only"
                    />
                    <div className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                      paymentMethod === option.id
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {option.icon}
                          <span className="font-medium">{option.name}</span>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          paymentMethod === option.id
                            ? 'border-orange-500 bg-orange-500'
                            : 'border-gray-300'
                        }`}>
                          {paymentMethod === option.id && (
                            <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm sticky top-32">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Order Summary</h2>
              </div>
              
              <div className="p-6 space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-gray-600 text-sm ml-2">x{item.quantity}</span>
                    </div>
                    <span className="font-medium">₹{item.price * item.quantity}</span>
                  </div>
                ))}
                
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{state.totalAmount}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span className="font-medium">₹{deliveryFee}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">GST & Charges</span>
                    <span className="font-medium">₹{gstAndCharges.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-lg font-bold border-t pt-2">
                    <span>Total</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-t">
                <button
                  onClick={handlePlaceOrder}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;