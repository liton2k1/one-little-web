/* eslint-disable react-hooks/purity */
"use client";
import Link from "next/link";

const floatingIcons = [
  {
    icon: "🏠",
    top: "15%",
    left: "8%",
    size: "w-12 h-12",
    delay: "0s",
    bg: "bg-red-100",
  },
  {
    icon: "📊",
    top: "10%",
    right: "12%",
    size: "w-14 h-14",
    delay: "0.3s",
    bg: "bg-blue-100",
  },
  {
    icon: "💬",
    top: "55%",
    left: "5%",
    size: "w-10 h-10",
    delay: "0.6s",
    bg: "bg-green-100",
  },
  {
    icon: "🔑",
    top: "60%",
    right: "8%",
    size: "w-11 h-11",
    delay: "0.9s",
    bg: "bg-yellow-100",
  },
  {
    icon: "📅",
    bottom: "20%",
    left: "15%",
    size: "w-10 h-10",
    delay: "1.2s",
    bg: "bg-purple-100",
  },
  {
    icon: "⭐",
    bottom: "25%",
    right: "15%",
    size: "w-12 h-12",
    delay: "1.5s",
    bg: "bg-orange-100",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-rose-50/60 via-white to-white pt-16 pb-24">
      {/* Decorative dots */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-rose-300/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Floating emoji icons */}
      {floatingIcons.map((icon, i) => (
        <div
          key={i}
          className={`absolute ${icon.size} ${icon.bg} rounded-2xl flex items-center justify-center text-xl shadow-lg animate-float hidden lg:flex`}
          style={{
            top: icon.top,
            left: icon.left,
            right: icon.right,
            bottom: icon.bottom,
            animationDelay: icon.delay,
            animationDuration: "3s",
          }}
        >
          {icon.icon}
        </div>
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Airbnb Assistants For{" "}
          <span className="text-rose-500">Property Management</span>
        </h1>
        <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="#"
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-xl hover:-translate-y-0.5 transform text-sm"
          >
            Schedule a Meeting
          </Link>
          <Link
            href="#"
            className="text-rose-500 hover:text-rose-600 font-semibold text-sm flex items-center gap-2 group"
          >
            View Demo
            <span className="w-7 h-7 rounded-full bg-rose-100 group-hover:bg-rose-200 flex items-center justify-center transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-rose-500">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Stats pill */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {[
            { value: "500+", label: "Properties Managed" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "24/7", label: "Support Available" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-rose-500">
                {stat.value}
              </span>
              <span className="text-xs text-gray-400 font-medium mt-0.5">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
