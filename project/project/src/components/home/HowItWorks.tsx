import React, { useState } from 'react';
import { CalendarPlus, Users, DollarSign, Award } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [show, setShow] = useState(false); // Toggle state

  const steps = [
    {
      title: 'Start Your Campaign',
      description: 'Create your fundraising campaign in minutes. Add your story, photos, and set your target goal.',
      icon: <CalendarPlus size={32} className="text-teal-500" />,
    },
    {
      title: 'Share With Everyone',
      description: 'Spread the word via social media, email, and messaging. The more people know, the faster you\'ll raise funds.',
      icon: <Users size={32} className="text-purple-500" />,
    },
    {
      title: 'Collect Donations',
      description: 'Watch contributions come in through our secure platform. Every dollar helps you reach your goal.',
      icon: <DollarSign size={32} className="text-orange-500" />,
    },
    {
      title: 'Achieve Your Goal',
      description: 'Receive your funds and make your project a reality. Keep supporters updated on your progress.',
      icon: <Award size={32} className="text-green-500" />,
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="text-center">
        <button
          onClick={() => setShow(!show)}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          {show ? 'Hide' : 'How it works'}
        </button>
      </div>

      {show && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              FundForward makes it easy to raise money for the projects and causes you care about.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center transition-all duration-300 hover:-translate-y-1">
                <div className="bg-gray-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HowItWorks;
