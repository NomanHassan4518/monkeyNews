import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
   
<footer className="bg-white dark:bg-gray-900 border-t border-black mt-4">
    <div className="mx-auto w-full max-w-screen-xl">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-3">
        <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link to="/" className=" hover:underline mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Home</Link>
                </li>
                <li className="mb-4">
                    <Link to="/topnews" className=" hover:underline mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Top News</Link>
                </li>
                <li className="mb-4">
                    <Link to="/allnews" className="hover:underline mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">All News</Link>
                </li>
           
            </ul>
        </div>
        <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link to="/business" className=" hover:underline mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Business</Link>
                </li>
                <li className="mb-4">
                    <Link to="/general" className=" hover:underline mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">General</Link>
                </li>
                <li className="mb-4">
                    <Link to="/health" className="hover:underline mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Health</Link>
                </li>
           
            </ul>
        </div>
        <div>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                    <Link to="/science" className=" hover:underline mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Science</Link>
                </li>
                <li className="mb-4">
                    <Link to="/sports" className=" hover:underline mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Science</Link>
                </li>
                <li className="mb-4">
                    <Link to="/technology" className="hover:underline mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Technology</Link>
                </li>
           
            </ul>
        </div>
      
       
    </div>
   
      </div>
</footer>

  )
}

export default Footer
