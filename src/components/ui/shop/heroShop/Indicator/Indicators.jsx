import React from 'react'

function Indicators({ slideLength, currentSlide }) {
  return (
    <div className="  flex items-center transition-all duration-500 justify-center mt-4  left-0 right-0 w-full text-white">
      {Array.from({ length: slideLength }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 rounded-full mx-1 ${
            index === currentSlide
              ? "bg-black border duration-75  transition-all"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default Indicators;