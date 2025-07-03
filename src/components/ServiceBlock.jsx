
const services = [
  { id: 1, title: 'Dissertation', price: 'From €53 per page', guarantee: '14-day Guarantee', icon: '🎓' },
  { id: 2, title: 'Diplomarbeit', price: 'From €51 per page', guarantee: '14-day Guarantee', icon: '📄' },
  { id: 3, title: 'Masterarbeit', price: 'From €56 per page', guarantee: '14-day Guarantee', icon: '📚' },
  { id: 4, title: 'Bachelorarbeit', price: 'From €57 per page', guarantee: '14-day Guarantee', icon: '✍️' },
  { id: 5, title: 'Hausarbeit', price: 'From €65 per page', guarantee: '14-day Guarantee', icon: '🎓' },
  { id: 6, title: 'Bewerbung', price: 'From €54 per page', guarantee: '14-day Guarantee', icon: '🔬' },
  { id: 7, title: 'CAS-Arbeit', price: 'From €48 per page', guarantee: '14-day Guarantee', icon: '📝' },
  { id: 8, title: 'Einsendeaufgabe', price: 'From €60 per page', guarantee: '14-day Guarantee', icon: '💼' },
  { id: 9, title: 'Essay', price: 'From €50 per page', guarantee: '14-day Guarantee', icon: '📜' },
  { id: 10, title: 'Exposé', price: 'From €52 per page', guarantee: '14-day Guarantee', icon: '📚' },
  { id: 11, title: 'Fallstudie', price: 'From €45 per slide', guarantee: '14-day Guarantee', icon: '📊' },
  { id: 12, title: 'Lektorat', price: 'From €55 per page', guarantee: '14-day Guarantee', icon: '🔍' },
  { id: 13, title: 'Portfolioarbeit', price: 'From €55 per page', guarantee: '14-day Guarantee', icon: '📂' },
  { id: 14, title: 'Praktikumsbericht', price: 'From €55 per page', guarantee: '14-day Guarantee', icon: '📄' },
  { id: 15, title: 'Sonstige Arbeit', price: 'From €55 per page', guarantee: '14-day Guarantee', icon: '📝' },
];

const ServiceBlock = () => {
  return (
    <div className="services-section py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Our Services</h2>

        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-item flex flex-col md:flex-row items-center mb-16 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Left or Right Image/Icon */}
            <div className="icon-container flex-shrink-0 md:w-1/2 mb-6 md:mb-0">
              <div className="w-40 h-40 md:w-64 md:h-64 bg-blue-100 text-6xl text-blue-700 flex items-center justify-center rounded-full shadow-lg">
                {service.icon}
              </div>
            </div>

            {/* Right or Left Detail */}
            <div className="detail-container text-center md:text-left md:w-1/2 px-6">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-lg text-gray-600 mb-2">{service.price}</p>
              <p className="text-md text-gray-500">{service.guarantee}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBlock;
