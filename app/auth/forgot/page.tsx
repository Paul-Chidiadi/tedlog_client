import Image from "next/image";

export default function Forgot() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden lg:block relative bg-[url('/Frame1.png')] bg-no-repeat bg-cover bg-center w-2/5 h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-madeinblacc to-burnt opacity-60"></div>
        </div>
        <div className="w-full lg:w-3/5 h-full bg-white flex flex-col items-center justify-start gap-10 py-10 overflow-y-scroll">
          <a href="/">
            <Image
              className="w-24 h-auto md:w-fit"
              src="/factory-logo.png"
              width={150}
              height={50}
              quality={100}
              alt="Tedlog Logo"
            />
          </a>

          <h2 className="w-full font-poppins font-semibold text-center text-2xl md:text-4xl text-madeinblacc">
            Forgot your password?
          </h2>

          <form className="w-3/4 flex flex-col gap-6">
            <div className="w-full flex flex-col gap-2">
              <label className="font-poppins font-semibold text-left text-base text-madeinblacc">
                Email Address
              </label>
              <input
                className="w-full h-11 px-3 rounded-md outline-none border border-gray-400 font-poppins font-normal text-madeinblacc text-sm"
                type="email"
                placeholder="johndoe@gmail.com"
              />
            </div>

            <a
              href="#"
              className="flex items-center justify-center px-6 py-3 rounded-md border border-madeinblacc font-poppins font-normal bg-madeinblacc text-white text-sm md:text-base cursor-pointer hover:bg-burnt hover:border-burnt"
            >
              Submit
            </a>
          </form>
        </div>
      </div>
    </>
  );
}
