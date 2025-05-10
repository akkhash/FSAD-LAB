import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import Card from '../ui/Card';
import ProgressBar from '../ui/ProgressBar';
import { Campaign } from '../../types';
import { formatCurrency, calculateProgress, calculateDaysRemaining, truncateText } from '../../utils/helpers';

interface CampaignCardProps {
  campaign: Campaign;
  onClick: () => void;
}

const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, onClick }) => {
  const progress = calculateProgress(campaign.raised, campaign.goal);
  const daysRemaining = calculateDaysRemaining(campaign.endDate);
  
  return (
    <Card hover onClick={onClick} className="h-full flex flex-col">
      <div className="relative">
        <img 
          src={campaign.image} 
          alt={campaign.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex space-x-2">
          <button className="p-1.5 bg-white rounded-full text-gray-600 hover:text-red-500 transition-colors shadow-sm">
            <Heart size={18} />
          </button>
          <button className="p-1.5 bg-white rounded-full text-gray-600 hover:text-teal-500 transition-colors shadow-sm">
            <Share2 size={18} />
          </button>
        </div>
        {campaign.featured && (
          <div className="absolute top-3 left-3 bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full text-gray-700">
            {campaign.category}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 text-gray-800">
          {campaign.title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {truncateText(campaign.description, 100)}
        </p>
        
        <div className="mt-auto">
          <ProgressBar value={progress} className="mb-3" />
          
          <div className="flex justify-between text-sm">
            <div>
              <p className="font-semibold text-gray-800">{formatCurrency(campaign.raised)}</p>
              <p className="text-gray-500">raised of {formatCurrency(campaign.goal)}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold text-gray-800">{daysRemaining}</p>
              <p className="text-gray-500">days left</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CampaignCard;