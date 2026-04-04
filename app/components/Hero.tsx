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
    <div className="relative w-full min-h-175 flex items-center justify-center overflow-hidden border-b border-gray-100">
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

      <div className="absolute w-3 h-3 bg-[#635BFF] rounded-full top-[20%] left-[8%]" />
      <div className="absolute w-3 h-3 bg-[#FF5A5F] rounded-full top-[48%] left-[14%]" />
      <div className="absolute w-2 h-2 bg-[#FFEC5A] rounded-full bottom-[22%] left-[8%]" />
      <div className="absolute w-3 h-3 bg-[#34E0A1] rounded-full top-[16%] left-[50%]" />
      <div className="absolute w-3 h-3 bg-[#FFEC5A] rounded-full top-[35%] right-[20%]" />
      <div className="absolute w-2 h-2 bg-[#0C3B7C] rounded-full bottom-[25%] right-[17%]" />
      <div className="absolute w-3 h-3 bg-[#5AF9FF] rounded-full bottom-[14%] left-[50%]" />

      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: "900px",
          height: "450px",
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0.5) 75%, transparent 100%)",
          // filter: "blur(32px)",
        }}
      />

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
