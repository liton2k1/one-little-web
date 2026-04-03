"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import img1 from "../../public/3721eec3d2a1551fce69f6f1050ffbcea95e6a06.png";
import img2 from "../../public/8cac66edac7e9cc006e377a554341d67f0d9b385.png";
import img3 from "../../public/aac6b1b18acee54880feb3c84cfacdb2ff89076d.png";

const reviews = [
  {
    name: "Jenny Wilson",
    avatar: img1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    name: "Esther Howard",
    avatar: img2,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
  {
    name: "Robert Fox",
    avatar: img3,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <div className="mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Check Our Clients <span className="text-[#ED3C6A]">Review</span>
          </h2>
          <p className="text-gray-500 text-sm mt-4 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-xl p-7 flex flex-col gap-5 bg-[#F6F6F6] hover:bg-white hover:shadow-2xl"
            >
              {/* Profile */}
              <div className="flex items-center gap-5">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  {/* Text */}
                  <p className="font-semibold text-gray-900 text-sm">
                    {review.name}
                  </p>
                  <p className="text-gray-500 text-xs">{review.text}</p>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, si) => (
                      <Star key={si} size={14} fill="#f5a623" color="#f5a623" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
