const experts = [
  {
    id: 1,
    name: "Jessica Williams",
    role: "Certified Mental Health Advisor",
    description:
      "Jessica is a compassionate listener with over 5 years of experience helping people through life's ups and downs.",
    image: "/jessica-williams.png", // Replace with actual image path
    borderColor: "border-yellow-400",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "Life Coach and Stress Management Specialist",
    description:
      "With a background in coaching and mental wellness, Michael specializes in helping individuals cope with stress, anxiety, and personal transitions.",
    image: "/michael-brown.png", // Replace with actual image path
    borderColor: "border-yellow-400",
  },
  {
    id: 3,
    name: "Olivia Davis",
    role: "Certified Wellness Advisor",
    description:
      "Olivia is passionate about supporting emotional well-being. She combines mindfulness techniques with empathetic listening to help people.",
    image: "/olivia-davis.png", // Replace with actual image path
    borderColor: "border-yellow-400",
  },
  {
    id: 4,
    name: "Daniel Thompson",
    role: "Trauma-Informed Listener",
    description:
      "Daniel focuses on providing safe, empathetic support to individuals navigating through trauma or personal struggles.",
    image: "/daniel-thompson.png", // Replace with actual image path
    borderColor: "border-yellow-400",
  },
];

function MeetTheExperts() {
  return (
    <div className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <h1 className="text-3xl font-bold text-center mb-6">Meet a Few Experts</h1>

        {/* Expert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white border rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <div
                className={`w-28 h-28 rounded-full overflow-hidden border-4 ${expert.borderColor} mb-4`}
              >
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{expert.name}</h3>
              <p className="text-sm font-medium text-gray-600">{expert.role}</p>
              <p className="mt-2 text-gray-600 text-sm">{expert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetTheExperts;
