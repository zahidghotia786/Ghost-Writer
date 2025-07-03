import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="w-full flex flex-col items-center">
            {/* Navbar links */}
            <div className="w-full h-max flex justify-center shadow border bg-[#FCFCFC]">
                <div className="container w-full h-[50px] flex justify-between items-center">
                    <h1 className="text-[12px] text-[#999998] ml-4 sm:ml-10 font-medium">
                        Email <a href="mailto:ghostwritter@gmail.com">ghostwritter@gmail.com</a>
                    </h1>

                    <div className="flex space-x-2 mr-4 sm:mr-10">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition duration-300">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition duration-300">
                            <FaTwitter size={20} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition duration-300">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>
            </div>
            {/* Navbar links */}

            {/* Navbar menu */}
            <div className="border-gray-200 border w-full h-[70px] bg-[#FFFFFF] flex justify-center items-center">
                <div className="container h-full flex justify-between">
                    {/* Logo */}
                    <div className="container h-full w-full sm:w-max flex justify-between items-center">
                        <h1 className="text-xl font-bold ml-4 sm:ml-9 cursor-pointer text-gray-700">Ghost-Study</h1>
                        <button className="block sm:hidden mr-4 cursor-pointer" onClick={toggleSidebar}>
                            <FaBars size={24} />
                        </button>
                    </div>

                    <div className="hidden sm:flex w-max justify-between items-center mr-4 sm:mr-10">
                        <ul className="flex space-x-8 text-sm text-[15px] font-medium text-gray-700 h-full">
                            <li className="hover:text-blue-600 h-full flex justify-center items-center transition duration-300 cursor-pointer">Home</li>

                            {/* Container wrapping Ghostwriting and the dropdown */}
                            <li
                                className="relative hover:text-blue-600 transition duration-300 cursor-pointer"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <span className="flex items-center h-full">
                                    Ghostwriting
                                    {isDropdownOpen ? (
                                        <FaChevronUp className="ml-2" />
                                    ) : (
                                        <FaChevronDown className="ml-2" />
                                    )}
                                </span>
                                {isDropdownOpen && (
                                    <ul
                                        className="absolute top-12 left-0 w-48 bg-gray-300 border border-gray-400 shadow-lg rounded-md z-10 transition-transform duration-300 transform scale-95 hover:scale-100"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Dissertation</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Diplomarbeit</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Masterarbeit</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Bachelorarbeit</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Hausarbeit</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Bewerbung</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">CAS-Arbeit</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Einsendeaufgabe</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Essay</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Exposé</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Fallstudie</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Lektorat</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Portfolioarbeit</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Praktikumsbericht</li>
                                        <li className="px-4 py-2 text-gray-900 hover:bg-blue-100 cursor-pointer">Sonstige Arbeit</li>


                                    </ul>
                                )}
                            </li>

                            <li className="hover:text-blue-600 transition duration-300 cursor-pointer flex justify-center items-center"><Link to={'/contact'}>Contact</Link></li>
                            <li className="hover:text-blue-600 transition duration-300 cursor-pointer flex justify-center items-center">About</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Navbar menu */}

            {/* Sidebar Menu */}
            <div
                className={`fixed inset-0 z-50 bg-white shadow-lg p-4 sm:hidden transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Menu</h2>
                    <button onClick={toggleSidebar} className="text-gray-600">
                        <FaTimes size={24} />
                    </button>
                </div>
                <ul className="flex flex-col space-y-4">
                    <li className="hover:text-blue-600 transition duration-300 cursor-pointer">Home</li>
                    <li className="hover:text-blue-600 transition duration-300 cursor-pointer">Ghostwriting</li>
                    <li className="hover:text-blue-600 transition duration-300 cursor-pointer">Blogs</li>
                    <li className="hover:text-blue-600 transition duration-300 cursor-pointer">Contact</li>
                </ul>
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                </div>
            </div>
        </div>
    );
}
