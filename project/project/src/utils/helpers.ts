/**
 * Format currency amount with locale settings
 */
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Calculate percentage of goal reached
 */
export const calculateProgress = (raised: number, goal: number): number => {
  return Math.min(Math.round((raised / goal) * 100), 100);
};

/**
 * Format date to readable string
 */
export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

/**
 * Calculate days remaining until end date
 */
export const calculateDaysRemaining = (endDate: Date): number => {
  const now = new Date();
  const end = new Date(endDate);
  const differenceMs = end.getTime() - now.getTime();
  return Math.max(0, Math.ceil(differenceMs / (1000 * 60 * 60 * 24)));
};

/**
 * Truncate text with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};