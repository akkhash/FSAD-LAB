import { Campaign, Category, Donation, Update, User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Social entrepreneur passionate about community-driven projects',
    createdAt: new Date('2023-01-15')
  },
  {
    id: '2',
    name: 'Maria Garcia',
    email: 'maria@example.com',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Environmental activist and project manager',
    createdAt: new Date('2023-02-20')
  },
  {
    id: '3',
    name: 'David Chen',
    email: 'david@example.com',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Tech entrepreneur with a focus on educational initiatives',
    createdAt: new Date('2023-03-10')
  }
];

export const mockCategories: Category[] = [
  { id: '1', name: 'Education', icon: 'book-open' },
  { id: '2', name: 'Medical', icon: 'heart-pulse' },
  { id: '3', name: 'Environment', icon: 'leaf' },
  { id: '4', name: 'Community', icon: 'users' },
  { id: '5', name: 'Technology', icon: 'laptop' },
  { id: '6', name: 'Creative', icon: 'palette' },
  { id: '7', name: 'Business', icon: 'briefcase' },
  { id: '8', name: 'Emergency', icon: 'alert-triangle' }
];

export const mockCampaigns: Campaign[] = [
  {
    id: '1',
    title: 'Clean Water Initiative',
    description: 'Bringing clean water to rural communities in developing countries',
    story: 'Access to clean water is a fundamental human right, yet millions of people around the world still lack access to safe drinking water. Our initiative aims to install water filtration systems in 10 rural villages, directly impacting over 5,000 individuals. With your support, we can help reduce waterborne diseases and improve quality of life for these communities.',
    goal: 25000,
    raised: 18750,
    category: '3',
    image: 'https://images.pexels.com/photos/1327354/pexels-photo-1327354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: new Date('2024-06-01'),
    endDate: new Date('2024-09-30'),
    userId: '1',
    featured: true
  },
  {
    id: '2',
    title: 'STEM Education for Girls',
    description: 'Empowering young girls through technology education and mentorship',
    story: 'Despite progress in recent years, women remain underrepresented in STEM fields. This program aims to introduce coding, robotics, and scientific principles to girls ages 10-16 through after-school programs. With dedicated mentors from tech industries, we\'ll inspire the next generation of female innovators and leaders.',
    goal: 15000,
    raised: 9300,
    category: '1',
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: new Date('2024-05-15'),
    endDate: new Date('2024-08-15'),
    userId: '2',
    featured: true
  },
  {
    id: '3',
    title: 'Community Garden Project',
    description: 'Creating a sustainable food source and community gathering space',
    story: 'Our neighborhood has limited access to fresh produce, with the nearest grocery store over 2 miles away. This urban garden will transform an abandoned lot into a thriving community space where residents can grow their own food, learn about sustainable agriculture, and build stronger community bonds through shared activities.',
    goal: 10000,
    raised: 6250,
    category: '4',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: new Date('2024-06-10'),
    endDate: new Date('2024-08-10'),
    userId: '3'
  },
  {
    id: '4',
    title: 'Emergency Medical Fund',
    description: 'Supporting families with unexpected medical expenses',
    story: 'When medical emergencies strike, many families find themselves unprepared for the financial burden. This fund provides immediate assistance to families facing unexpected medical costs, allowing them to focus on recovery rather than financial stress. Every contribution helps a family in their moment of greatest need.',
    goal: 50000,
    raised: 37500,
    category: '2',
    image: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: new Date('2024-05-20'),
    endDate: new Date('2024-12-31'),
    userId: '1'
  },
  {
    id: '5',
    title: 'Innovative Learning App',
    description: 'Developing a gamified learning platform for children with learning disabilities',
    story: 'Traditional educational methods don\'t work for every child. Our app uses cutting-edge research in educational psychology to create engaging, adaptive learning experiences for children with dyslexia, ADHD, and other learning differences. With personalized content and progress tracking, we\'ll help every child reach their full potential.',
    goal: 35000,
    raised: 14000,
    category: '5',
    image: 'https://images.pexels.com/photos/4144179/pexels-photo-4144179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: new Date('2024-06-05'),
    endDate: new Date('2024-10-05'),
    userId: '2'
  },
  {
    id: '6',
    title: 'Documentary: Ocean Conservation',
    description: 'Creating an impactful documentary about marine plastic pollution',
    story: 'Our oceans are drowning in plastic, with devastating consequences for marine life and human health. This documentary will not only raise awareness about the scale of the problem but also highlight innovative solutions being implemented around the world. Through powerful storytelling, we aim to inspire action at individual and policy levels.',
    goal: 45000,
    raised: 18000,
    category: '6',
    image: 'https://images.pexels.com/photos/3732495/pexels-photo-3732495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    createdAt: new Date('2024-05-25'),
    endDate: new Date('2024-09-25'),
    userId: '3'
  }
];

export const mockUpdates: Update[] = [
  {
    id: '1',
    campaignId: '1',
    title: 'First village reached!',
    content: 'We are thrilled to announce that we have completed installation of the first water filtration system in Village A. Local residents have been trained on maintenance, and clean water is now flowing! Thank you to all our supporters who made this possible.',
    createdAt: new Date('2024-06-15')
  },
  {
    id: '2',
    campaignId: '1',
    title: 'Halfway there!',
    content: 'With your generous support, we have now raised 75% of our goal and have identified the next three villages for installation. Equipment has been ordered and our team will be on the ground next month.',
    createdAt: new Date('2024-07-01')
  },
  {
    id: '3',
    campaignId: '2',
    title: 'Program curriculum finalized',
    content: 'Our education team has finalized the 12-week curriculum for our first cohort of students. We\'ve secured partnerships with three local schools and recruitment will begin next week!',
    createdAt: new Date('2024-06-20')
  }
];

export const mockDonations: Donation[] = [
  {
    id: '1',
    campaignId: '1',
    userId: '2',
    amount: 250,
    message: 'Clean water is a basic human right. Happy to support this important work!',
    anonymous: false,
    createdAt: new Date('2024-06-05')
  },
  {
    id: '2',
    campaignId: '1',
    userId: '3',
    amount: 500,
    message: 'Keep up the great work. Looking forward to seeing more progress updates!',
    anonymous: false,
    createdAt: new Date('2024-06-08')
  },
  {
    id: '3',
    campaignId: '2',
    userId: '1',
    amount: 150,
    message: 'As a father of two daughters, I believe in empowering girls through education.',
    anonymous: false,
    createdAt: new Date('2024-05-28')
  },
  {
    id: '4',
    campaignId: '2',
    userId: '3',
    amount: 200,
    anonymous: true,
    createdAt: new Date('2024-06-10')
  },
  {
    id: '5',
    campaignId: '3',
    userId: '1',
    amount: 100,
    message: 'Community gardens are transformative spaces. Best of luck!',
    anonymous: false,
    createdAt: new Date('2024-06-15')
  }
];