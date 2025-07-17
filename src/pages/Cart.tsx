import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  const deliveryFee = 40;
  const gstAndCharges = state.totalAmount * 0.05;
  const couponDiscount = appliedCoupon ? 50 : 0;
  const totalAmount = state.totalAmount + deliveryFee + gstAndCharges - couponDiscount;

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity === 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: itemId });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
    }
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'welcome50') {
      setAppliedCoupon('WELCOME50');
      setCouponCode('');
    } else {
      alert('Invalid coupon code');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  if (state.totalItems === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="mx-auto mb-4 text-gray-400" size={64} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious items to your cart</p>
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

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-800">
                  Items ({state.totalItems})
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {state.items.map((item) => (
                  <div key={item.id} className="p-6 flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                      <p className="text-gray-600">₹{item.price}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2 bg-gray-100 rounded-lg">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-3 py-2 font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                        className="text-red-500 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                    
                    <div className="text-lg font-semibold text-gray-800">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
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
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{state.totalAmount}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Fee</span>
                  <span className="font-medium">₹{deliveryFee}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">GST & Restaurant Charges</span>
                  <span className="font-medium">₹{gstAndCharges.toFixed(2)}</span>
                </div>
                
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Coupon Discount ({appliedCoupon})</span>
                    <span>-₹{couponDiscount}</span>
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>₹{totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {/* Coupon Section */}
              <div className="p-6 border-t">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Apply Coupon</h3>
                
                {appliedCoupon ? (
                  <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                    <span className="text-green-600 font-medium">{appliedCoupon} applied</span>
                    <button
                      onClick={removeCoupon}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button
                      onClick={applyCoupon}
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                )}
                
                <div className="mt-4 space-y-2">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm font-medium text-gray-800">Available Coupons:</p>
                    <p className="text-sm text-gray-600">WELCOME50 - ₹50 off</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 border-t">
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;