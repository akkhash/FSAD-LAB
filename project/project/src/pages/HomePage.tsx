import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import FeaturedCampaigns from '../components/campaigns/FeaturedCampaigns';
import HowItWorks from '../components/home/HowItWorks';
import CategoryList from '../components/campaigns/CategoryList';
import Stats from '../components/home/Stats';
import Testimonials from '../components/home/Testimonials';
import Modal from '../components/modals/Modal';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';
import { mockCampaigns, mockCategories } from '../data/mockData';
import { Campaign, Category } from '../types';
import { useAuth } from '../context/AuthContext';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const handleStartCampaign = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
    } else {
      console.log('Navigate to campaign creation');
    }
  };

  const handleCampaignClick = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    console.log('Navigate to campaign details', campaign.id);
  };

  const handleCategoryClick = (category: Category) => {
    console.log('Filter by category', category.name);
  };

  const handleLogin = () => {
    setIsLoginModalOpen(false);
  };

  const handleSignup = () => {
    setIsSignupModalOpen(false);
  };

  const handleDonateClick = (campaign: Campaign) => {
    alert(`You donated to ${campaign.title}!`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        onStartCampaign={handleStartCampaign}
        onLoginClick={() => setIsLoginModalOpen(true)}
        onSignupClick={() => setIsSignupModalOpen(true)}
      />

      <main className="flex-grow">
        <Hero 
          onStartCampaign={handleStartCampaign}
          onExplore={() => console.log('Explore campaigns')}
        />

        <FeaturedCampaigns
          campaigns={mockCampaigns}
          onCampaignClick={handleCampaignClick}
          onViewAllClick={() => console.log('View all campaigns')}
          onDonateClick={handleDonateClick} // ✅ Required prop added
        />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse Categories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore campaigns by category and find causes that speak to you.
              </p>
            </div>
            <CategoryList
              categories={mockCategories}
              onCategoryClick={handleCategoryClick}
            />
          </div>
        </section>

        <HowItWorks />
        <Stats />
        <Testimonials />
      </main>

      <Footer />

      {/* Login Modal */}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        size="sm"
      >
        <LoginForm
          onSuccess={handleLogin}
          onSignupClick={() => {
            setIsLoginModalOpen(false);
            setIsSignupModalOpen(true);
          }}
        />
      </Modal>

      {/* Signup Modal */}
      <Modal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        size="sm"
      >
        <SignupForm
          onSuccess={handleSignup}
          onLoginClick={() => {
            setIsSignupModalOpen(false);
            setIsLoginModalOpen(true);
          }}
        />
      </Modal>
    </div>
  );
};

export default HomePage;
