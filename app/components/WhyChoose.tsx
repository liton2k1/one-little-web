"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import person from "../../public/d5dae69b7ebc3e6ab81bdd53fc95adff366f77c7.png";
import room from "../../public/ffde08be938e96092fbb0b518092644baf33b61d.png";
import calender from "../../public/Group 39889.png";
import airbnb from "../../public/Group 40014.png";
import vrbo from "../../public/Group 40011.png";
import booking from "../../public/Group 40013.png";
import tripadvisor from "../../public/Group 40012.png";

const features = [
  "Brilliant client service",
  "Flexibility & adaptability",
  "We make it personal",
  "We have experts in our team",
];

const logos = [
  { src: airbnb, alt: "Airbnb" },
  { src: vrbo, alt: "VRBO" },
  { src: booking, alt: "Booking.com" },
  { src: tripadvisor, alt: "Tripadvisor" },
];

const WhyChoose = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div className="w-full bg-[#FDEBF0] border border-[#F8BECD] rounded-3xl p-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Few reasons why you <br /> choose us?
          </h2>
          <p className="text-sm font-medium leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <ul className="flex flex-col gap-3">
            {features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-sm font-medium text-gray-800"
              >
                <span className="flex items-center justify-center rounded-full w-5 h-5 shrink-0 bg-[#FAC4D2]">
                  <Check size={12} color="#ED3C6A" strokeWidth={2.5} />
                </span>
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="#"
            className="bg-[#ED3C6A] inline-flex items-center gap-2 text-white text-sm font-medium px-6 py-3 rounded-lg w-fit mt-5"
          >
            Schedule A Meeting <ArrowRight size={20} />
          </Link>
        </div>

        <div className="relative flex items-center justify-center min-h-80">
          <div className="absolute w-96 h-60 rounded-full bg-[#f5a8be]" />

          <div className="relative -top-7 z-20">
            <Image
              src={person}
              alt="Team member"
              width={220}
              height={300}
              className="object-contain"
            />
          </div>

          <div className="absolute top-4 left-5 z-10 bg-white rounded-lg shadow-md p-2 flex gap-3 items-center min-w-45">
            <div className="w-24 h-16 rounded-md overflow-hidden shrink-0">
              <Image
                src={room}
                alt="Room"
                width={80}
                height={60}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex gap-0.5">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={10} fill="#f5a623" color="#f5a623" />
                ))}
              </div>
              <p className="text-xs font-medium text-gray-900">
                $75<span className="text-gray-400 font-normal">/night</span>
              </p>
            </div>
          </div>

          <div className="absolute top-4 right-14 z-10 bg-white rounded-xl shadow-md p-3 grid grid-cols-2 gap-2">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-1 left-0 z-10">
            <Image
              src={calender}
              alt="Calendar"
              width={180}
              height={100}
              className="bg-white p-5 rounded-2xl h-32 object-cover shadow-[0_10px_40px_rgba(237,60,106,0.3)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
