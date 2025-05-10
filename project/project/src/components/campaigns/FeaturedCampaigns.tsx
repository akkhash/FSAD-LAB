import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Campaign } from '../../types';
import CampaignCard from './CampaignCard';

interface FeaturedCampaignsProps {
  campaigns: Campaign[];
  onCampaignClick: (campaign: Campaign) => void;
  onViewAllClick: () => void;
}

const FeaturedCampaigns: React.FC<FeaturedCampaignsProps> = ({
  campaigns,
  onCampaignClick,
  onViewAllClick,
}) => {
  const [localCampaigns, setLocalCampaigns] = useState<Campaign[]>([...campaigns]);
  const [donationAmounts, setDonationAmounts] = useState<Record<string, number>>({});

  const featuredCampaigns =
    localCampaigns.filter((c) => c.featured).length > 0
      ? localCampaigns.filter((c) => c.featured)
      : localCampaigns.slice(0, 3);

  const handleAmountChange = (campaignId: string, amount: string) => {
    setDonationAmounts((prev) => ({
      ...prev,
      [campaignId]: parseFloat(amount) || 0,
    }));
  };

  const handleDonateClick = (campaign: Campaign) => {
    const amount = donationAmounts[campaign.id] || 0;

    if (amount <= 0) {
      alert('Please enter a valid donation amount.');
      return;
    }

    // Update local campaign state
    const updatedCampaigns = localCampaigns.map((c) =>
      c.id === campaign.id
        ? { ...c, amountRaised: (c.amountRaised || 0) + amount }
        : c
    );
    setLocalCampaigns(updatedCampaigns);

    // Notify the user
    alert(`You donated ₹${amount} to ${campaign.title}!`);

    // Reset input
    setDonationAmounts((prev) => ({ ...prev, [campaign.id]: 0 }));
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Campaigns</h2>
          <button
            onClick={onViewAllClick}
            className="flex items-center text-teal-500 font-medium hover:text-teal-600 transition-colors"
          >
            View all
            <ArrowRight size={18} className="ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCampaigns.map((campaign) => (
            <div key={campaign.id} className="flex flex-col space-y-2 border p-4 rounded shadow-sm bg-white">
              <CampaignCard campaign={campaign} onClick={() => onCampaignClick(campaign)} />

              <p className="text-gray-700 font-medium">
                Raised: ₹{campaign.amountRaised || 0}
              </p>

              <input
                type="number"
                placeholder="Enter amount"
                className="border p-2 rounded"
                value={donationAmounts[campaign.id] || ''}
                onChange={(e) => handleAmountChange(campaign.id, e.target.value)}
              />

              <button
                onClick={() => handleDonateClick(campaign)}
                className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded"
              >
                Donate
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaigns;
