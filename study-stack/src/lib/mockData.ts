type Course ={
    id: string;
    title: string;
    description: string;
    instructor: string;
    thumbnail: string;
    price: number;
    rating: number;
    students: number;
    duration: string;
    lessons: {
        id: string;
        title: string;
        duration: string;
    }[];
}


type User = {
    id: string;
    name: string;
    email: string;
    role: 'student' | 'instructor';
    enrolledCourses: string[]
}

export const mockCourses: Course[] = [
    {
      id: '1',
      title: 'Advanced React with TypeScript',
      description: 'Master React and TypeScript with modern patterns',
      instructor: 'Jane Doe',
      thumbnail: '/react-course.jpg',
      price: 29.99,
      rating: 4.8,
      students: 1245,
      duration: '6.5 hours',
      lessons: [
        { id: 'l1', title: 'Introduction', duration: '15:20' },
        { id: 'l2', title: 'Setting Up', duration: '22:10' },
      ],
    },
    {
      id: '2',
      title: 'Complete Next.js Developer',
      description: 'Build production-ready Next.js applications',
      instructor: 'John Smith',
      thumbnail: '/nextjs-course.jpg',
      price: 34.99,
      rating: 4.9,
      students: 893,
      duration: '8 hours',
      lessons: [
        { id: 'l1', title: 'Next.js Fundamentals', duration: '18:30' },
        { id: 'l2', title: 'API Routes', duration: '25:45' },
      ],
    },
  ];
  
  export const mockUser: User = {
    id: '1',
    name: 'John Doe',
    email: 'student@example.com',
    role: 'student',
    enrolledCourses: ['1'],
  };