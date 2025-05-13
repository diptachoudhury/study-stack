import Link from "next/link";
import {FaHome ,  FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
    return(
        <nav className = "bg-white shadow-md py-4 sticky top-4 z-10">
            <div className = "container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <FaHome className="text-purple-600 text-2xl" />
                        <span className="font-bold text-xl">Study Stack</span>
                   
                </Link>

                <div className="hidden md:flex flex-1 mx-8">
                    <input
                      type="text"
                      placeholder="Search your courses..."
                      className="w-full border border-gray-300 rounded px-4 py-2 pl-10 focus:outline-none focus:ring focus:ring-violet-300"  
                    />
                     <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/cart" className="hover:text-purple-600 relative">
                        <FaShoppingCart className="text-xl" />
                        <span className ="absolute -top-2 -right-2  text-red-600 text-xs  h-5  flex items-center justify-center ">
                            0
                        </span>
                    </Link>

                    <Link href="/login" className="hover:text-purple-600">
                        Login
                    </Link>  

                    <Link href="/register" className="bg-purple-600 text-white px-4 py-2 rounded-2xl hover:bg-purple-70">
                        Sign Up
                    </Link>  
                    <button className="p-2 rounded-full hover:bg-gray-100">
                        <FaUserCircle className="text-2xl text-gray-600" />
                    </button>
                </div>
            </div>
        </nav>
    )
}