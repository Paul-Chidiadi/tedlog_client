import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-fit px-8 py-4 md:px-20 md:py-5 mt-20">
        <div className="relative z-10 bg-[url('/hero-1.jpg')] bg-no-repeat bg-cover bg-center flex justify-start items-center rounded-lg md:rounded-3xl w-full h-svh px-2 py-4 md:px-5 md:py-5">
          <div className="absolute -z-10 inset-0 bg-gradient-to-l from-madeinblacc to-warmwhite opacity-75 rounded-lg md:rounded-3xl"></div>

          <div className="w-full flex flex-col gap-5 lg:w-3/5">
            <h1 className="w-full font-poppins font-semibold text-3xl md:text-6xl text-madeinblacc">
              Fast, Reliable Logistics at Your Fingertips
            </h1>
            <p className="w-full font-poppins font-normal text-base text-burnt">
              Track, manage, and streamline your deliveries with ease.
              Experience seamless logistics solutions tailored for your
              business.
            </p>
            <div className="w-full flex flex-col md:flex-row items-center justify-start gap-3">
              <input
                className="w-full md:w-3/5 h-11 md:h-16 px-3 rounded-md outline-none border border-madeinblacc font-poppins font-normal text-madeinblacc text-sm md:text-base"
                placeholder="input tracking number"
              />
              <a
                href="#"
                className="w-full md:w-2/5 h-11 md:h-16 flex items-center justify-center px-6 py-3 rounded-md border border-madeinblacc font-poppins font-normal bg-madeinblacc text-white text-sm md:text-base cursor-pointer hover:bg-burnt hover:border-burnt"
              >
                Track Dispatch
              </a>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-10 mt-20">
          <h2 className="w-full md:w-4/6 lg:w-3/6 font-poppins font-semibold text-2xl md:text-4xl text-madeinblacc">
            Everything you need for the best Logistics experience
          </h2>
          <div className="flex flex-col md:flex-row gap-5 w-full justify-evenly items-center">
            <div className="p-5 lg:p-10 flex flex-col justify-start items-start gap-4 border border-gray-300 rounded-md">
              <Image
                src="/icon-1.png"
                width={32}
                height={32}
                quality={100}
                alt="icon"
              />
              <p className="w-full font-poppins font-normal text-base text-madeinblacc">
                Doorstep delivery to any city in Nigeria. Pickups are available
                in Lagos, Abuja & Ibadan.
              </p>
            </div>
            <div className="p-5 lg:p-10 flex flex-col justify-start items-start gap-4 border border-gray-300 rounded-md">
              <Image
                src="/icon-2.png"
                width={32}
                height={32}
                quality={100}
                alt="icon"
              />
              <p className="w-full font-poppins font-normal text-base text-madeinblacc">
                Doorstep delivery to any city in Nigeria. Pickups are available
                in Lagos, Abuja & Ibadan.
              </p>
            </div>
            <div className="p-5 lg:p-10 flex flex-col justify-start items-start gap-4 border border-gray-300 rounded-md">
              <Image
                src="/icon-3.png"
                width={32}
                height={32}
                quality={100}
                alt="icon"
              />
              <p className="w-full font-poppins font-normal text-base text-madeinblacc">
                Doorstep delivery to any city in Nigeria. Pickups are available
                in Lagos, Abuja & Ibadan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
