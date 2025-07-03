
const CallToAction = () => {
  return (
    <div className="bg-blue-500 py-16">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-4 animate-bounce">
          Ready to Ace Your Academic Writing?
        </h2>
        <p className="text-lg text-white mb-8">
          Get high-quality writing services tailored to your needs. Thesis, dissertations, and more—delivered by experts.
        </p>
        <a href="/contact"
           className="bg-[#F2FFFD] hover:bg-blue-200 text-blue-800 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 ease-in-out inline-block animate-pulse">
          Get Started Now
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
