import { useState } from 'react';

// FAQ Data
const faqData = [
  {
    question: "What is ghostwriting?",
    answer: "Ghostwriting is a service where a professional writer creates content for someone else, who is credited as the author. This can include books, articles, blogs, and more."
  },
  {
    question: "Why should I hire a ghostwriter?",
    answer: "Hiring a ghostwriter saves you time and ensures high-quality writing. They bring expertise, creativity, and a fresh perspective to your projects."
  },
  {
    question: "How does the ghostwriting process work?",
    answer: "The process typically involves an initial consultation, outlining the content, research, drafting, revisions, and final delivery."
  },
  {
    question: "Can I make changes to the content after it's written?",
    answer: "Absolutely! Your feedback is crucial throughout the process, and revisions can be made to ensure the final product aligns with your vision."
  },
  {
    question: "What types of content can a ghostwriter create?",
    answer: "Ghostwriters can create a variety of content, including blog posts, articles, ebooks, speeches, and even scripts."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='w-full h-full flex justify-center items-center bg-gradient-to-b from-blue-50 to-blue-100'>
      <div className='w-full max-w-7xl mx-auto p-8 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold mb-4 text-center text-blue-900'>Frequently Asked Questions</h1>
        <p className='text-lg text-gray-700 text-center mb-8'>
          Find answers to common questions about our ghostwriting services. If you have any further questions, feel free to contact us!
        </p>
        <div className='space-y-4'>
          {faqData.map((faq, index) => (
            <div key={index} className='bg-white shadow-md rounded-lg overflow-hidden'>
              <div 
                className='flex justify-between items-center p-4 cursor-pointer transition-colors duration-200 hover:bg-blue-200'
                onClick={() => toggleAnswer(index)}
              >
                <h2 className='text-lg font-semibold text-blue-800'>{faq.question}</h2>
                <span className='text-blue-500'>{openIndex === index ? '-' : '+'}</span>
              </div>
              <div 
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-40' : 'max-h-0'}`}
              >
                <p className='p-4 text-gray-600'>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
