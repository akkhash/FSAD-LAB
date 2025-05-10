import React from 'react';

interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  showLabel?: boolean;
  height?: string;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  color = 'teal',
  showLabel = true,
  height = 'h-2',
  className = '',
}) => {
  const percentage = Math.min(Math.round((value / max) * 100), 100);
  
  const colorClasses = {
    teal: 'bg-teal-500',
    purple: 'bg-purple-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
  };

  const bgColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.teal;

  return (
    <div className={`w-full ${className}`}>
      <div className={`bg-gray-200 rounded-full overflow-hidden ${height}`}>
        <div
          className={`${bgColor} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showLabel && (
        <div className="text-xs font-medium text-gray-600 mt-1">
          {percentage}% funded
        </div>
      )}
    </div>
  );
};

export default ProgressBar;