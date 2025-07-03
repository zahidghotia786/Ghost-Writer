import writtingImg from '/src/assets/writting.webp';
import thesisImg from '/src/assets/thesis.webp';
import contentImg from '/src/assets/content.webp';
import translateImg from '/src/assets/translate.webp';

export default function Services() {
  return (
    <div className="bg-[#46a6f563] w-full py-12 px-6 flex flex-col items-center">
      
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-blue-800 mb-4 animate-fadeIn text-center">
        Our Professional Services
      </h1>
      <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl">
        We offer a range of world-class services to clients globally, delivering high-quality solutions in ghostwriting, thesis writing, 
        content creation, and translation. Our team of experienced professionals is committed to bringing your ideas to life.
      </p>

      {/* Services Grid */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">
        
        {/* Book Ghostwriting */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
          <img src={writtingImg} alt="Book Ghostwriting" className="w-[90%] h-auto rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Book Ghostwriting</h2>
          <p className="text-gray-600 mb-4">
            Our ghostwriters work closely with authors to create compelling books across various genres. We ensure your book reflects your vision and resonates with your audience.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors">
            Connect Now
          </button>
        </div>

        {/* Thesis Writing */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
          <img src={thesisImg} alt="Thesis Writing" className="w-[90%] h-auto rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Thesis Writing</h2>
          <p className="text-gray-600 mb-4">
            Our thesis writing services provide specialized support to students pursuing advanced degrees. We guide you to academic success with thorough research and expert writing.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors">
            Connect Now
          </button>
        </div>

        {/* Content Writing */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
          <img src={contentImg} alt="Content Writing" className="w-[90%] h-auto rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Content Writing</h2>
          <p className="text-gray-600 mb-4">
            Our expert writers craft high-quality articles, blogs, and web content that captivate audiences. Let us help you enhance your online presence with engaging content.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors">
            Connect Now
          </button>
        </div>

        {/* Translation Services */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform transform hover:scale-105 flex flex-col items-center text-center">
          <img src={translateImg} alt="Translation Services" className="w-[90%] h-auto rounded-md mb-4" />
          <h2 className="text-xl font-semibold text-blue-700 mb-2">Translation Services</h2>
          <p className="text-gray-600 mb-4">
            Our translation services break language barriers. We provide accurate translations for businesses and individuals to help you reach a global audience.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition-colors">
            Connect Now
          </button>
        </div>
        
      </div>
    </div>
  );
}
