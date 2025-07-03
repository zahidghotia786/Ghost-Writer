import processImg from '/src/assets/process.webp';
import { FaCheckCircle } from 'react-icons/fa'; // Importing the check icon from FontAwesome

export default function Process() {
  return (
    <div className='w-full h-auto flex flex-col justify-center items-center py-10 bg-gray-100'>
<h1 className='text-4xl font-bold mb-10 text-center text-gray-800'>Our Order Process</h1>
<p className='text-lg text-gray-600 text-center mb-6 w-full sm:w-[90%]'>
  Discover our seamless order process designed to ensure clarity and collaboration at every step. From the initial consultation to the final delivery, we prioritize your vision and feedback, ensuring a product that truly reflects your goals and expectations.
</p>

      <div className='container mx-auto flex flex-col md:flex-row justify-center mt-10 items-start space-y-10 md:space-y-0 md:space-x-10'>
        <div className='md:w-1/2 h-full flex justify-center items-center'>
          <img src={processImg} alt="Process Illustration" className='w-full rounded-lg shadow-lg transition-transform duration-500 hover:scale-105' />
        </div>
        <div className='md:w-1/2 h-full px-5'>
          <h2 className='text-3xl font-semibold mb-5 text-gray-700 text-center'>The Ghostwriting Process</h2>
          <h5 className='text-lg font-medium mb-4 text-gray-600'>Our streamlined process follows these essential steps:</h5>

          {/* Step Cards */}
          <div className='space-y-6'>
            <div className='flex items-start bg-white rounded-lg shadow-md p-5 transition-transform duration-300 hover:shadow-xl'>
              <span className='bg-green-500 rounded-full p-2 mr-3'>
                <FaCheckCircle className='text-white' />
              </span>
              <div>
                <h6 className='font-semibold text-lg'>1. Initial Consultation</h6>
                <p>We start by understanding your project goals, ideas, and expectations through a detailed discussion.</p>
              </div>
            </div>

            <div className='flex items-start bg-white rounded-lg shadow-md p-5 transition-transform duration-300 hover:shadow-xl'>
              <span className='bg-green-500 rounded-full p-2 mr-3'>
                <FaCheckCircle className='text-white' />
              </span>
              <div>
                <h6 className='font-semibold text-lg'>2. Outline and Planning</h6>
                <p>Together, we create a comprehensive outline that defines the structure and flow of your content.</p>
              </div>
            </div>

            <div className='flex items-start bg-white rounded-lg shadow-md p-5 transition-transform duration-300 hover:shadow-xl'>
              <span className='bg-green-500 rounded-full p-2 mr-3'>
                <FaCheckCircle className='text-white' />
              </span>
              <div>
                <h6 className='font-semibold text-lg'>3. Research and Writing</h6>
                <p>We conduct in-depth research and begin crafting the content, ensuring it aligns with your vision while keeping you updated.</p>
              </div>
            </div>

            <div className='flex items-start bg-white rounded-lg shadow-md p-5 transition-transform duration-300 hover:shadow-xl'>
              <span className='bg-green-500 rounded-full p-2 mr-3'>
                <FaCheckCircle className='text-white' />
              </span>
              <div>
                <h6 className='font-semibold text-lg'>4. Revisions and Editing</h6>
                <p>After incorporating your feedback, we refine the content through meticulous editing to ensure the highest quality.</p>
              </div>
            </div>

            <div className='flex items-start bg-white rounded-lg shadow-md p-5 transition-transform duration-300 hover:shadow-xl'>
              <span className='bg-green-500 rounded-full p-2 mr-3'>
                <FaCheckCircle className='text-white' />
              </span>
              <div>
                <h6 className='font-semibold text-lg'>5. Final Delivery</h6>
                <p>Once everything is polished and perfect, we deliver the final product to you. You will then have full ownership of the work, claiming it as your own creation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
