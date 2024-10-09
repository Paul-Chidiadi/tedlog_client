"use client";
import Image from "next/image";
import { useState } from "react";

export default function Shipment() {
  return (
    <>
      <div className="w-full md:w-[80%] h-fit mx-auto bg-lightBg p-[32px] flex flex-col items-start justify-start gap-[20px]">
        <h1 className="w-full font-poppins font-[700] text-madeinblacc text-[20px] md:text-[24px]">
          Dispatch Details
        </h1>

        <h2 className="w-full font-poppins font-[700] text-madeinblacc text-[18px] md:text-[20px]">
          Sender's Details
        </h2>

        <div className="w-full flex flex-col md:flex-row items-start justify-between">
          <h3 className="font-poppins font-normal text-[#626262] text-sm md:text-base">
            <span className="font-semibold text-madeinblacc">Name:</span> Paul
            Favour
          </h3>
          <h3 className="font-poppins font-normal text-[#626262] text-sm md:text-base">
            <span className="font-semibold text-madeinblacc">Location:</span>{" "}
            Awka
          </h3>
          <h3 className="font-poppins font-normal text-[#626262] text-sm md:text-base">
            <span className="font-semibold text-madeinblacc">Contact:</span>{" "}
            +2349064836475
          </h3>
        </div>

        <h2 className="w-full font-poppins font-[700] text-madeinblacc text-[18px] md:text-[20px]">
          Reciever's Details
        </h2>

        <div className="w-full flex flex-col md:flex-row items-start justify-between">
          <h3 className="font-poppins font-normal text-[#626262] text-sm md:text-base">
            <span className="font-semibold text-madeinblacc">Name:</span> Daniel
            Favour
          </h3>
          <h3 className="font-poppins font-normal text-[#626262] text-sm md:text-base">
            <span className="font-semibold text-madeinblacc">Location:</span>{" "}
            Onitsha
          </h3>
          <h3 className="font-poppins font-normal text-[#626262] text-sm md:text-base">
            <span className="font-semibold text-madeinblacc">Contact:</span>{" "}
            +2349064836475
          </h3>
        </div>

        <div className="w-full flex items-center justify-between">
          <h3 className="font-poppins font-normal text-[#626262] text-sm md:text-base">
            <span className="font-semibold text-madeinblacc">
              Tracking Number:
            </span>{" "}
            TEDLOG::79437
          </h3>
        </div>

        <div className="w-full flex items-center justify-between">
          <h3 className="font-poppins font-normal text-[#626262] text-sm md:text-base">
            <span className="font-semibold text-madeinblacc">
              Product Type:
            </span>{" "}
            Perishable
          </h3>
        </div>

        <div className="w-full flex items-center justify-between">
          <h3 className="font-poppins font-normal text-[#626262] text-sm md:text-base">
            <span className="font-semibold text-madeinblacc">
              Package Weight:
            </span>{" "}
            50kg
          </h3>
        </div>

        <div className="w-full">
          <h3 className="font-poppins font-semibold text-madeinblacc text-sm md:text-base">
            Item Description
          </h3>
          <p className="font-poppins font-normal text-[#626262] text-sm md:text-base">
            Send items to your friends, family, or customers in with Teddy
            logistics. Delivery takes 3 - 5 working days and you can be rest
            assured of a stress-free experience. Request a quote to get started!
          </p>
        </div>

        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h3 className="font-poppins font-semibold text-madeinblacc text-sm md:text-base">
            Package Image
          </h3>
          <div className="w-full flex flex-wrap justify-start items-start gap-4">
            <Image
              className="w-[150px] h-[100px] object-cover rounded-[5px] cursor-pointer"
              src="/hero.jpg"
              width={32}
              height={32}
              quality={100}
              alt="icon"
            />
            <Image
              className="w-[150px] h-[100px] object-cover rounded-[5px] cursor-pointer"
              src="/hero.jpg"
              width={32}
              height={32}
              quality={100}
              alt="icon"
            />
            <Image
              className="w-[150px] h-[100px] object-cover rounded-[5px] cursor-pointer"
              src="/hero.jpg"
              width={32}
              height={32}
              quality={100}
              alt="icon"
            />
          </div>
        </div>

        <h1 className="w-full font-poppins font-[700] text-madeinblacc text-[20px] md:text-[24px]">
          Status
        </h1>

        <div className="w-full flex flex-col md:flex-row items-start justify-start gap-4">
          <h3 className="flex items-center justify-start gap-2">
            <i className="bx bxs-circle text-pending"></i>
            <span className="font-poppins font-normal text-[#626262] text-sm md:text-base">
              Pending
            </span>
          </h3>
          <h3 className="flex items-center justify-start gap-2">
            <i className="bx bxs-circle text-started"></i>
            <span className="font-poppins font-normal text-[#626262] text-sm md:text-base">
              Started
            </span>
          </h3>
          <h3 className="flex items-center justify-start gap-2">
            <i className="bx bxs-circle text-completed"></i>
            <span className="font-poppins font-normal text-[#626262] text-sm md:text-base">
              Completed
            </span>
          </h3>
        </div>

        <div className="w-full flex flex-col items-start justify-between gap-3">
          <div className="flex items-center justify-start gap-2">
            <i className="bx bx-map-pin text-neutral text-[30px]"></i>
            <span className="font-poppins font-normal text-[#626262] text-sm md:text-base">
              Created on Wed, 21st July, 2024
            </span>
          </div>

          <hr className="h-[80px] border-[1px] border-dashed border-gray-400 ml-[15px]" />

          <div className="flex items-center justify-start gap-2">
            <i className="bx bx-cycling text-neutral text-[30px]"></i>
            <span className="font-poppins font-normal text-[#626262] text-sm md:text-base">
              Started on Thursday, 22nd July, 2024.
            </span>
          </div>

          <hr className="h-[80px] border-[1px] border-dashed border-gray-400 ml-[15px]" />

          <div className="flex items-center justify-start gap-2">
            <i className="bx bxs-map-pin text-neutral text-[30px]"></i>
            <span className="font-poppins font-normal text-[#626262] text-sm md:text-base">
              Delivered on Saturday, 24th July, 2024.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
