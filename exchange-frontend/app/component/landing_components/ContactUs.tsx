export const ContactUs = () => {
    return (
      <section className=" text-white py-16 px-6" id="contactus">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">Get It On The Crypto Action</h2>
            <p className="text-gray-300 mt-2">
              Provide easy access to customer support through chatbots or live chat features.
            </p>
          </div>
  
          {/* Right Form */}
          <div className=" p-6 rounded-lg w-full max-w-md">
            <label className="block text-gray-400">Email Address</label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full bg-gray-800 text-white p-3 rounded mt-2"
            />
  
            <label className="block text-gray-400 mt-4">Your Topic</label>
            <input
              type="text"
              placeholder="Enter Your Topic"
              className="w-full bg-gray-800 text-white p-3 rounded mt-2"
            />
  
            <button className="bg-green-400 text-black font-bold py-3 px-6 rounded-full w-full mt-6 hover:bg-green-300">
              Send Message
            </button>
          </div>
        </div>
      </section>
    );
};
  
  