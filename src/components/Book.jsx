import book from '/src/assets/book.webp';

export default function Book() {
  return (
    <div className="bg-[#F2FFFD] w-full min-h-screen flex justify-center items-center py-12 px-4">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center items-center md:items-start space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-snug">
            Best Ghostwriting Company worldwide
          </h1>
          <p className="text-gray-700 leading-relaxed">
            As our name suggests, Ghostwriters India is the best ghostwriting company in India. In the dynamic landscape of literature and content creation, a specialized profession silently thrives – that of ghostwriting. Ghostwriters, the unsung heroes, weave narratives and articulate ideas for others without claiming credit for their work.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The demand for these professional ghostwriting services has surged remarkably in India, empowering individuals and organizations to share their narratives and expertise through books, articles, speeches, and various content forms.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ghostwriting serves as a dynamic solution for those who may lack the time, writing skills, or expertise to transform their ideas into compelling and polished pieces of content. In India, where diverse narratives and a wealth of knowledge exist, ghostwriters contribute significantly to the amplification of these voices.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
          <img src={book} alt="Book" className="w-[85%] md:w-[90%] h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
}
