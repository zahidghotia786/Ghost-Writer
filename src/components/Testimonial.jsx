import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import Slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import Slick theme CSS

// Sample Testimonial Data
const testimonialsData = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Author & Entrepreneur",
    feedback: "The ghostwriter exceeded my expectations! They captured my voice perfectly and delivered a polished manuscript on time.",
    image: "/src/assets/client1.png",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Business Owner",
    feedback: "Hiring a ghostwriter was the best decision I made for my business. The quality of the content was exceptional and engaging.",
    image: "/src/assets/client2.png",
  },
  {
    id: 3,
    name: "Emily White",
    role: "Blogger",
    feedback: "I was impressed with the creativity and attention to detail. My blog traffic has doubled since I started using their services!",
    image: "/src/assets/client3.png",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Speaker & Coach",
    feedback: "The collaboration was seamless! The ghostwriter understood my vision and transformed it into captivating content.",
    image: "/src/assets/client4.png",
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "Content Marketer",
    feedback: "Their ghostwriting services are top-notch. They truly understand the art of storytelling.",
    image: "/src/assets/client5.png",
  },
  {
    id: 6,
    name: "David Wilson",
    role: "Entrepreneur",
    feedback: "The quality and professionalism were beyond my expectations. I will definitely work with them again!",
    image: "/src/assets/client6.png",
  },
  {
    id: 7,
    name: "Laura Garcia",
    role: "Freelance Writer",
    feedback: "I couldn't have asked for a better partner in my writing journey. Highly recommend their services!",
    image: "/src/assets/client7.png",
  }
];

const Testimonial = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto play the slides
    autoplaySpeed: 3000, // Auto play speed
    cssEase: "linear", // Transition easing
  };

  return (
    <div className='w-full max-w-7xl mx-auto p-8 bg-lime-100 bg-opacity-20 rounded-lg'>
      <h1 className='text-4xl font-bold mb-4 text-center mt-[60px]'>What Our Clients Say</h1>
      <p className='text-lg text-center mb-8'>
        Hear from our satisfied clients who have transformed their ideas into reality with our ghostwriting services.
      </p>

      <Slider {...settings}>
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className='flex justify-center mt-[80px]'>
            <div className='rounded-lg p-8 flex flex-col border shadow bg-[#F2FFFD] items-center transition-transform duration-500 transform hover:scale-105 max-w-md mx-auto'>
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className='w-32 h-32 rounded-full border-4 border-lightblue-600 mb-4 shadow-lg' 
              />
              <h2 className='text-xl font-semibold mb-2 text-gray-800 text-center'>{testimonial.name}</h2>
              <h3 className='text-gray-600 mb-2 text-center'>{testimonial.role}</h3>
              <p className='text-gray-700 text-center italic'>" {testimonial.feedback} "</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
