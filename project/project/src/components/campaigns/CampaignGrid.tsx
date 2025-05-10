import React from 'react';
import CampaignCard from './CampaignCard';
import { Campaign } from '../../types';

interface CampaignGridProps {
  campaigns: Campaign[];
  onCampaignClick: (campaign: Campaign) => void;
}

const CampaignGrid: React.FC<CampaignGridProps> = ({ campaigns, onCampaignClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.id}
          campaign={campaign}
          onClick={() => onCampaignClick(campaign)}
        />
      ))}
    </div>
  );
};

export default CampaignGrid;