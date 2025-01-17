function HowItWorks() {
    return (
      <div className="bg-lime-100 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">How it works</h1>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="bg-pink-200 text-pink-800 font-bold w-10 h-10 flex items-center justify-center rounded-full">
                01
              </span>
              <img
                src=" "
                alt="Sign Up"
                className="h-10 w-10 ml-4"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Sign Up</h2>
            <p className="text-gray-600">
              Create your profile in just a few clicks. It’s quick, simple, and
              all about you.
            </p>
          </div>
  
          {/* Step 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="bg-pink-200 text-pink-800 font-bold w-10 h-10 flex items-center justify-center rounded-full">
                02
              </span>
              <img
                src=" "
                alt="Find Your Listener"
                className="h-10 w-10 ml-4"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Find your Listener
            </h2>
            <p className="text-gray-600">
              Explore a variety of compassionate, judgment-free listeners. Choose
              someone who truly gets you.
            </p>
          </div>
  
          {/* Step 3 */}
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center items-center mb-4">
              <span className="bg-pink-200 text-pink-800 font-bold w-10 h-10 flex items-center justify-center rounded-full">
                03
              </span>
              <img
                src=" "
                alt="Connect"
                className="h-10 w-10 ml-4"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Connect</h2>
            <p className="text-gray-600">
              Open up through voice or video, anytime and anywhere. It’s your safe
              space to share.
            </p>
          </div>
        </div>
  
        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700">
            Sign up now
          </button>
        </div>
      </div>
    );
  }
  
  export default HowItWorks;
  