import Image from "next/image";

const ServicesMarquee = () => {
  const logo1 = "/assets/images/logo1.png";
  const logo2 = "/assets/images/logo2.png";
  const logo3 = "/assets/images/logo3.png";
  const logo4 = "/assets/images/logo4.png";
  const logo5 = "/assets/images/logo5.png";
  const logo6 = "/assets/images/logo6.png";
  const logo7 = "/assets/images/logo7.png";
  const logo8 = "/assets/images/logo8.png";
  const logo9 = "/assets/images/logo9.png";
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
