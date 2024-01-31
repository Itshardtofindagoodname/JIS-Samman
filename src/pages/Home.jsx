import React from 'react';
import Nav from '../components/Nav';

function Home() {
  return (
    <div>
    <div className="block">
          <div className="absolute grid grid-cols-2 grid-rows-2 gap-12 lg:gap-8 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className='h-32 w-32 lg:h-80 lg:w-80 bg-gradient-to-r from-amber-500 to-pink-500 rounded-full'/>
                <div className='h-32 w-32 lg:h-80 lg:w-80 bg-gradient-to-r from-teal-200 to-teal-500 rounded-3xl rotate-12'/>
                <div className='h-32 w-32 lg:h-80 lg:w-80 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-3xl -rotate-6'/>
                <div className='h-32 w-32 lg:h-80 lg:w-80 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full'/>
            </div>
      </div>
      <main className="relative h-screen overflow-hidden font-mono bg-white bg-opacity-20 backdrop-blur-lg">
        <header className="z-30 flex items-center w-full h-24 sm:h-32">
          <div className="container flex items-center justify-between px-6 mx-auto">
            <div className="flex items-center text-3xl font-black text-gray-800">
              <span className="mt-1 ml-3 text-md">DevSoc</span>
            </div>
            <div className="flex items-center">
              <nav className="items-center text-lg text-gray-800 uppercase font-sen flex">
              </nav>
            </div>
          </div>
        </header>
        <div className=" mt-40 relative z-20 flex items-center">
          <div className="container relative flex flex-col items-center justify-between px-6 py-4 mx-auto">
            <h2 className="max-w-3xl py-2 mx-auto text-5xl font-bold text-center text-gray-800 md:text-6xl">
              The Only Space where Architects help you being Artists
            </h2>
            <div className="flex items-center justify-center mt-4">
            <a
      className="group relative px-4 py-2 font-bold text-slate-900 transition-colors duration-[400ms] hover:text-gray-200 hover:bg-indigo-300 hover:delay-300"
      href='https://tally.so/r/w5x7pd'
    >
      <span>Join In</span>
      <span className="absolute left-0 top-0 h-[10px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />
      <span className="absolute right-0 top-0 h-0 w-[10px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />
      <span className="absolute bottom-0 right-0 h-[10px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />
      <span className="absolute bottom-0 left-0 h-0 w-[10px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
