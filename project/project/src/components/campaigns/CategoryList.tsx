import React from 'react';
import { Category } from '../../types';
import * as LucideIcons from 'lucide-react';

interface CategoryListProps {
  categories: Category[];
  onCategoryClick: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onCategoryClick }) => {
  // Function to dynamically get icons from lucide-react
  const getIcon = (iconName: string, size = 24) => {
    const Icon = (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
    return <Icon size={size} />;
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryClick(category)}
          className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="text-teal-500 mb-3">
            {getIcon(category.icon)}
          </div>
          <span className="text-gray-800 font-medium">{category.name}</span>
        </button>
      ))}
    </div>
  );
};

export default CategoryList;