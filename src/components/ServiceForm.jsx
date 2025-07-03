import { useState } from 'react';

// Sample pricing data
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

const ServiceForm = ({ selectedServiceId, onClose }) => {
  const selectedService = pricingData.find(service => service.id === selectedServiceId);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const orderDetails = {
      service_name: selectedService.title,
      price: selectedService.price,
      name,
      email,
      location,
      payment_details: paymentDetails,
    };
  
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });
  
      if (response.ok) {
        alert('Order submitted and email sent successfully!');
        onClose(); // Close the form
      } else {
        alert('Error submitting order');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting order');
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 overflow-y-scroll py-10">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full mt-28">
        <div className='p-2 shadow-2xl border text-center mb-3'>
          <h2 className="text-2xl font-bold mb-4">Order {selectedService.title}</h2>
          <p className="mb-2">Price: {selectedService.price}</p>
          <p className="mb-2">Guarantee: {selectedService.guarantee}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="location">Location:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="paymentDetails">Payment Details:</label>
            <textarea
              id="paymentDetails"
              value={paymentDetails}
              onChange={(e) => setPaymentDetails(e.target.value)}
              required
              className="border rounded p-2 w-full"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full hover:bg-blue-600">Submit Order</button>
          <button type="button" onClick={onClose} className="bg-red-500 text-white rounded p-2 w-full mt-2 hover:bg-red-600">Close</button>
        </form>
      </div>
    </div>
  );
};

export default ServiceForm;
