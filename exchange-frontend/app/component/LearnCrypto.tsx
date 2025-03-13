export const LearnCrypto = () => {
    return (
      <section className="text-white py-16 text-center" id="learncrypto">
        {/* Top Button */}
        <button className="px-6 py-2 bg-green-400 text-black font-bold rounded-full hover:bg-green-300 mb-6">
          Learn Crypto
        </button>
  
        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold">Let’s Know How Crypto Works</h2>
        <p className="text-gray-300 max-w-xl mx-auto mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
  
        {/* Icons Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 max-w-4xl mx-auto">
          {[
            { name: "Learn Crypto", icon: "💰" },
            { name: "Learn Earn", icon: "📈" },
            { name: "How To Trade", icon: "📊" },
            { name: "Build Portfolio", icon: "🗂" },
          ].map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 flex flex-col items-center">
              <span className="text-3xl">{item.icon}</span>
              <span className="text-green-400 font-bold mt-2">{item.name}</span>
            </div>
          ))}
        </div>
  
        {/* Learning Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
              <h3 className="text-lg font-bold">Let’s Learn How Crypto Currency Works?</h3>
              <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit - Time data</p>
              <button className="mt-4 px-6 py-2 bg-green-400 text-black font-bold rounded-full hover:bg-green-300">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>
    );
};
  