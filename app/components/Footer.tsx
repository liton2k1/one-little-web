import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import logo from "../../public/google.png";

const footerLinks = {
  Company: ["About", "Features", "Works", "Career"],
  Help: [
    "Customer Support",
    "Delivery Details",
    "Terms & Conditions",
    "Privacy Policy",
  ],
  Resources: [
    "Free eBooks",
    "Development Tutorial",
    "How to - Blog",
    "Youtube Playlist",
  ],
};

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-white border-t border-gray-100 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div className="flex flex-col gap-4">
              <Image src={logo} alt="logo" width={120} height={100} />
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
                sodales in volutpat ullamcorper amet adipiscing fermentum.
              </p>

              <div className="flex gap-4 mt-2">
                {[
                  { Icon: BsTwitter, label: "Twitter" },
                  { Icon: FaFacebook, label: "Facebook" },
                  { Icon: BsInstagram, label: "Instagram" },
                  { Icon: BsGithub, label: "Github" },
                ].map(({ Icon, label }) => (
                  <Link
                    key={label}
                    href="#"
                    aria-label={label}
                    className="text-gray-800 hover:text-[#ED3C6A] transition-colors"
                  >
                    <Icon size={18} />
                  </Link>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="flex flex-col gap-4">
                <h4 className="text-sm font-bold text-gray-900">{title}</h4>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#230B41] py-5 text-white text-center text-sm">
        © Copyright 2026, All Rights Reserved by XYZ
      </div>
    </footer>
  );
};

export default Footer;
