export type SuggestionStatus =
  | 'Submitted'
  | 'Under Review'
  | 'Forwarded'
  | 'Accepted'
  | 'Rejected';

export type Suggestion = {
  id: number;

  title: string;

  category: string;

  location: string;

  description: string;

  views: number;

  likes: number;

  dislikes: number;

  status: SuggestionStatus;

  submittedDate: string;

  isMine: boolean;

  reviewed: boolean;

  userName: string;

  profileImage: string;
};

export const suggestions: Suggestion[] = [

  /* =====================================================
     TOP REVIEWS
     ===================================================== */

  {
    id: 1,

    title: 'Improve Street Lighting',

    category: 'Infrastructure',

    location: 'Jaipur, Rajasthan',

    description:
      'Install better street lighting around the government school and nearby residential roads to improve visibility and safety at night.',

    views: 1248,

    likes: 182,

    dislikes: 14,

    status: 'Under Review',

    submittedDate: 'Sep 8, 2026',

    isMine: false,

    reviewed: true,

    userName: 'Rajesh Kumar',

    profileImage:
      'https://i.pravatar.cc/150?img=12',
  },

  {
    id: 2,

    title: 'Improve Drainage System',

    category: 'Water & Sanitation',

    location: 'Jaipur, Rajasthan',

    description:
      'Improve the drainage system near residential areas to reduce water logging during heavy rainfall.',

    views: 984,

    likes: 151,

    dislikes: 9,

    status: 'Accepted',

    submittedDate: 'Sep 5, 2026',

    isMine: false,

    reviewed: true,

    userName: 'Priya Sharma',

    profileImage:
      'https://i.pravatar.cc/150?img=32',
  },

  {
    id: 3,

    title: 'Add Pedestrian Crossing',

    category: 'Roads',

    location: 'Jaipur, Rajasthan',

    description:
      'Create a proper pedestrian crossing near the government school and main road to make it safer for students and pedestrians.',

    views: 856,

    likes: 127,

    dislikes: 8,

    status: 'Forwarded',

    submittedDate: 'Sep 4, 2026',

    isMine: false,

    reviewed: true,

    userName: 'Amit Singh',

    profileImage:
      'https://i.pravatar.cc/150?img=11',
  },

  {
    id: 4,

    title: 'Repair Damaged Roads',

    category: 'Roads',

    location: 'Jaipur, Rajasthan',

    description:
      'Repair damaged roads and potholes near the main market area to improve transportation and road safety.',

    views: 742,

    likes: 103,

    dislikes: 11,

    status: 'Under Review',

    submittedDate: 'Sep 2, 2026',

    isMine: false,

    reviewed: true,

    userName: 'Neha Verma',

    profileImage:
      'https://i.pravatar.cc/150?img=47',
  },

  {
    id: 5,

    title: 'More Trees Near Public Park',

    category: 'Environment',

    location: 'Jaipur, Rajasthan',

    description:
      'Plant more trees around the public park to increase greenery, provide shade and improve the local environment.',

    views: 625,

    likes: 91,

    dislikes: 5,

    status: 'Submitted',

    submittedDate: 'Aug 30, 2026',

    isMine: false,

    reviewed: false,

    userName: 'Vikram Meena',

    profileImage:
      'https://i.pravatar.cc/150?img=68',
  },

  /* =====================================================
     MY SUGGESTIONS
     ===================================================== */

  {
    id: 6,

    title: 'Repair Damaged Road Near Market',

    category: 'Roads',

    location: 'Jaipur, Rajasthan',

    description:
      'The road near the main market has several potholes and damaged sections that should be repaired.',

    views: 248,

    likes: 31,

    dislikes: 4,

    status: 'Under Review',

    submittedDate: 'Sep 7, 2026',

    isMine: true,

    reviewed: true,

    userName: 'Udham Singh',

    profileImage:
      'https://i.pravatar.cc/150?img=13',
  },

  {
    id: 7,

    title: 'Improve Park Facilities',

    category: 'Public Facilities',

    location: 'Jaipur, Rajasthan',

    description:
      'Add better seating, drinking water facilities and maintenance services to the local public park.',

    views: 532,

    likes: 76,

    dislikes: 3,

    status: 'Accepted',

    submittedDate: 'Sep 3, 2026',

    isMine: true,

    reviewed: true,

    userName: 'Udham Singh',

    profileImage:
      'https://i.pravatar.cc/150?img=13',
  },

  {
    id: 8,

    title: 'Install Drinking Water Point',

    category: 'Public Facilities',

    location: 'Jaipur, Rajasthan',

    description:
      'Install a public drinking water facility near the bus stop for citizens and daily commuters.',

    views: 164,

    likes: 22,

    dislikes: 2,

    status: 'Submitted',

    submittedDate: 'Aug 28, 2026',

    isMine: true,

    reviewed: false,

    userName: 'Udham Singh',

    profileImage:
      'https://i.pravatar.cc/150?img=13',
  },

  {
    id: 9,

    title: 'Better Waste Collection',

    category: 'Sanitation',

    location: 'Jaipur, Rajasthan',

    description:
      'Increase the frequency of waste collection in residential areas to maintain cleanliness and improve public hygiene.',

    views: 319,

    likes: 45,

    dislikes: 6,

    status: 'Forwarded',

    submittedDate: 'Aug 21, 2026',

    isMine: true,

    reviewed: true,

    userName: 'Udham Singh',

    profileImage:
      'https://i.pravatar.cc/150?img=13',
  },

  {
    id: 10,

    title: 'Improve Bus Stop Facilities',

    category: 'Transport',

    location: 'Jaipur, Rajasthan',

    description:
      'Provide seating, shade and better maintenance at the local public bus stop for daily commuters.',

    views: 287,

    likes: 38,

    dislikes: 3,

    status: 'Under Review',

    submittedDate: 'Aug 15, 2026',

    isMine: true,

    reviewed: true,

    userName: 'Udham Singh',

    profileImage:
      'https://i.pravatar.cc/150?img=13',
  },
];