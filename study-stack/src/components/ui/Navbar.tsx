import Link from "next/link";
import {FaHome ,  FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
    return(
        <nav className = "bg-white shadow-md py-4 sticky top-4 z-10">
            <div className = "container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <FaHome className="text-purple-600 text-2xl">
                        <span className="font-bold text-xl">Study Stack</span>
                    </FaHome>
                </Link>

                <div className="hidden md:flex flex-1 mx-8">
                    <input
                      type="text"
                      placeholder="Search your courses..."
                      className="w-full border border-gray-300 rounded px-4 py-2 pl-10 focus: outline-none focus: ring-1 focus: ring-purple-500"  
                    />
                     <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
            </div>
        
        </nav>
    )
}