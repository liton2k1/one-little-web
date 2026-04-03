"use client";
import Image from "next/image";
import airbnb from "../../public/Group 39908.png";
import booking from "../../public/Group 39911.png";
import vrbo from "../../public/Group 39910.png";
import tripadvisor from "../../public/Group 39909.png";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden border-b border-gray-100">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Floating Dots */}
      <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-[20%] left-[10%]" />
      <div className="absolute w-2 h-2 bg-yellow-400 rounded-full top-[30%] right-[12%]" />
      <div className="absolute w-2 h-2 bg-green-400 rounded-full bottom-[25%] left-[20%]" />
      <div className="absolute w-2 h-2 bg-red-400 rounded-full bottom-[20%] right-[15%]" />

      {/* Oval Border */}
      <div className="absolute w-[900px] h-[450px] border-2 border-blue-500 rounded-full" />

      {/* Floating Logos */}
      <Image
        src={airbnb}
        alt="Airbnb"
        width={80}
        height={80}
        className="absolute top-[18%] left-[28%]"
      />
      <Image
        src={booking}
        alt="Booking"
        width={80}
        height={80}
        className="absolute top-[18%] right-[28%]"
      />
      <Image
        src={vrbo}
        alt="Vrbo"
        width={80}
        height={80}
        className="absolute bottom-[18%] left-[30%]"
      />
      <Image
        src={tripadvisor}
        alt="Tripadvisor"
        width={80}
        height={80}
        className="absolute bottom-[18%] right-[30%]"
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-black">
          Airbnb Assistants For
        </h1>

        <h2 className="text-2xl md:text-3xl mt-2 font-medium text-gray-700">
          Property Management
        </h2>

        <p className="text-gray-500 mt-4 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <Link
            href="#"
            className="bg-[#ED3C6A] text-white text-sm font-semibold px-4 py-2.5 rounded flex items-center gap-2"
          >
            Schedule A Meeting <ArrowRight size={20} />
          </Link>

          <Link href="#" className="text-sm underline text-gray-700 mt-3">
            See Pricing
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
