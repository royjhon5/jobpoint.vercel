const BrowseByCategory = () => {
  const categories = [
    { name: "Human Resource", jobs: 120 },
    { name: "Project Manager", jobs: 120, highlighted: true },
    { name: "Delivery Driver", jobs: 120 },
    { name: "Accounting", jobs: 120 },
    { name: "Customer Service", jobs: 120 },
    { name: "Data Science", jobs: 120 },
    { name: "Engineering", jobs: 120 },
    { name: "IT & Networking", jobs: 120 },
    { name: "Sales & Marketing", jobs: 120 },
    { name: "Writing", jobs: 120 },
  ];

  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="my-4 text-4xl font-medium capitalize text-default-950">
              Browse by category
            </h2>
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Recruitment Made Easy in 100 seconds
            </span>
          </div>
          <div className="hover:text-red-500 cursor-pointer">
            All Categories
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md hover:bg-blue-700 hover:text-white bg-white text-gray-800`}
            >
              <h3 className="text-lg font-semibold">{category.name}</h3>
              <p className="text-sm">{category.jobs} Jobs available</p>
              <a
                href="#"
                className="text-red-500 text-sm font-medium block mt-2"
              >
                Explore Jobs →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
