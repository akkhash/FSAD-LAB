import React from 'react';
import Button from '../ui/Button';

interface HeroProps {
  onStartCampaign: () => void;
  onExplore: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartCampaign, onExplore }) => {
  return (
    <div className="relative bg-gradient-to-r from-teal-500 to-teal-700 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Fund Your Dreams, Support Others
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-teal-100">
            Start a campaign or donate to causes that move you. Together we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              variant="secondary"
              size="lg"
              onClick={onStartCampaign}
              className="text-white font-semibold py-3 px-6"
            >
              Start a Campaign
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onExplore}
              className="bg-white text-teal-600 border-white hover:bg-teal-50 py-3 px-6"
            >
              Explore Campaigns
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-auto"
          preserveAspectRatio="none"
          fill="#ffffff"
        >
          <path d="M0,96L60,90.7C120,85,240,75,360,74.7C480,75,600,85,720,80C840,75,960,53,1080,53.3C1200,53,1320,75,1380,85.3L1440,96L1440,160L1380,160C1320,160,1200,160,1080,160C960,160,840,160,720,160C600,160,480,160,360,160C240,160,120,160,60,160L0,160Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;