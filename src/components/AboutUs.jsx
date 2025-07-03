import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="about-us bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="hero bg-blue-600 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">We Bring Your Ideas to Life</h1>
          <p className="text-xl">
            At [Your Company Name], we are passionate about words, ideas, and stories. As one of the leading ghostwriting services, 
            we help students, professionals, and creatives turn their thoughts into captivating, polished work.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to provide premium ghostwriting services with integrity, professionalism, and confidentiality. 
            Whether it’s an academic dissertation, business proposal, or personal memoir, we aim to transform your vision into reality 
            while upholding the highest standards of quality and ethics.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="story bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text">
            <h2 className="text-4xl font-bold text-green-700 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Founded in [Year], [Your Company Name] began with a simple belief: that everyone has a story to tell, 
              but not everyone has the time or skill to write it. Over the years, we’ve grown from a small team of expert writers 
              to a renowned service helping clients worldwide. Our journey is rooted in a deep love for words and an unwavering 
              commitment to helping our clients achieve their goals through the written word.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we proudly offer a diverse range of ghostwriting services that span across academic, business, and creative fields. 
              We have written hundreds of dissertations, essays, novels, speeches, and more, always prioritizing client satisfaction.
            </p>
          </div>
          <div className="image">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Our story"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="values py-24 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-purple-700 mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="value-item">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Confidentiality</h3>
              <p className="text-lg text-gray-600">
                Your privacy is our top priority. We ensure complete confidentiality in every project, protecting your identity and ideas.
              </p>
            </div>
            <div className="value-item">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Excellence</h3>
              <p className="text-lg text-gray-600">
                We deliver only the highest quality work, crafted by professional writers with deep expertise in your subject area.
              </p>
            </div>
            <div className="value-item">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">Integrity</h3>
              <p className="text-lg text-gray-600">
                We believe in transparency and ethics, providing ghostwriting services that you can trust to be original, tailored, and accurate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tailored Writing Solutions</h3>
              <p className="text-lg text-gray-600 mb-6">
                We understand that every project is unique. Our team works closely with you to understand your specific needs and deliver 
                custom solutions that fit your style and objectives.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Skilled Professional Writers</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our ghostwriters are seasoned experts in a variety of fields, from academia to business and creative writing. 
                Each writer is carefully selected for their knowledge, creativity, and attention to detail.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Proven Track Record</h3>
              <p className="text-lg text-gray-600 mb-6">
                With thousands of successful projects under our belt, we are trusted by clients from all walks of life. 
                Our results speak for themselves, and our client satisfaction rate is a testament to our excellence.
              </p>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Affordable and Transparent Pricing</h3>
              <p className="text-lg text-gray-600">
                We offer competitive pricing without compromising quality. You’ll know exactly what you're paying for, with no hidden fees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team py-24 bg-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-green-700 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="team-member">
              <img
                src="https://via.placeholder.com/200"
                alt="Team member 1"
                className="w-40 h-40 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Lead Academic Writer</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/200"
                alt="Team member 2"
                className="w-40 h-40 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Creative Ghostwriter</p>
            </div>
            <div className="team-member">
              <img
                src="https://via.placeholder.com/200"
                alt="Team member 3"
                className="w-40 h-40 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Michael Brown</h3>
              <p className="text-gray-600">Business Writing Specialist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta bg-blue-600 text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Let’s Write Your Story Together</h2>
          <p className="text-lg mb-8">
            Ready to get started? Contact us today to discuss your ghostwriting needs and take the first step toward bringing your ideas to life.
          </p>
          <Link to={'/contact'} className="bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
