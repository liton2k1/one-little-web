"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import google from "../../public/Google-Logo.wine 1.png";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-[0_10px_40px_rgba(237,60,106,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div>
            <Image src={google} alt="" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Services", "Pricing", "Blog", "Resources"].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className={`text-sm font-medium transition-colors ${
                    item === "Home"
                      ? "text-[#ED3C6A] border-b border-[#ED3C6A]"
                      : "text-gray-600 hover:text-[#ED3C6A]"
                  }`}
                >
                  {item}
                </Link>
              ),
            )}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#"
              className="bg-[#ED3C6A] text-white text-sm font-semibold px-4 py-2.5 rounded flex items-center gap-2"
            >
              Schedule A Meeting <ArrowRight size={20} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {["Home", "About", "Services", "Pricing", "Blog", "Resources"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="block text-sm font-medium text-gray-600 hover:text-[#ED3C6A] transition-colors"
              >
                {item}
              </Link>
            ),
          )}
          <Link
            href="#"
            className="block w-full text-center bg-[#ED3C6A] text-white text-sm font-semibold px-5 py-2.5 rounded-md mt-2"
          >
            Schedule a Meeting
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
