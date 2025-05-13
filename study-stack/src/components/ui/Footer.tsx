import Link from 'next/link';
import { FaGithub , FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
 return(
    <footer className="bg-gray-800 text-white py-8">
       <div className="container mx-auto px-4">
         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
               <h3 className="font-bold text-lg mb-4"> Study Stack</h3>     
               <p className="text-gray-400">
                Upgrade your technincal skills with our courses.
               </p>     
            </div>


            <div>
               <h4 className="font-bold mb-4"> Company</h4>
               <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-400 hover:text-white"> About </Link></li>  
                  <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link> </li>
                  <li><Link href="/blog" className='text-gray-400 hover:text-white'>Blog</Link></li>  
               </ul> 
            </div>


            <div>
                <h4 className="font-bold mb-4"> Connect</h4>
                <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <FaGithub className="text-xl"/>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white"><FaTwitter className="text-xl" /></Link>
                <Link href="#" className="text-gray-400 hover:text-white"><FaLinkedin className="text-xl" /></Link>

                </div>
            </div>


            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
               <p>©{new Date().getFullYear()} Study Stack. All right reserved </p>                 
            </div>             
         </div>   
       </div> 
    </footer>
 )
}

