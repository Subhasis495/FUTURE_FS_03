import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, ArrowRight } from 'lucide-react';
import { useUser } from '../context/UserContext';

const Login: React.FC = () => {
  const [step, setStep] = useState<'phone' | 'otp' | 'details'>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: ''
  });
  const { login } = useUser();
  const navigate = useNavigate();

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      setStep('otp');
    }
  };

  const handleOtpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === '1234') { // Mock OTP verification
      setStep('details');
    } else {
      alert('Invalid OTP. Please use 1234 for demo.');
    }
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      id: Date.now().toString(),
      name: userDetails.name,
      phone: phoneNumber,
      email: userDetails.email,
      addresses: []
    };
    login(user);
    navigate('/');
  };

  const resendOtp = () => {
    alert('OTP resent! Use 1234 for demo.');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Smartphone className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            {step === 'phone' && 'Sign in to Swiggy'}
            {step === 'otp' && 'Verify your phone'}
            {step === 'details' && 'Complete your profile'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {step === 'phone' && 'Enter your phone number to continue'}
            {step === 'otp' && `We've sent a 4-digit code to +91 ${phoneNumber}`}
            {step === 'details' && 'Tell us a bit about yourself'}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {step === 'phone' && (
            <form onSubmit={handlePhoneSubmit} className="space-y-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    +91
                  </span>
                  <input
                    id="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={phoneNumber.length !== 10}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
              >
                Send OTP
                <ArrowRight className="ml-2" size={20} />
              </button>
            </form>
          )}

          {step === 'otp' && (
            <form onSubmit={handleOtpSubmit} className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 4))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-center text-2xl tracking-widest"
                  placeholder="- - - -"
                  maxLength={4}
                  required
                />
              </div>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={resendOtp}
                  className="text-orange-500 hover:text-orange-600 font-medium text-sm"
                >
                  Didn't receive OTP? Resend
                </button>
              </div>
              
              <button
                type="submit"
                disabled={otp.length !== 4}
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center"
              >
                Verify OTP
                <ArrowRight className="ml-2" size={20} />
              </button>
              
              <button
                type="button"
                onClick={() => setStep('phone')}
                className="w-full text-gray-600 py-2 text-sm hover:text-gray-800 transition-colors"
              >
                Change phone number
              </button>
            </form>
          )}

          {step === 'details' && (
            <form onSubmit={handleDetailsSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({...userDetails, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address (Optional)
                </label>
                <input
                  id="email"
                  type="email"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({...userDetails, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium flex items-center justify-center"
              >
                Complete Registration
                <ArrowRight className="ml-2" size={20} />
              </button>
            </form>
          )}
        </div>

        <div className="text-center">
          <p className="text-xs text-gray-600">
            By continuing, you agree to our{' '}
            <a href="#" className="text-orange-500 hover:text-orange-600">Terms of Service</a>
            {' '}and{' '}
            <a href="#" className="text-orange-500 hover:text-orange-600">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;