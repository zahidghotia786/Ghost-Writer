import { FaEuroSign, FaShieldAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Price = () => {
 const navigate = useNavigate()
  const orderForm =()=>{
    navigate('/contact')
  }

  const pricingData = [
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


  return (
    <div className="container mx-auto px-6 py-12 bg-[#F2FFFD]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {pricingData.map((item) => (
          <div
            key={item.id}
            onClick={orderForm}
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-in-out relative group cursor-pointer"
          >
            {/* Icon with a little bounce effect */}
            <div className="text-6xl mb-4 text-center transition ease-in-out duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-center mb-4 group-hover:text-blue-500 transition-colors duration-300">
              {item.title}
            </h2>

            {/* Price */}
            <p className="text-lg text-gray-700 mb-2 text-center group-hover:text-blue-500">
              <FaEuroSign className="inline-block text-yellow-500 mr-2 group-hover:text-blue-500" /> {item.price}
            </p>

            {/* Guarantee */}
            <p className="text-sm text-gray-500 text-center mb-6 group-hover:text-blue-600">
              <FaShieldAlt className="inline-block text-yellow-500 mr-2 group-hover:text-blue-500" /> {item.guarantee}
            </p>

            {/* Hover overlay with gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-400 opacity-0 group-hover:opacity-30 rounded-lg transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Price;
