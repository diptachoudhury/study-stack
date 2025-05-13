'use client';

import Link from 'next/link';
import { JSX } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowAltCircleRight } from "react-icons/fa";


const Hero = () => {
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible : {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: 'easeOut'}
    }
};

const staggerContainer = {
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

   return(
    <section className="relative bg-gradient-to-br from-gray-50 via gray-100 to-gray-200 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0  bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        </div>
        </div>

        <div className="container mx-auto px-4 py-28 md:py:36 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                 initial="hidden"
                 animate="visible"
                 variants={staggerContainer}>
                   <motion.h1 
                    variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6
                     text-gray-900 leading-tight">
                          Master New Skills with <span className="text-gray-600">Premium</span> Learning
                   </motion.h1>
                   <motion.p
                     variants={fadeIn}
                     className="text-xl md:text-2xl text-gray-600 mb-8 max-w-lg">
                        Join thousands of students learning at their own pace with our expert-led courses.
                   </motion.p> 

                   <motion.div
                     variants={fadeIn}
                     className="flex flex-col sm-flex-row gap-4">
                        <Link 
                        href="/courses"
                        className="group relative flex items-center justify-center 
                                    bg-gray-900 text-white px- py-4 rounded-lg font-bold
                                    hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                         Explore Courses 
                         <FaArrowAltCircleRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />              
                        </Link>
                        <Link
                            href="/instructor/dashboard"
                            className="group relative flex items-center justify-center bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-900 hover:text-white transition-all duration-300"
                        >
                            Become an Instructor
                            <FaArrowAltCircleRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                     </motion.div>

                      <motion.div
                         variants={fadeIn}
                         className="mt-8 flex itmes-center space-x-4">
                        <div className="flex -space-x-4">
                           {[1, 2, 3, 4].map((item) => (
                            <div 
                             key={item}
                             className="h-10 w-10 rounded-full border-2 border-whote bg-gray-3000 overflow-hidden">
                               <Image
                                 src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item + 20}.jpg`}
                                 alt={`User ${item}`}
                                 width={40}
                                 height={40}
                                 className="object-cover grayscale"
                               /> 

                            </div>    
                           ))} 
                        </div>    
                        <p className="text-gray-600 text-sm md:text-base">
                Join <span className="font-semibold text-gray-900">10,000+</span> professionals
              </p>  
                      </motion.div>  
                </motion.div>


                <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/Hero.jpg"
                alt="Professional learning"
                fill
                className="object-cover grayscale"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
            </div>
          </motion.div>            


            </div>
        </div>
    </section>
  ); 
}

export default Hero;



