const features = [
  {
    id: 1,
    title: "Compassionate Listeners",
    description:
      "Our trained, non-judgmental Listeners provide a safe space for you to share your thoughts, feelings, and experiences. You always feel heard and supported.",
    icon: "💛", // Replace with an actual image or SVG if needed
  },
  {
    id: 2,
    title: "Accessible Anytime, Anywhere",
    description:
      "Whether you’re at home or on the go, our platform is accessible 24/7, giving you the flexibility to connect whenever you need it.",
    icon: "📱", // Replace with an actual image or SVG if needed
  },
  {
    id: 3,
    title: "Evidence-Based Approach",
    description:
      "Our platform is grounded in real, measurable outcomes. Our model integrates research and data to provide effective mental health support.",
    icon: "📊", // Replace with an actual image or SVG if needed
  },
  {
    id: 4,
    title: "No Stigma, Just Support",
    description:
      "We are committed to breaking down the barriers of mental health stigma by creating a welcoming, judgment-free space for all.",
    icon: "🫂", // Replace with an actual image or SVG if needed
  },
  {
    id: 5,
    title: "Privacy and Confidentiality",
    description:
      "Your privacy and data are our top priority. All conversations are confidential and adhere to the highest standards of data security.",
    icon: "🔒", // Replace with an actual image or SVG if needed
  },
];

function WhatMakesUsDifferent() {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-center mb-4">
          What Makes Us Different?
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          At Attune, we understand that mental wellness is personal, and
          everyone’s journey is unique. Here’s why our platform is the right
          place for you.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex justify-center mt-12">
          <button className="bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700">
            Connect Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default WhatMakesUsDifferent;
