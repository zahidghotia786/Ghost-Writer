
import { FaPen, FaLightbulb, FaClock, FaUserFriends, FaGlobe, FaStar, FaComments, FaBookOpen } from 'react-icons/fa';

const reasonsData = [
  {
    id: 1,
    icon: <FaPen className="text-5xl text-indigo-600 mb-4" />,
    title: 'Expert Writing Skills',
    description: 'Our professional ghostwriters have honed their craft to deliver exceptional writing that captivates readers and leaves a lasting impression. Your content will be engaging, polished, and impactful, reflecting your unique voice.',
  },
  {
    id: 2,
    icon: <FaLightbulb className="text-5xl text-green-600 mb-4" />,
    title: 'Creative Insights',
    description: 'We bring fresh perspectives and innovative ideas to your projects. Our ghostwriters will help you convey your message in a compelling way that resonates with your audience and stands out in the market.',
  },
  {
    id: 3,
    icon: <FaClock className="text-5xl text-orange-600 mb-4" />,
    title: 'Time-Saving',
    description: 'Outsource your writing needs to us and focus on what you do best. Our ghostwriters efficiently manage the writing process, ensuring timely delivery while you concentrate on growing your business or pursuing your passions.',
  },
  {
    id: 4,
    icon: <FaUserFriends className="text-5xl text-purple-600 mb-4" />,
    title: 'Collaborative Partnership',
    description: 'We believe in a collaborative approach. Our ghostwriters work closely with you to understand your vision, incorporate your feedback, and create content that truly reflects your ideas and objectives.',
  },
  {
    id: 5,
    icon: <FaGlobe className="text-5xl text-teal-600 mb-4" />,
    title: 'Global Reach',
    description: 'With a team of talented writers from around the world, we can cater to diverse markets and audiences. Whether you need content for local readers or a global audience, we ensure your message transcends boundaries.',
  },
  {
    id: 6,
    icon: <FaStar className="text-5xl text-yellow-600 mb-4" />,
    title: 'Quality Assurance',
    description: 'We prioritize quality in every piece of content we produce. Our thorough editing and revision processes ensure that the final product meets the highest standards and exceeds your expectations.',
  },
  {
    id: 7,
    icon: <FaComments className="text-5xl text-pink-600 mb-4" />,
    title: 'Engaging Storytelling',
    description: 'Every piece of content we create is crafted to tell a story. We understand the art of storytelling and how it can captivate your audience, driving engagement and connection.',
  },
  {
    id: 8,
    icon: <FaBookOpen className="text-5xl text-red-600 mb-4" />,
    title: 'Versatile Writing Styles',
    description: 'Our writers are adept at various writing styles and formats, including articles, blogs, ebooks, scripts, and more. Whatever your writing needs, we can adapt to deliver exactly what you’re looking for.',
  },
];

const ChooseUs = () => {
  return (
    <div className='w-full h-max justify-center items-center bg-[#F2FFFD]'>
    <div className='w-full max-w-7xl mx-auto p-8 rounded-lg shadow-lg'>
      <h1 className='text-5xl font-bold mb-10 text-center text-gray-800'>Why Choose a Ghostwriter?</h1>
      <p className='text-lg text-gray-700 text-center mb-14 mt-6'>
        Discover the countless benefits of hiring a ghostwriter. From exceptional writing skills to collaborative partnerships, our team is dedicated to bringing your ideas to life and elevating your content to new heights, ensuring you stand out in today’s competitive landscape.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {reasonsData.map((reason) => (
          <div key={reason.id} className='bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105'>
            {reason.icon}
            <h2 className='text-2xl font-semibold mb-2 text-gray-800'>{reason.title}</h2>
            <p className='text-gray-600'>{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ChooseUs;
