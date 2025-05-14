export type Course = {
    id: string;
    title: string;
    instructor: Instructor;
    rating: number;
    studentsEnrolled: number;
    lastUpdated: string;
    price: number;
    discountedPrice?: number;
    curriculum: CurriculumSection[];
    reviews: Review[];
};

export type Instructor = {
    id: string;
    name: string;
    bio: string;
    profilePic: string;
    socialLinks: SocialLink[];
    otherCourses?: SimpleCourses[];
};

export type SimpleCourses = {
    id: string;
    title: string;
    thumbnail: string;
};

export type SocialLink = {
    platform: string;
    url: string;
    icon: string;
};

export type CurriculumSection = {
    id: string;
    title: string;
    lectures: Lecture[];
    quizzes?: Quiz[];
};

export type Lecture = {
    id: string;
    title: string;
    duration: string;
    preview?: boolean;
    youtubeId: string;
}

export type Quiz = {
    id: string;
    user: {
        name: string;
        avatar: string;
    };
    rating: number;
    comment: string;
    date: string;
};

export type Review = {
    id: string;
    user: {
      name: string;
      avatar: string;
    };
    rating: number;
    comment: string;
    date: string;
  };


  export type CartItem = {
    courseId: string;
    title: string;
    price: number;
    discountedPrice?: number;
    instructorName: string;
    thumbnail?: string;
  }


  export type CourseState = {
    currentCourse: Course | null;
    cart: CartItem[];
    isPreviewModalOpen: boolean;
    currentPreviewVideo: string | null;
    reviewsPage: number;
  };