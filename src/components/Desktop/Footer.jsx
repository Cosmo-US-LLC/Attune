function Footer() {
  return (
    <footer className="bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left Section */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-bold">Talk to a professional</h2>
            <p className="text-gray-600">
              Looking for someone to listen? Our trained Listeners are here to
              provide non-judgmental, compassionate support whenever you need
              it. Whether you're managing stress, navigating life transitions,
              or simply craving a connection, we're here to help.
            </p>
          </div>

          {/* Middle Section - Links */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Who We Serve</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="hover:text-gray-900">What We Do</li>
                <li className="hover:text-gray-900">Our Approach</li>
                <li className="hover:text-gray-900">Resources</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Our Approach</h3>
              <ul className="space-y-1 text-gray-600">
                <li className="hover:text-gray-900">What We Do</li>
                <li className="hover:text-gray-900">Resources</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src=" "
              alt="Mental Wellness"
              className="w-24 h-24 mb-4"
            />
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <img
                  src=" "
                  alt="Facebook"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <img
                  src=" "
                  alt="Instagram"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <img
                  src=""
                  alt="LinkedIn"
                  className="w-8 h-8 rounded-full"
                />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-400">
                <img
                  src=" "
                  alt="YouTube"
                  className="w-8 h-8 rounded-full"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-300 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>&copy; 2024 Attune. All Rights Reserved</p>
            <p className="text-center mt-4 md:mt-0 md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
