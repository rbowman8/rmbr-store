import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Centered Brand Title & Subtitle with Padding */}
      <div className="text-center my-12">
      <h1 className="text-4xl font-bold tracking-wider mt-4">RMBR</h1>
      <p className="text-lg text-gray-600 tracking-wide mt-2">An American Lifestyle Brand</p>
      </div>

      {/* Hero Image Section */}
      
      <div className='w-full h-[80vh] bg-gray-100 mt-4 relative flex flex-col items-center justify-center'>
        <img src='/brown.jpg' alt="brownHoodieFront"
          className='w-full h-full object-contain shadow-2xl rounded-xl relative z-10'
        />
        
      </div>
      {/* Product Grid Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold tracking-wider text-center mb-10">
          Featured Collection
        </h2>
        
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {/* Product Card 1 */}
          <div className="group cursor-pointer">
            <div className="w-full h-80 bg-gray-100 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              {/* You can replace this with an <img> tag later */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Item Preview
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <h3 className="font-medium text-gray-900">RMBR Signature Piece</h3>
              <span className="text-gray-900 font-semibold">$150</span>
            </div>
          </div>

          {/* Product Card 2 (Duplicate to test layout) */}
          <div className="group cursor-pointer">
            <div className="w-full h-80 bg-gray-100 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Item Preview
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <h3 className="font-medium text-gray-900">Limited Edition Drop</h3>
              <span className="text-gray-900 font-semibold">$175</span>
            </div>
          </div>

          {/* Product Card 3 (Duplicate to test layout) */}
          <div className="group cursor-pointer">
            <div className="w-full h-80 bg-gray-100 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Item Preview
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <h3 className="font-medium text-gray-900">Classic Essential</h3>
              <span className="text-gray-900 font-semibold">$110</span>
            </div>
          </div>

        </div>

        <img src="/feather.png" alt="falling feather" className="feather z-50"/>
      </section>
    </main>
  );
}