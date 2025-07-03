import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    work: '',
    department: '',
    topic: '',
    pageCount: '',
    deliveryDate: '31.12.2024',
    email: '',
    phone: '',
    consent: false,
  });


  const workArray = [
    'Dissertation',
    'Diplomarbeit',
    'Masterarbeit',
    'Bachelorarbeit',
    'Hausarbeit',
    'Bewerbung',
    'CAS-Arbeit',
    'Einsendeaufgabe',
    'Essay',
    'Exposé',
    'Fallstudie',
    'Lektorat',
    'Portfolioarbeit',
    'Praktikumsbericht',
    'Sonstige Arbeit',
  ];

  const departmentArray = [
    'Agrarwissenschaften',
    'Anglistik',
    'Architektur',
    'Bauingenieurwesen',
    'Biologie',
    'Business Management',
    'Betriebswirtschaftslehre(BWL)',
    'Controlling',
    'Elektrotechnik',
    'Erziehungswissenschaften',
    'Ernährungswissenschaften',
    'Finanzwissenschaften',
    'Geowissenschaften',
    'Germanistik',
    'Geschichte',
    'Gesundheitswissenschaften',
    'Immobilienwirtschaft',
    'Ingenieurwissenschaften',
    'Informatik',
    'Kommunikationswissenschaften',
    'Kulturwissenschaften',
    'Logistik',
    'Marketing',
    'Maschinenbau',
    'Mathematik',
    'Medienwissenschaften',
    'Medizin',
    'Musikwissenschaften',
    'Ökologie',
    'Personalmanagement',
    'Pflegewissenschaften',
    'Philosophie',
    'Physik',
    'Politikwissenschaften',
    'Psychologie',
    'Rechnungswesen',
    'Soziale Arbeit',
    'Soziologie',
    'Sportmanagement',
    'Sprachwissenschaften',
    'Steuerrecht',
    'Tourismus',
    'Volkswirtschaftslehre(VWL)',
    'Wirtschaftsingenieurwesen',
    'Wirtschaftspsychologie',
    'Wirtschaftsrecht',
    'Wirtschaftswissenschaften',
    'sonstiger Fachbereich',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Combine form data into a single message
    const message = `
      Work: ${formData.work}
      Department: ${formData.department}
      Topic: ${formData.topic}
      Page Count: ${formData.pageCount}
      Delivery Date: ${formData.deliveryDate}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Consent: ${formData.consent ? 'Yes' : 'No'}
    `;
  
    // Prepare the data to match the EmailJS template
    const templateParams = {
      to_name: 'Recipient', // You can customize this if needed
      from_name: formData.email, // Use the email of the form submitter
      message: message, // Send the combined message
    };
  
    const serviceID = 'web-786';     // Your EmailJS Service ID
    const templateID = 'template_38cxlo4';  // Your EmailJS Template ID
    const userID = 'i6TWzBRkbkiGllPmh';     // Your EmailJS User ID
  
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your request has been sent successfully!');
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send your request, please try again.');
      });
  };
  


  return (
    <div className="bg-blue-200 p-6 rounded-lg w-full max-w-md mx-auto my-[60px] border border-gray-300">
      <form onSubmit={handleSubmit}>
        {/* Work */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="work">
            Work *
          </label>
          <select
            id="work"
            name="work"
            required
            value={formData.work}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-300 rounded"
          >
            <option value="">---</option>
            {workArray.map((work, index) => (
              <option key={index} value={work}>
                {work}
              </option>
            ))}
          </select>
        </div>

        {/* Department */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
            Department *
          </label>
          <select
            id="department"
            name="department"
            value={formData.department}
            required
            onChange={handleChange}
            className="w-full px-3 py-2 border border-blue-300 rounded"
          >
            <option value="">---</option>
            {departmentArray.map((dept, index) => (
              <option key={index} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        {/* Topic */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
            Topic *
          </label>
          <textarea
            id="topic"
            name="topic"
            type="text"
            required
            value={formData.topic}
            onChange={handleChange}
            placeholder="Enter the topic"
            className="w-full px-3 py-4 border border-blue-300 rounded"
          ></textarea>
        </div>

        {/* Page Count and Delivery Date */}
        <div className="mb-4 flex">
          <div className="w-1/2 pr-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pageCount">
              Page Count *
            </label>
            <input
              id="pageCount"
              name="pageCount"
              type="number"
              required
              value={formData.pageCount}
              onChange={handleChange}
              placeholder="Number"
              className="w-full px-3 py-2 border border-blue-300 rounded"
            />
          </div>

          <div className="w-1/2 pl-2">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deliveryDate">
              Delivery Date *
            </label>
            <input
              id="deliveryDate"
              name="deliveryDate"
              type="date"
              required
              value={formData.deliveryDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-blue-300 rounded"
            />
          </div>
        </div>

        {/* Email Address */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full px-3 py-2 border border-blue-300 rounded"
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 201-555-0123"
            className="w-full px-3 py-2 border border-blue-300 rounded"
          />
        </div>

        {/* Consent */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="consent"
              required
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2"
            />
            I have read and accept the{' '}
            <a href="/policy" className="text-blue-500 pr-1 pl-1">
              Privacy Policy
            </a> {' '}
            and {' '}
            <a href="/terms" className="text-blue-500 pl-1">
              Terms
            </a>.
          </label>
        </div>


        {/* Submit Button */}
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
