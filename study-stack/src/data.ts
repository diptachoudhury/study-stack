import { Course } from "./features/course/courseTypes";

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced React with TypeScript',
    instructor: {
      id: '1',
      name: 'Jane Doe',
      bio: 'Senior Frontend Engineer with 10+ years of experience',
      profilePic: 'https://randomuser.me/api/portraits/women/21.jpg',
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com', icon: 'twitter' },
        { platform: 'linkedin', url: 'https://linkedin.com', icon: 'linkedin' },
      ],
      otherCourses: [
        { id: '2', title: 'React Fundamentals', thumbnail: 'https://randomuser.me/api/portraits/women/22.jpg' },
      ],
    },
    rating: 4.8,
    studentsEnrolled: 12543,
    lastUpdated: '2023-05-15',
    price: 199.99,
    discountedPrice: 149.99,
    curriculum: [
      {
        id: '1',
        title: 'Getting Started',
        lectures: [
          { 
            id: '1', 
            title: 'Introduction', 
            duration: '5:23',
            youtubeId: 'HZmdR1y1jwI' // React TypeScript Tutorial
          },
          { 
            id: '2', 
            title: 'Setup', 
            duration: '10:45', 
            preview: true,
            youtubeId: 'w7ejDZ8SWv8' // React TypeScript Setup
          },
        ],
      },
      {
        id: '2',
        title: 'Core Concepts',
        lectures: [
          { 
            id: '3', 
            title: 'Components & Props', 
            duration: '8:12',
            youtubeId: 'TNhaISOUy6Q' // React Components
          },
          { 
            id: '4', 
            title: 'State Management', 
            duration: '12:30',
            preview: true,
            youtubeId: '-MlNBTSg_Ww' // React Hooks
          },
        ],
      },
    ],
    reviews: [
      {
        id: '1',
        user: { name: 'John Smith', avatar: 'https://randomuser.me/api/portraits/men/21.jpg' },
        rating: 5,
        comment: 'Great course! The TypeScript integration was explained perfectly.',
        date: '2023-04-10',
      },
      {
        id: '2',
        user: { name: 'Emily Johnson', avatar: 'https://randomuser.me/api/portraits/women/24.jpg' },
        rating: 4,
        comment: 'Very comprehensive, but some advanced topics could use more examples.',
        date: '2023-05-22',
      },
    ],
  },
  {
    id: '2',
    title: 'Modern JavaScript Masterclass',
    instructor: {
      id: '2',
      name: 'Alex Johnson',
      bio: 'JavaScript expert and educator',
      profilePic: 'https://randomuser.me/api/portraits/men/22.jpg',
      socialLinks: [
        { platform: 'github', url: 'https://github.com', icon: 'github' },
      ],
      otherCourses: [
        { id: '3', title: 'ES6+ Features', thumbnail: 'https://randomuser.me/api/portraits/men/23.jpg' },
      ],
    },
    rating: 4.7,
    studentsEnrolled: 9876,
    lastUpdated: '2023-06-10',
    price: 179.99,
    curriculum: [
      {
        id: '1',
        title: 'JavaScript Fundamentals',
        lectures: [
          { 
            id: '1', 
            title: 'Variables and Types', 
            duration: '7:15',
            youtubeId: 'BwuLxPH8IDs' // JavaScript in 100 Seconds
          },
          { 
            id: '2', 
            title: 'Functions and Scope', 
            duration: '9:40',
            preview: true,
            youtubeId: 'Mus_vwhTCq0' // JavaScript Functions
          },
        ],
      },
    ],
    reviews: [
      {
        id: '3',
        user: { name: 'Sarah Williams', avatar: 'https://randomuser.me/api/portraits/women/22.jpg' },
        rating: 4,
        comment: 'Very comprehensive introduction to modern JS features.',
        date: '2023-05-12',
      },
    ],
  },
  // Additional courses follow the same pattern...
  {
    id: '3',
    title: 'Node.js Backend Development',
    instructor: {
      id: '3',
      name: 'Michael Brown',
      bio: 'Backend specialist and open source contributor',
      profilePic: 'https://randomuser.me/api/portraits/men/23.jpg',
      socialLinks: [
        { platform: 'twitter', url: 'https://twitter.com', icon: 'twitter' },
      ],
      otherCourses: [
        { id: '4', title: 'Express Framework', thumbnail: 'https://randomuser.me/api/portraits/men/24.jpg' },
      ],
    },
    rating: 4.9,
    studentsEnrolled: 8452,
    lastUpdated: '2023-07-05',
    price: 219.99,
    discountedPrice: 189.99,
    curriculum: [
      {
        id: '1',
        title: 'Node.js Basics',
        lectures: [
          { 
            id: '1', 
            title: 'Introduction to Node', 
            duration: '6:30',
            youtubeId: 'f2EqECiTBL8' // Node.js Getting Started
          },
          { 
            id: '2', 
            title: 'NPM and Modules', 
            duration: '8:15',
            preview: true,
            youtubeId: 'JINE4D0Syqw' // NPM Tutorial
          },
        ],
      },
    ],
    reviews: [
      {
        id: '4',
        user: { name: 'Emily Chen', avatar: 'https://randomuser.me/api/portraits/women/23.jpg' },
        rating: 5,
        comment: 'Excellent content! The instructor explains complex concepts clearly.',
        date: '2023-06-18',
      },
    ],
  },
  // Remaining courses follow the same structure...
];

export const getMockCourseById = (id: string): Course | undefined => {
  return mockCourses.find(course => course.id === id);
};