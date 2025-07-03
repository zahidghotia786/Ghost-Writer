import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="mb-4">
              We are a passionate team of writers dedicated to delivering high-quality ghostwriting services tailored to your needs. Let us help you bring your ideas to life!
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul>
              <li><a href="/serviceblock" className="hover:underline">Ghostwriting</a></li>
              <li><a href="/serviceblock" className="hover:underline">Editing</a></li>
              <li><a href="/serviceblock" className="hover:underline">Proofreading</a></li>
              <li><a href="/serviceblock" className="hover:underline">Content Strategy</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/serviceblock" className="hover:underline">Services</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="mb-2">For inquiries, please fill out the form below:</p>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Your Name"
                className="mb-2 p-2 rounded bg-gray-700 text-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="mb-2 p-2 rounded bg-gray-700 text-white"
                required
              />
              <textarea
                placeholder="Your Message"
                className="mb-2 p-2 rounded bg-gray-700 text-white"
                rows="3"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="mt-10 text-center">
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-500"><FaFacebookF size={20} /></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><FaTwitter size={20} /></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><FaLinkedinIn size={20} /></a>
            <a href="#" className="text-blue-400 hover:text-blue-500"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-center p-4 mt-10">
        <p className="text-sm">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}
