const FeaturedJobs = () => {
  const jobs = [
    {
      company: "Pielam Nammgor D",
      role: "Project Manager",
      type: "Full-time",
      location: "Remote",
      salary: "$96,900 - $110,000/year",
      daysLeft: "22 days left to apply",
      rating: 4.5,
    },
    {
      company: "CealoF Gloat Cadgoan O",
      role: "Senior UI/UX Designer",
      type: "Temporary",
      location: "Remote",
      salary: "$96,900 - $110,000/year",
      daysLeft: "22 days left to apply",
      rating: 4.5,
      highlighted: true,
    },
    {
      company: "Cealoa Garia Retdag",
      role: "Content DevOps Engineer",
      type: "Contract",
      location: "Remote",
      salary: "$96,900 - $110,000/year",
      daysLeft: "22 days left to apply",
      rating: 4.5,
    },
    {
      company: "Fholan Roangor D",
      role: "Python Programmer",
      type: "Temporary",
      location: "Remote",
      salary: "$96,900 - $110,000/year",
      daysLeft: "22 days left to apply",
      rating: 4.5,
    },
    {
      company: "Conall Iloate Nartaoang O",
      role: "Growth Marketing",
      type: "Part-time",
      location: "Remote",
      salary: "$96,900 - $110,000/year",
      daysLeft: "22 days left to apply",
      rating: 4.5,
    },
    {
      company: "Conall Iloate Nartaoang O",
      role: "Social Media Marketing ",
      type: "Part-time",
      location: "Remote",
      salary: "$96,900 - $110,000/year",
      daysLeft: "22 days left to apply",
      rating: 4.5,
    },
  ];
  const categories = [
    "OnB θαμφο",
    "Project Manager",
    "Sales & Marketing",
    "Accounting",
    "Other",
  ];

  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="my-4 text-4xl font-medium capitalize text-default-950">
              Featured Jobs
            </h2>
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Find the right career opportunity for you
            </span>
          </div>
        </div>
        <div className="flex space-x-2 mt-2 mb-5 sm:mt-0 justify-center">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`px-4 py-2 text-sm rounded-full hover:bg-blue-700 hover:text-white bg-gray-200 text-gray-800 `}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-sm border hover:border-blue-500 border-gray-200 cursor-pointer  `}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                <div>
                  <p className="text-gray-600 text-sm">{job.company}</p>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <div className="flex space-x-2 text-sm text-gray-500">
                    <span>{job.type}</span>
                    <span>{job.location}</span>
                    <span>2 days ago</span>
                  </div>
                </div>
                {job.highlighted && (
                  <span className="ml-auto text-red-500">❤️</span>
                )}
              </div>
              <div className="flex justify-between items-center mt-2">
                <div className="flex space-x-1 text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{job.daysLeft}</span>
              </div>
              <p className="text-sm mt-2">💰 {job.salary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
