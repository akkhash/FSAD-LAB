import React from 'react';

const Stats: React.FC = () => {
  const stats = [
    { value: '50M+', label: 'Raised', color: 'bg-teal-500' },
    { value: '10K+', label: 'Campaigns', color: 'bg-purple-500' },
    { value: '500K+', label: 'Donors', color: 'bg-orange-500' },
    { value: '92%', label: 'Success Rate', color: 'bg-green-500' },
  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`${stat.color} h-2 w-16 mx-auto mb-4 rounded-full`}></div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400 uppercase tracking-wide text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;