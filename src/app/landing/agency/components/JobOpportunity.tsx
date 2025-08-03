import Image from "next/image";
import headerimage from "@/assets/images/_Heading.png";
const JobOpportunityComponent = () => {
  const features = [
    "Access to millions of job seekers",
    "Only pay for the candidates you want to contact",
    "Post unlimited jobs for free—all from one place",
    "Premium job placement on SimplyHired, Indeed, & over 100 job sites",
    "Hiring solutions & pricing that works with seasonal hiring changes",
  ];
  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row items-center mt-24">
      <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
        <div className="absolute inset-0 bg-gray-200 opacity-50 rounded-lg"></div>
        <Image
          alt="slide-image"
          src={headerimage}
          className="h-[20%] object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Get the job that’s right for you
        </h2>
        <p className="text-gray-600 mb-6">
          Search millions of jobs and get the inside scoop on companies with
          employee reviews, personalized salary tools, and more.
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 mr-2">✔</span>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobOpportunityComponent;
