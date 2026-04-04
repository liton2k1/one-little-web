import Link from "next/link";
import icon1 from "../../public/fi_3176366.png";
import icon2 from "../../public/fi_1048953.png";
import icon3 from "../../public/fi_2954884.png";
import icon4 from "../../public/Layer_13.png";
import icon5 from "../../public/Group.png";
import icon6 from "../../public/Group 39894.png";
import Image from "next/image";

const services = [
  {
    icon: icon1,
    title: "Manage Property Listings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: icon2,
    title: "Manage Customer Bookings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: icon3,
    title: "Schedule House Cleaning",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: icon4,
    title: "Monitor Guest Reviews",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: icon5,
    title: "Track & Report Expenses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
  {
    icon: icon6,
    title: "Guest Inquiry & Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
  },
];

const Services = () => {
  return (
    <section className="mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-[#ED3C6A] text-3xl font-bold mb-5">
            <span className="text-black"> Our</span> Service
          </h2>
          <p className="text-sm max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-[#F5AFC0] p-7 rounded-xl bg-white hover:border-0 hover:shadow-2xl"
            >
              <Image src={service.icon} alt="icon" className="mb-7" />
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed mb-7">
                {service.description}
              </p>
              <Link
                href="#"
                className="border border-[#ED3C6A] rounded-full text-[#ED3C6A] px-3 py-1 text-sm"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
