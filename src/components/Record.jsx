import { useEffect, useState, useRef } from 'react';
import { FaPenNib, FaEdit, FaGlobe, FaUsers } from 'react-icons/fa';

export default function Record() {
  const [counts, setCounts] = useState({
    ghostwriting: 0,
    manuscripts: 0,
    clients: 0,
    team: 0,
  });

  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            startCount();
          }
        });
      },
      { threshold: 0.3 } // triggers when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startCount = () => {
    const ghostwritingTarget = 128;
    const manuscriptsTarget = 900;
    const clientsTarget = 1500;
    const teamTarget = 50;

    const interval = 30; // speed of counting in milliseconds

    const incrementCount = (key, target) => {
      const step = Math.ceil(target / 100); // Adjusting the step for smooth counting
      const counter = setInterval(() => {
        setCounts((prevCounts) => {
          const newValue = prevCounts[key] + step;
          if (newValue >= target) {
            clearInterval(counter);
            return { ...prevCounts, [key]: target };
          }
          return { ...prevCounts, [key]: newValue };
        });
      }, interval);
    };

    incrementCount('ghostwriting', ghostwritingTarget);
    incrementCount('manuscripts', manuscriptsTarget);
    incrementCount('clients', clientsTarget);
    incrementCount('team', teamTarget);
  };

  return (
    <div
      ref={sectionRef}
      className="w-full flex justify-center items-center h-max lg:h-[95vh] bg-blue-50 py-10 px-4"
    >
      <div className="container flex flex-wrap justify-center items-center mt-20 sm:mt-0 gap-4 lg:gap-8 max-w-screen-xl">
        {/* Ghostwriting Projects */}
        <div className="w-full sm:w-[45%] md:w-[33%] lg:w-[22.5%] bg-white text-center p-6 rounded-lg shadow-lg border border-gray-200 transform hover:scale-105 transition-transform">
          <FaPenNib className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h1 className="text-4xl font-bold text-blue-600 mb-2">{counts.ghostwriting}+</h1>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Ghostwriting Projects</h3>
          <p className="text-sm text-gray-600">
            We have successfully completed over {counts.ghostwriting}+ ghostwriting projects with 100%
            client satisfaction. Your story deserves the best ghostwriters. Contact us today!
          </p>
        </div>

        {/* Manuscript Edited */}
        <div className="w-full sm:w-[45%] md:w-[33%] lg:w-[22.5%] bg-white text-center p-6 rounded-lg shadow-lg border border-gray-200 transform hover:scale-105 transition-transform">
          <FaEdit className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h1 className="text-4xl font-bold text-blue-600 mb-2">{counts.manuscripts}+</h1>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Manuscripts Edited</h3>
          <p className="text-sm text-gray-600">
            Our expert editors have fine-tuned over {counts.manuscripts}+ manuscripts to perfection,
            helping authors meet the highest publishing standards.
          </p>
        </div>

        {/* Clients Worldwide */}
        <div className="w-full sm:w-[45%] md:w-[33%] lg:w-[22.5%] bg-white text-center p-6 rounded-lg shadow-lg border border-gray-200 transform hover:scale-105 transition-transform">
          <FaGlobe className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h1 className="text-4xl font-bold text-blue-600 mb-2">{counts.clients}+</h1>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Clients Worldwide</h3>
          <p className="text-sm text-gray-600">
            We have proudly served over {counts.clients}+ clients from all corners of the globe, offering
            services in various languages and formats.
          </p>
        </div>

        {/* Team Size */}
        <div className="w-full sm:w-[45%] md:w-[33%] lg:w-[22.5%] bg-white text-center p-6 rounded-lg shadow-lg border border-gray-200 transform hover:scale-105 transition-transform">
          <FaUsers className="text-blue-600 text-5xl mb-4 mx-auto" />
          <h1 className="text-4xl font-bold text-blue-600 mb-2">{counts.team}+</h1>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Expert Team Members</h3>
          <p className="text-sm text-gray-600">
            Our team of {counts.team}+ ghostwriters, editors, and publishing professionals is ready to
            help bring your manuscript to life with unmatched expertise.
          </p>
        </div>
      </div>
    </div>
  );
}
