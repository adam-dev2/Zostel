import React from 'react';

const navItems = [
  'DESTINATION',
  'TRIP THRILL',
  'TRIP THRILL PLUS','TRIP THRILL HOMES',
  'TRIPS',
  'SELECTIONS',
];

const images = {
  hero: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
  
  whatsNew: [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
  ],
  
  destinations: [
    "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1568849676085-51415703900f?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop", 
  ],
  dest: [
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1586500036706-41963de4a5b2?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop",
  ],
  
  explore: [
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=800&h=600&fit=crop",
  ],

  disc: [
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1586500036706-41963de4a5b2?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=800&h=600&fit=crop",
  ],
  
  discover: [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop", 
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop",
  ]
};

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow border-b-1 border-gray-400">
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

      <section
        className="relative flex flex-col items-center justify-center h-[60vh]"
        style={{
          backgroundImage: `url(${images.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
            <input type="text" placeholder="eg: Jaipur, Taj Mahal etc.." className="border border-gray-300 rounded-xl px-4 py-2 flex-1 min-w-[300px] outline-none focus:border-orange-500 transition" />
            <input type="date" className="border border-gray-300 rounded-xl px-4 py-2 flex-1 min-w-[140px] outline-none focus:border-orange-500 transition" />
            <input type="date" className="border border-gray-300 rounded-xl px-4 py-2 flex-1 min-w-[140px] outline-none focus:border-orange-500 transition" />
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
      <section className="flex mt-10 ml-42 mr-42">
        <div className="flex gap-6 py-2 overflow-x-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#f97316 #e5e7eb" }}>
          {images.whatsNew.map((url, i) => (
            <div key={i} className="w-xs min-w-[300px] h-100 rounded-4xl" style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          ))}
        </div>
      </section>
      

      <h1 className='text-orange-500 font-bold text-2xl ml-42 mt-10'>Destinations</h1>
      <section className="flex mt-10 ml-42 mr-42">
        <div className="flex gap-6 py-2 overflow-x-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#f97316 #e5e7eb" }}>
          {images.destinations.map((url, i) => (
            <div key={i} className="w-xs min-w-[200px] h-80 rounded-full" style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          ))}
        </div>
      </section>

      <section className="flex mt-10 ml-42 mr-42">
        <div className="flex gap-6 py-2 overflow-x-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#f97316 #e5e7eb" }}>
          {images.dest.map((url, i) => (
            <div key={i} className="w-xs min-w-[200px] h-80 rounded-full" style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          ))}
        </div>
      </section>

      <h1 className='text-orange-500 font-bold text-4xl ml-42 mt-10'>Explore with Trip Thrills</h1>
      <section className="flex mt-10 ml-42 mr-42">
        <div className="flex gap-6 py-2 overflow-x-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#f97316 #e5e7eb" }}>
          {images.explore.map((url, i) => (
            <div key={i} className="w-xs min-w-[300px] h-100 rounded-4xl" style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          ))}
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
          <section>
            <section className="flex mt-10 ml-42 mr-42">
              <div className="flex gap-6 py-2 overflow-x-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#f97316 #e5e7eb" }}>
                {images.discover.map((url, i) => (
                  <div key={i} className="w-xs min-w-[300px] h-80 rounded-4xl" style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                ))}
              </div>
            </section>
          </section>
          <section>
            <section className="flex mt-10 ml-42 mr-42">
              <div className="flex gap-6 py-2 overflow-x-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#f97316 #e5e7eb" }}>
                {images.disc.map((url, i) => (
                  <div key={i} className="w-xs min-w-[300px] h-80 rounded-4xl" style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                ))}
              </div>
            </section>
          </section>
        </section>
        <div className='max-w-xl m-auto flex justify-center items-center py-10 mt-5'>
          <button className='border-1 p-4 bg-zinc-200 rounded-full font-semibold'>Explore Trip Thrill </button>
        </div>

        <section className='max-w mx-40 m-auto h-100 mt-10'>
          <div className='w-full bg-zinc-200 h-full rounded-4xl shadow-2xl p-12'>
            <h1 className='text-zinc-900 font-bold text-7xl max-w-3xl text-wrap'>There's Wanderlust in Our Newsletters!</h1>
            <p className='mt-6 max-w-xl text-wrap text-xl font-light'>Be the FIRST to Catch the Vibes! Sign up for inspiring travel tales, insider tips, and irresistible trip plans-straight from Trip Thrills to your inbox.</p>
            <div className='flex mt-8 max-w-xs justify-between'>
              <input
                className="border border-gray-300 focus:border-orange-500 px-4 py-2 rounded-xl outline-none transition"
                type="email"
                placeholder="Enter email"
              />
              <button className='bg-orange-500 px-4 py-2 rounded-full cursor-pointer text-white hover:bg-orange-600 shadow-2xl'>Subscribe</button>
            </div>
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