import ServicesMarquee from "@/components/ServicesMarquee";
import type { Metadata } from "next";
import TopNavBar from "@/components/TopNavBar";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Home from "./components/Home";
import Services2 from "./components/Services2";
import BrowseByCategory from "./components/BrowseByCategory";
import FeaturedJobs from "./components/FeaturedJobs";
import JobsByLocation from "./components/JobsByLocation";
import JobOpportunityComponent from "./components/JobOpportunity";
import TopEmployers from "./components/TopEmployersComponent";

export const metadata: Metadata = {
  title: "Agency",
};

const Agency = () => {
  return (
    <>
      <TopNavBar
        menuItems={[
          "Demos",
          "Find Jobs",
          "Employers",
          "Candidates",
          "Blog",
          "Pages",
        ]}
        position="sticky"
        hasDownloadButton
      />
      <Home />
      <section className="lg:pb-10 bg-gradient-to-r from-red-600 to-blue-700 flex flex-col items-center justify-center">
        <div className="text-center pt-4">
          <p className="text-white text-xl">
            Over 20,000 recruiters use JobPoint to modernize their hiring
          </p>
        </div>
        <ServicesMarquee />
      </section>
      <BrowseByCategory />
      <FeaturedJobs />
      <JobsByLocation />
      <JobOpportunityComponent />
      <TopEmployers />
    </>
  );
};

export default Agency;
