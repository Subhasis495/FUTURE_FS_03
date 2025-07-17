import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Smartphone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Swiggy</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              © 2024 Swiggy Limited. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/swiggy.in/" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/Swiggy" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/swiggyindia/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@SwiggyIndia" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Team</Link></li>
              <li><Link to="/swiggy-one" className="text-gray-400 hover:text-white transition-colors">Swiggy One</Link></li>
              <li><Link to="/swiggy-instamart" className="text-gray-400 hover:text-white transition-colors">Swiggy Instamart</Link></li>
              <li><Link to="/swiggy-genie" className="text-gray-400 hover:text-white transition-colors">Swiggy Genie</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help & Support</Link></li>
              <li><Link to="/partner-with-us" className="text-gray-400 hover:text-white transition-colors">Partner with us</Link></li>
              <li><Link to="/ride-with-us" className="text-gray-400 hover:text-white transition-colors">Ride with us</Link></li>
            </ul>
          </div>

          {/* Legal & Apps */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/investor-relations" className="text-gray-400 hover:text-white transition-colors">Investor Relations</Link></li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Download our apps</h4>
              <div className="flex space-x-2">
                <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
                  <Smartphone size={20} />
                </a>
                <a href="#" className="bg-gray-700 p-2 rounded-lg hover:bg-gray-600 transition-colors">
                  <Globe size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              We deliver to: Bangalore, Mumbai, Kolkata, Delhi, Chennai, Hyderabad, Pune and many more cities
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;