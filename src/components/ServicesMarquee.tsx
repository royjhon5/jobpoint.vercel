import Image from "next/image";
import logo1 from "@/assets/images/logo1.png";
import logo2 from "@/assets/images/logo2.png";
import logo3 from "@/assets/images/logo3.png";
import logo4 from "@/assets/images/logo4.png";
import logo5 from "@/assets/images/logo5.png";
import logo6 from "@/assets/images/logo6.png";
import logo7 from "@/assets/images/logo7.png";
import logo8 from "@/assets/images/logo8.png";
import logo9 from "@/assets/images/logo9.png";
const ServicesMarquee = () => {
  return (
    <div className="relative m-auto flex gap-1 overflow-hidden py-3 ">
      <div className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28">
        <div className="py-2">
          <Image
            src={logo1}
            alt="logo"
            height={100}
            width={200}
            className="h-12 dark:flex"
          />
          {/* <h2 className="text-4xl font-medium text-default-950">
            UI-UX Experience
          </h2> */}
        </div>
        <div className="py-2">
          <Image
            src={logo2}
            alt="logo"
            height={140}
            width={200}
            className=" h-12 dark:flex"
          />
        </div>
        <div className="py-2">
          <Image
            src={logo3}
            alt="logo"
            height={140}
            width={200}
            className=" h-12 dark:flex"
          />
        </div>
        <div className="py-2">
          <Image
            src={logo4}
            alt="logo"
            height={140}
            width={200}
            className=" h-12 dark:flex"
          />
        </div>
        <div className="py-2">
          <Image
            src={logo5}
            alt="logo"
            height={140}
            width={200}
            className=" h-12 dark:flex"
          />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28"
      >
        <div className="py-2">
          <Image
            src={logo6}
            alt="logo"
            height={140}
            width={200}
            className=" h-12 dark:flex"
          />
        </div>
        <div className="py-2">
          <Image
            src={logo7}
            alt="logo"
            height={140}
            width={200}
            className=" h-12 dark:flex"
          />
        </div>
        <div className="py-2">
          <Image
            src={logo8}
            alt="logo"
            height={140}
            width={80}
            className=" h-12 dark:flex"
          />
        </div>
        <div className="py-2">
          <Image
            src={logo9}
            alt="logo"
            height={140}
            width={200}
            className=" h-12 dark:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesMarquee;
