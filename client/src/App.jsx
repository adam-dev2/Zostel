import React from 'react';

const navItems = [
  'DESTINATION',
  'TRIP THRILL',
  'TRIP THRILL PLUS','TRIP THRILL HOMES',
  'TRIPS',
  'SELECTIONS',
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow">
        <p className="font-bold text-3xl text-orange-600">Trip Thrill</p>
        <input
          className="border border-gray-300 focus:border-orange-500 px-4 py-2 rounded-xl outline-none transition"
          type="search"
          placeholder="Search"
        />
        <div className="flex gap-3">
          <button className="bg-zinc-200 text-black px-4 py-2 rounded-full hover:bg-zinc-300 font-semibold transition">
            Sign up
          </button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 font-semibold transition">
            Login
          </button>
        </div>
      </header>

      <section className="relative flex flex-col items-center justify-center h-[60vh] bg-zinc-900">
        <h1 className="text-white text-6xl font-extrabold mb-4">Live it Now</h1>
    
        <div className="absolute bottom-[-4rem] left-1/2 transform -translate-x-1/2 bg-white max-w-4xl w-full rounded-2xl shadow-xl border border-gray-200">
          <nav className="flex justify-around gap-2 border-b border-gray-200 p-4">
            {navItems.map((item) => (
              <p
                key={item}
                className="font-semibold cursor-pointer px-2 py-2 hover:border-b-2 hover:border-orange-500 transition"
              >
                {item}
              </p>
            ))}
          </nav>
          <div className="p-6 flex flex-wrap gap-4 items-center justify-between">
            <input
              type="text"
              placeholder="eg: Jaipur, Taj Mahal etc.."
              className="border border-gray-300 rounded-xl px-4 py-2 flex-1 min-w-[300px] outline-none focus:border-orange-500 transition"
            />
            <input
              type="date"
              placeholder="Check in"
              className="border border-gray-300 rounded-xl px-4 py-2 flex-1 min-w-[140px] outline-none focus:border-orange-500 transition"
            />
            <input
              type="date"
              placeholder="Check out"
              className="border border-gray-300 rounded-xl px-4 py-2 flex-1 min-w-[140px] outline-none focus:border-orange-500 transition"
            />
            <button className="bg-orange-500 rounded-2xl text-white px-6 py-2 text-xl font-bold hover:bg-orange-600 transition">
              Search
            </button>
          </div>
        </div>
      </section>
      <div className="h-[8rem]" />
      <section className='max-w mx-40 m-auto h-100'>
        <div className='w-full bg-zinc-900 h-full rounded-4xl'>
          
        </div>
      </section>
      <h1 className='text-orange-500 font-bold text-2xl ml-42 mt-10'>What's New</h1>
      <section className='flex mt-10 max-w ml-42 mr-42'>
        <div
          className='flex gap-6 py-2'
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: '#f97316 #e5e7eb',
            maxWidth: '100%',
          }}
        >
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
        </div>
      </section>

      <h1 className='text-orange-500 font-bold text-2xl ml-42 mt-10'>Destinations</h1>
      <section className='flex mt-10 max-w ml-42 mr-42'>
        <div
          className='flex gap-6 py-2'
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: '#f97316 #e5e7eb',
            maxWidth: '100%',
          }}
        >
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
        </div>
      </section>
      <section className='flex mt-10 max-w ml-42 mr-42'>
        <div
          className='flex gap-6 py-2'
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: '#f97316 #e5e7eb',
            maxWidth: '100%',
          }}
        >
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
          <div className='w-xs min-w-[200px] h-80 bg-zinc-900 rounded-full '></div>
        </div>
      </section>

      <h1 className='text-orange-500 font-bold text-4xl ml-42 mt-10'>Explore with Trip Thrills</h1>
      <section className='flex mt-10 max-w ml-42 mr-42'>
        <div
          className='flex gap-6 py-2'
          style={{
            overflowX: 'auto',
            scrollbarWidth: 'thin',
            scrollbarColor: '#f97316 #e5e7eb',
            maxWidth: '100%',
          }}
        >
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
          <div className='w-xs min-w-[300px] h-100 bg-zinc-900 rounded-4xl '></div>
        </div>
      </section>

        <section>
          <div className='flex flex-col max-w-2xl m-auto items-center justify-between mt-10'>
            <h1 className='text-4xl text-black font-bold'>Discover Trip Thrill</h1>
            <div className='flex justify-between gap-4 mt-4'>
              <button className='hover:border-1 bg-zinc-200 font-semibold p-4 rounded-full cursor-pointer'>Trip Thrill</button>
              <button className='hover:border-1 bg-zinc-200 font-semibold p-4 rounded-full cursor-pointer'>Trip Thrill Plus</button>
              <button className='hover:border-1 bg-zinc-200 font-semibold p-4 rounded-full cursor-pointer'>Trip Thrill Homes</button>
              <button className='hover:border-1 bg-zinc-200 font-semibold p-4 rounded-full cursor-pointer'>Trips</button>
            </div>
          </div>
          <section className='flex mt-10 max-w ml-42 mr-42'>
            <div
              className='flex gap-6 py-2'
              style={{
                overflowX: 'auto',
                scrollbarWidth: 'thin',
                scrollbarColor: '#f97316 #e5e7eb',
                maxWidth: '100%',
              }}
            >
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
            </div>
          </section>
          <section className='flex mt-10 max-w ml-42 mr-42'>
            <div
              className='flex gap-6 py-2'
              style={{
                overflowX: 'auto',
                scrollbarWidth: 'thin',
                scrollbarColor: '#f97316 #e5e7eb',
                maxWidth: '100%',
              }}
            >
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
              <div className='w-xs min-w-[300px] h-80 bg-zinc-900 rounded-4xl '></div>
            </div> 
          </section>
        </section>
        <div className='max-w-xl m-auto flex justify-center items-center py-10 mt-5'>
          <button className='border-1 p-4 bg-zinc-200 rounded-full font-semibold'>Explore Trip Thrill </button>
        </div>
        <section className='max-w mx-40 m-auto h-100 mt-10'>
          <div className='w-full bg-zinc-900 h-full rounded-4xl'>
            
          </div>
        </section>
          <footer className="bg-zinc-900 text-white mt-16 py-10 px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
              <div>
                <p className="font-bold text-3xl text-orange-500 mb-2">Trip Thrill</p>
                <p className="text-gray-300 mb-4 max-w-xs">
                  Explore, discover, and experience the best destinations with Trip Thrill. Your adventure starts here.
                </p>
                <div className="flex gap-4 mt-2">
                  <a href="#" className="hover:text-orange-500 transition">Instagram</a>
                  <a href="#" className="hover:text-orange-500 transition">Facebook</a>
                  <a href="#" className="hover:text-orange-500 transition">Twitter</a>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-orange-500 mb-2">Quick Links</h3>
                <a href="#" className="hover:text-orange-500 transition">Destinations</a>
                <a href="#" className="hover:text-orange-500 transition">Trips</a>
                <a href="#" className="hover:text-orange-500 transition">Selections</a>
                <a href="#" className="hover:text-orange-500 transition">Sign Up</a>
                <a href="#" className="hover:text-orange-500 transition">Login</a>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-orange-500 mb-2">Contact</h3>
                <p className="text-gray-300">Email: support@tripthrill.com</p>
                <p className="text-gray-300">Phone: +91 12345 67890</p>
                <p className="text-gray-300">Address: 123, Adventure Lane, India</p>
              </div>
            </div>
            <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Trip Thrill. All rights reserved. | <span className="text-orange-500 font-bold">CLA</span>
            </div>
          </footer>
    </div>
  );
};

export default App;