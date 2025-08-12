import React from 'react';

const navItems = [
  'DESTINATION',
  'TRIP THRILL',
  'TRIP THRILL PLUS',
  'TRIP THRILL HOMES',
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
    </div>
  );
};

export default App;