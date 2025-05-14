'use client';

import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import { useParams, useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../features/course/store';
import { setCourse, addToCart, openPreviewModal, closePreviewModal } from '../../../features/course/courseSlice';
import {
  Course,
  Instructor,
  CurriculumSection,
  Review,
  CartItem,
} from '../../../features/course/courseTypes';
import Image from 'next/image';
import { getMockCourseById } from "@/data";
import { TfiControlPlay } from "react-icons/tfi";
import Modal from '@/components/ui/Modal';

const CourseDetailPage = () => {

  const router = useRouter();
  const params = useParams();

  const id = params.id as string; 

  const dispatch = useDispatch();
  const {  currentCourse, cart, isPreviewModalOpen, currentPreviewVideo } = useSelector( (state: RootState) => state.course )

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean >>({})


  useEffect(() => {
    const fetchCourse = async () => {
    try{
      const course  = getMockCourseById(id);
      if(course){
       dispatch(setCourse(course));
      }else{
       console.error(`Course with id ${id} not found`);
      } 
    }catch (error){
      console.error('Failed to fetch course:', error)
    }       
    };

    if (id) {
      fetchCourse();
    }
  }, [id, dispatch]);


const toggleSection = (sectionId: string) => {
  setExpandedSections( prev => ({
    ...prev,
    [sectionId]: !prev[sectionId]
  }));
}


const handleAddToCart = () => {
if(!currentCourse)  return;

const cartItem: CartItem = {
  courseId: currentCourse.id,
    title: currentCourse.title,
    price: currentCourse.price,
    discountedPrice: currentCourse.discountedPrice,
    instructorName: currentCourse.instructor.name,
    //thumbnail: string;
}
dispatch(addToCart(cartItem));
}

const handleBuyNow = () => {
  handleAddToCart();
  router.push('/checkout');
}

const handlePreview = (videoId: string) => {
  dispatch(openPreviewModal({
    courseId: id, // The current course ID from router
    videoId: videoId
  }));
};

if(!currentCourse){
  return(
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold">{currentCourse.title}</h1>
          <div className="flex items-center mt-2">
            <span className="text-yellow-500">{currentCourse.rating.toFixed(1)}</span>
            <span className="text-gray-500 ml-1">({currentCourse.studentsEnrolled.toLocaleString()} students)</span>
            <span className="text-gray-500 ml-4">Last updated {currentCourse.lastUpdated}</span>
          </div>
          
          <div className="mt-6 flex items-center">
            <Image
              src={currentCourse.instructor.profilePic}
              alt={currentCourse.instructor.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="ml-4">
              <h3 className="font-semibold">{currentCourse.instructor.name}</h3>
              <div className="flex space-x-2 mt-1">
                {currentCourse.instructor.socialLinks.map(link => (
                  <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer">
                    <span className="sr-only">{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Course Preview</h2>
            {currentCourse.curriculum.map(section => (
  <div key={section.id}>
    {section.lectures.map(lecture => (
      <div key={lecture.id}>
        {lecture.preview && (
          <button 
            onClick={() => handlePreview(lecture.youtubeId)}
            className="flex items-center text-blue-500"
          >
            <TfiControlPlay className="text-gray-400 mr-1" />
            Preview
          </button>
        )}
      </div>
    ))}
  </div>
))}

{isPreviewModalOpen && (
  <Modal isOpen={isPreviewModalOpen} onClose={() => dispatch(closePreviewModal())} videoUrl={`https://www.youtube.com/embed/${currentPreviewVideo}` || ''}>
   
  </Modal>
)}
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Curriculum</h2>
            {currentCourse.curriculum.map(section => (
              <div key={section.id} className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <div 
                  className="p-4 bg-gray-50 flex justify-between items-center cursor-pointer"
                  onClick={() => toggleSection(section.id)}
                >
                  <h3 className="font-medium">{section.title}</h3>
                  <span>{expandedSections[section.id] ? '−' : '+'}</span>
                </div>
                {expandedSections[section.id] && (
                  <div className="p-4">
                    {section.lectures.map(lecture => (
                      <div key={lecture.id} className="flex justify-between py-2 border-b border-gray-100">
                        <div className="flex items-center">
                          {lecture.preview && (
                            <button 
                              onClick={() => handlePreview('/previews/' + lecture.id + '.mp4')}
                              className="mr-2 text-blue-500"
                            >
                              Preview
                            </button>
                          )}
                          <span>{lecture.title}</span>
                        </div>
                        <span className="text-gray-500">{lecture.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Reviews</h2>
            {currentCourse.reviews.map(review => (
              <div key={review.id} className="mb-6 pb-6 border-b border-gray-200">
                <div className="flex items-center">
                  <Image
                    src={review.user.avatar}
                    alt={review.user.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="ml-3">
                    <h4 className="font-medium">{review.user.name}</h4>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < review.rating ? 'text-yellow-500' : 'text-gray-300'}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm ml-auto">{review.date}</span>
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="md:w-1/3">
          <div className="sticky top-4 border border-gray-200 rounded-lg shadow-md p-6">
            <div className="mb-4">
              {currentCourse.discountedPrice ? (
                <div className="flex items-end">
                  <span className="text-3xl font-bold">${currentCourse.discountedPrice.toFixed(2)}</span>
                  <span className="text-lg text-gray-500 line-through ml-2">${currentCourse.price.toFixed(2)}</span>
                  <span className="bg-red-100 text-red-800 text-sm font-medium ml-2 px-2 py-0.5 rounded">
                    {Math.round((1 - currentCourse.discountedPrice / currentCourse.price) * 100)}% OFF
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold">${currentCourse.price.toFixed(2)}</span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mb-3 transition-colors"
            >
              Add to Cart
            </button>
            
            <button
              onClick={handleBuyNow}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
            >
              Buy Now
            </button>
            
            <div className="mt-4 text-sm text-gray-600">
              <p>30-Day Money-Back Guarantee</p>
              <p className="mt-2">Full Lifetime Access</p>
              <p className="mt-2">Certificate of Completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}

export default CourseDetailPage;