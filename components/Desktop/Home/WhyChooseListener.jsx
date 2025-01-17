function WhyChooseListener() {
    return (
      <div className="bg-white py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Why Choose a Listener?</h1>
        <div className="overflow-x-auto max-w-5xl mx-auto">
          <table className="w-full border-collapse">
            {/* Table Head */}
            <thead>
              <tr>
                <th className="border-b-2 border-gray-300 bg-white text-left px-4 py-3 text-gray-800">Feature</th>
                <th className="border-b-2 border-gray-300 bg-lime-200 text-center px-4 py-3 font-bold text-gray-900">Attune</th>
                <th className="border-b-2 border-gray-300 bg-white text-center px-4 py-3 text-gray-800">Traditional Therapy</th>
              </tr>
            </thead>
  
            {/* Table Body */}
            <tbody>
              {/* Row 1 */}
              <tr className="border-b border-gray-300">
                <td className="px-4 py-4 text-gray-800">Affordability</td>
                <td className="bg-lime-100 text-center px-4 py-4">
                  <span className="text-purple-600 font-bold">&#10004;</span> More affordable
                </td>
                <td className="text-center px-4 py-4">
                  <span className="text-blue-600 font-bold">!</span> Expensive
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="border-b border-gray-300">
                <td className="px-4 py-4 text-gray-800">Accessibility</td>
                <td className="bg-lime-100 text-center px-4 py-4">
                  <span className="text-purple-600 font-bold">&#10004;</span> Anytime, anywhere
                </td>
                <td className="text-center px-4 py-4">
                  <span className="text-orange-600 font-bold">&#10008;</span> Requires appointments
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="border-b border-gray-300">
                <td className="px-4 py-4 text-gray-800">Support for Everyday Issues</td>
                <td className="bg-lime-100 text-center px-4 py-4">
                  <span className="text-purple-600 font-bold">&#10004;</span> Stress, loneliness
                </td>
                <td className="text-center px-4 py-4">
                  <span className="text-blue-600 font-bold">!</span> Diagnosis-focused
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="border-b border-gray-300">
                <td className="px-4 py-4 text-gray-800">Approachability</td>
                <td className="bg-lime-100 text-center px-4 py-4">
                  <span className="text-purple-600 font-bold">&#10004;</span> No clinical intimidation
                </td>
                <td className="text-center px-4 py-4">
                  <span className="text-orange-600 font-bold">&#10008;</span> Intimidating
                </td>
              </tr>
              {/* Row 5 */}
              <tr>
                <td className="px-4 py-4 text-gray-800">Judgment-Free</td>
                <td className="bg-lime-100 text-center px-4 py-4">
                  <span className="text-purple-600 font-bold">&#10004;</span> Safe spaces
                </td>
                <td className="text-center px-4 py-4">
                  <span className="text-orange-600 font-bold">&#10008;</span> Less personal setting
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  
        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-purple-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700">
            Get Started
          </button>
        </div>
      </div>
    );
  }
  
  export default WhyChooseListener;
  