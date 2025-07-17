import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, MessageSquare, Phone, Mail } from 'lucide-react';

const Help: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [ticketForm, setTicketForm] = useState({
    category: '',
    subject: '',
    description: '',
    email: '',
    phone: ''
  });
  const [showTicketForm, setShowTicketForm] = useState(false);

  const categories = [
    { id: 'orders', name: 'Orders & Delivery', icon: '📦' },
    { id: 'payment', name: 'Payment & Refunds', icon: '💳' },
    { id: 'account', name: 'Account & Profile', icon: '👤' },
    { id: 'restaurant', name: 'Restaurant Issues', icon: '🍽️' },
    { id: 'offers', name: 'Offers & Coupons', icon: '🎟️' },
    { id: 'other', name: 'Other Issues', icon: '❓' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'orders',
      question: 'How can I track my order?',
      answer: 'You can track your order in real-time by visiting the "Order Tracking" page or clicking on the tracking link sent to your phone number.'
    },
    {
      id: 2,
      category: 'orders',
      question: 'What if my order is delayed?',
      answer: 'If your order is delayed, you can contact the restaurant directly or reach out to our support team. We also provide automatic updates for any delays.'
    },
    {
      id: 3,
      category: 'payment',
      question: 'How do I get a refund?',
      answer: 'Refunds are processed automatically for cancelled orders. For other issues, please contact our support team with your order details.'
    },
    {
      id: 4,
      category: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept UPI, Credit/Debit Cards, Net Banking, and Cash on Delivery (where available).'
    },
    {
      id: 5,
      category: 'account',
      question: 'How do I change my phone number?',
      answer: 'You can update your phone number in the Profile section of your account. You\'ll need to verify the new number with an OTP.'
    },
    {
      id: 6,
      category: 'offers',
      question: 'Why didn\'t my coupon work?',
      answer: 'Coupons may not work due to minimum order requirements, expiry dates, or restaurant restrictions. Please check the coupon terms and conditions.'
    }
  ];

  const filteredFaqs = searchQuery 
    ? faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Your ticket has been submitted! We\'ll get back to you within 24 hours.');
    setTicketForm({ category: '', subject: '', description: '', email: '', phone: '' });
    setShowTicketForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Help & Support</h1>
          <p className="text-gray-600">Find answers to your questions or get in touch with us</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Phone className="mx-auto mb-3 text-orange-500" size={32} />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-3">Get instant help over phone</p>
            <a href="tel:1800-123-4567" className="text-orange-500 hover:text-orange-600 font-medium">
              1800-123-4567
            </a>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <MessageSquare className="mx-auto mb-3 text-blue-500" size={32} />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Live Chat</h3>
            <p className="text-gray-600 text-sm mb-3">Chat with our support team</p>
            <button className="text-blue-500 hover:text-blue-600 font-medium">
              Start Chat
            </button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <Mail className="mx-auto mb-3 text-green-500" size={32} />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-3">Send us your query</p>
            <button
              onClick={() => setShowTicketForm(true)}
              className="text-green-500 hover:text-green-600 font-medium"
            >
              Raise Ticket
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow text-left"
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <h3 className="font-medium text-gray-800">{category.name}</h3>
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {expandedFaq === faq.id ? (
                    <ChevronUp className="text-gray-500" size={20} />
                  ) : (
                    <ChevronDown className="text-gray-500" size={20} />
                  )}
                </button>
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Form Modal */}
        {showTicketForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Raise a Support Ticket</h2>
              
              <form onSubmit={handleTicketSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    value={ticketForm.category}
                    onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={ticketForm.subject}
                    onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={ticketForm.description}
                    onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={ticketForm.email}
                    onChange={(e) => setTicketForm({...ticketForm, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={ticketForm.phone}
                    onChange={(e) => setTicketForm({...ticketForm, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Submit Ticket
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowTicketForm(false)}
                    className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Help;