import Header from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      {/* Hero Image Section */}
      <div className='w-full h-[80vh] bg-gray-100 mt-4 relative'>
        <img src='/highPower.jpeg' alt="High Power Front"
          className='w-full h-full object-contain'
        />
      </div>
    </main>
  );
}