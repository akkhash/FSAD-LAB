import React, { useState } from 'react';
import { Menu, X, Search, PlusCircle, User, LogOut } from 'lucide-react';
import Button from '../ui/Button';
import { useAuth } from '../../context/AuthContext';

interface NavbarProps {
  onStartCampaign: () => void;
  onLoginClick: () => void;
  onSignupClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onStartCampaign, 
  onLoginClick, 
  onSignupClick 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo and brand */}
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 text-teal-500 font-bold text-xl">
              FundForward
            </a>
            
            {/* Desktop navigation */}
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">
                  Discover
                </a>
                <a href="#" className="text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">
                  Categories
                </a>
                <a href="#" className="text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-sm font-medium">
                  How It Works
                </a>
              </div>
            </div>
          </div>
          
          {/* Search, buttons, and profile */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search campaigns"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            {isAuthenticated ? (
              <>
                <Button 
                  variant="primary" 
                  onClick={onStartCampaign}
                  icon={<PlusCircle size={18} />}
                >
                  Start a Campaign
                </Button>
                
                <div className="relative">
                  <button
                    onClick={toggleProfile}
                    className="flex items-center focus:outline-none"
                  >
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      {user?.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <User size={20} className="text-gray-600" />
                      )}
                    </div>
                  </button>
                  
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Profile
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        My Campaigns
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Donations
                      </a>
                      <button
                        onClick={logout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <LogOut size={16} className="mr-2" />
                          Logout
                        </div>
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Button 
                  variant="outline" 
                  onClick={onLoginClick}
                >
                  Log In
                </Button>
                <Button 
                  variant="primary" 
                  onClick={onSignupClick}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-teal-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-100">
              Discover
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-100">
              Categories
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-100">
              How It Works
            </a>
            
            <div className="relative mt-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search campaigns"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>
            
            {isAuthenticated ? (
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                      {user?.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                      ) : (
                        <User size={24} className="text-gray-600" />
                      )}
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user?.name}</div>
                    <div className="text-sm font-medium text-gray-500">{user?.email}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <a href="#" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-100">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-100">
                    My Campaigns
                  </a>
                  <a href="#" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-100">
                    Donations
                  </a>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-gray-700 hover:text-teal-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
                <div className="mt-4 px-4">
                  <Button
                    variant="primary"
                    fullWidth
                    onClick={onStartCampaign}
                    icon={<PlusCircle size={18} />}
                  >
                    Start a Campaign
                  </Button>
                </div>
              </div>
            ) : (
              <div className="pt-4 pb-3 space-y-3 px-4">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={onLoginClick}
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={onSignupClick}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;