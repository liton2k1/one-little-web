"use client";
import Image from "next/image";
import icon1 from "../../public/image 11.png";
import icon2 from "../../public/image 12.png";
import icon3 from "../../public/image 13.png";
import icon4 from "../../public/image 14.png";
import icon5 from "../../public/image 15.png";
import icon6 from "../../public/image.png";
import icon7 from "../../public/image.png";
import icon8 from "../../public/image.png";
import icon9 from "../../public/image.png";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];

export default function Tools() {
  return (
    <div className="mt-20">
      <div className="text-center mb-20">
        <span className="text-[#ED3C6A] text-3xl font-bold">
          <span className="text-black">Our</span> Tools
        </span>
        <p className="text-sm max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="py-20 bg-[#F6F6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-3">
            {icons.map((icon, idx) => (
              <div
                key={idx}
                className="bg-white lg:px-5 lg:py-10 lg:p-0 p-3 rounded-md flex items-center justify-center transition-shadow duration-300 cursor-pointer hover:shadow-[0_10px_40px_rgba(237,60,106,0.3)]"
              >
                <Image src={icon} alt={`tool-${idx}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
