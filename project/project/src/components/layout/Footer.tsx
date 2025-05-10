import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and description */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold text-teal-400 mb-4">FundForward</h2>
            <p className="text-gray-300 mb-4">
              Empowering individuals and communities to bring their ideas to life through the power of collective support.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Fundraise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Start a Campaign</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Fundraising Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Campaign Guidelines</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Common Questions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Fees & Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-teal-400 transition-colors">Donor Support</a></li>
            </ul>
          </div>

          {/* Contact and newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center text-gray-300 mb-2">
              <Mail size={16} className="mr-2" /> support@fundforward.com
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full focus:outline-none text-gray-800"
                />
                <button className="bg-teal-500 text-white px-4 py-2 rounded-r-md hover:bg-teal-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} FundForward. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-teal-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;