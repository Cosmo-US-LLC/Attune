function PathToSupport() {
    return (
      <div className="bg-gray-50 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Your Path to Support</h1>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-teal-100 rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                src="/path-to-support-1.png"
                alt="Seeking Connection"
                className="rounded-t-lg w-full"
              />
            </div>
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Seeking Connection?</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="mt-1 text-blue-500">&#9679;</span>
                <p className="ml-2">
                  <strong>Loneliness:</strong> People craving connection and a listening ear.
                </p>
              </div>
              <div className="flex items-start">
                <span className="mt-1 text-blue-500">&#9679;</span>
                <p className="ml-2">
                  <strong>Emotional Support:</strong> Those feeling isolated and desiring a safe
                  space to share their thoughts.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-purple-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-purple-600">
                Get Started
              </button>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="bg-blue-100 rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                src="/path-to-support-2.png"
                alt="Facing Mental Barriers"
                className="rounded-t-lg w-full"
              />
            </div>
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Facing Mental Barriers?</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="mt-1 text-blue-500">&#9679;</span>
                <p className="ml-2">
                  <strong>Mental Health Barriers:</strong> Individuals facing mental health
                  challenges and unable to seek traditional clinical care due to stigma, cost, or
                  rigidity.
                </p>
              </div>
              <div className="flex items-start">
                <span className="mt-1 text-blue-500">&#9679;</span>
                <p className="ml-2">
                  <strong>Underserved Groups:</strong> Young adults seeking independence,
                  caregivers managing stress, and more.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-purple-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-purple-600">
                Get Started
              </button>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="bg-red-100 rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                src="/path-to-support-3.png"
                alt="Looking for Extra Support"
                className="rounded-t-lg w-full"
              />
            </div>
            <h2 className="text-xl font-bold text-center text-gray-800 mb-4">Looking for Extra Support?</h2>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <span className="mt-1 text-blue-500">&#9679;</span>
                <p className="ml-2">
                  <strong>Augmenting Therapy:</strong> People already in therapy or clinical care
                  who want additional informal support.
                </p>
              </div>
              <div className="flex items-start">
                <span className="mt-1 text-blue-500">&#9679;</span>
                <p className="ml-2">
                  <strong>Why You Come to Us:</strong> To combat loneliness and isolation, manage
                  stress, anxiety, or life transitions, and find understanding without judgment.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <button className="bg-purple-500 text-white py-2 px-6 rounded-full font-semibold hover:bg-purple-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default PathToSupport;
  