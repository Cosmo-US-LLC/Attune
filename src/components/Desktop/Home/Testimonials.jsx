import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Jake, 24",
    image: " ", // Update with actual image path
    text: "Starting my first job was overwhelming. Having someone to talk to who really understood what I was going through made all the difference.",
    bgColor: "bg-lime-200",
  },
  {
    id: 2,
    name: "Jessica, 45",
    image: " ", // Update with actual image path
    text: "As a caregiver, I often felt overwhelmed. Talking to my Listener gave me the tools to manage my stress and focus on what truly matters.",
    bgColor: "bg-pink-200",
  },
  {
    id: 3,
    name: "John, 72",
    image: " ", // Update with actual image path
    text: "Losing my partner was the hardest thing I've ever faced. Talking to a Listener allowed me to process my grief and feel less alone.",
    bgColor: "bg-red-200",
  },
  {
    id: 4,
    name: "Sara, 30",
    image: " ", // Update with actual image path
    text: "Joining this community gave me the confidence to speak about my struggles without judgment.",
    bgColor: "bg-yellow-200",
  },
  {
    id: 5,
    name: "Michael, 50",
    image: " ", // Update with actual image path
    text: "This platform has been a lifesaver, allowing me to process my challenges.",
    bgColor: "bg-teal-200",
  },
  {
    id: 6,
    name: "Emily, 29",
    image: " ", // Update with actual image path
    text: "Having a Listener gave me the strength to overcome my fears.",
    bgColor: "bg-blue-200",
  },
];

function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerSlide = 3;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(testimonials.length / itemsPerSlide) - 1
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Math.ceil(testimonials.length / itemsPerSlide) - 1
        ? 0
        : prevIndex + 1
    );
  };

  const startIndex = currentIndex * itemsPerSlide;
  const currentCards = testimonials.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className="bg-gray-50 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Testimonials</h1>
      <div className="relative max-w-7xl mx-auto">
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentCards.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`rounded-lg shadow-lg p-6 ${testimonial.bgColor}`}
            >
              <div className="flex flex-col items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4 border-4 border-white"
                />
                <h2 className="text-lg font-semibold text-gray-900">
                  {testimonial.name}
                </h2>
                <p className="mt-4 text-gray-700 text-center">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 -translate-y-1/2 left-0 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 focus:outline-none"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 -translate-y-1/2 right-0 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 focus:outline-none"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default TestimonialsCarousel;
