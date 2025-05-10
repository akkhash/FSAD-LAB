export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  story: string;
  goal: number;
  raised: number;
  category: string;
  image: string;
  createdAt: Date;
  endDate: Date;
  userId: string;
  user?: User;
  updates?: Update[];
  donations?: Donation[];
  featured?: boolean;
}

export interface Update {
  id: string;
  campaignId: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface Donation {
  id: string;
  campaignId: string;
  userId: string;
  amount: number;
  message?: string;
  anonymous: boolean;
  createdAt: Date;
  user?: User;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}