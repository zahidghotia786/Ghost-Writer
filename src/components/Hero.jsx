import profile from '/src/assets/profile.webp';
import { FaCheck } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="w-full h-max lg:h-screen bg-[#F2FFFD] flex flex-col-reverse lg:flex-row justify-between items-center px-4 lg:px-16">
      {/* Text Section */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center lg:items-start">
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Ghostwriting Services Worldwide
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            A dedicated global platform for aspiring writers, helping them fulfill their dreams of becoming established authors. Ghostwriters Worldwide provides you with the support of experienced writers from around the globe, helping you shape your story with professional expertise.
          </p>
          <button className="bg-green-500 text-white py-3 px-8 rounded-lg shadow-lg transition duration-300 hover:bg-green-600">
            Connect Now
          </button>
          {/* Features Section */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-6 space-y-4 lg:space-y-0 lg:space-x-8">
            <p className="flex items-center text-gray-700 text-lg">
              <FaCheck className="text-green-500 mr-2" /> Trustworthy
            </p>
            <p className="flex items-center text-gray-700 text-lg">
              <FaCheck className="text-green-500 mr-2" /> Efficient
            </p>
            <p className="flex items-center text-gray-700 text-lg">
              <FaCheck className="text-green-500 mr-2" /> Secure
            </p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 h-full mt-7 lg:mt-0 mb-6 lg:mb-0 flex justify-center items-center">
        <img src={profile} alt="Profile" className="w-[60%] h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
}
