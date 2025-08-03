import React from "react";

const TopEmployers: React.FC = () => {
  const employers = [
    { name: "Samsung", location: "Lumbia CagayanDe Oro", rating: 4.5 },
    {
      name: "Utilitech",
      location: "C M Recto, CDO",
      rating: 4.5,
      highlighted: true,
    },
    { name: "Samsung", location: "C M Recto, CDO", rating: 4.5 },
    { name: "Samsung", location: "C M Recto, CDO", rating: 4.5 },
    { name: "Ridgid", location: "C M Recto, CDO", rating: 4.5 },
    { name: "Task Force", location: "C M Recto, CDO", rating: 4.5 },
    { name: "Black & Decker", location: "C M Recto, CDO", rating: 4.5 },
    { name: "Amanda", location: "C M Recto, CDO", rating: 4.5 },
    { name: "Electrolux", location: "C M Recto, CDO", rating: 4.5 },
    { name: "Whirlpool", location: "C M Recto, CDO", rating: 4.5 },
    { name: "Bosch", location: "C M Recto, CDO", rating: 4.5 },
    { name: "Samsung", location: "C M Recto, CDO", rating: 4.5 },
  ];

  return (
    <div className="container mx-auto p-6 mt-24 mb-24">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Top Employers</h2>
          <p className="text-gray-500 text-sm">
            Showing companies based on reviews and recent job openings
          </p>
        </div>
        <a href="#" className="text-blue-600 text-sm font-medium">
          All Employers →
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {employers.map((employer, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-sm border hover:border-blue-500 hover:ring-2 hover:ring-blue-200 border-gray-200 cursor-pointer`}
          >
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <h3 className="text-lg font-semibold">{employer.name}</h3>
                <p className="text-sm text-gray-500">{employer.location}</p>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <div className="flex space-x-1 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-1">
                {employer.rating}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopEmployers;
