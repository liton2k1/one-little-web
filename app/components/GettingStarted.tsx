import Image from "next/image";
import icon1 from "../../public/Group 39879.png";
import icon2 from "../../public/Group 39878.png";
import icon3 from "../../public/Group 39881.png";

const steps = [
  {
    number: "01",
    icon: icon1,
    alt: "Add user icon",
    title: "Add requirements\n& sign up today",
  },
  {
    number: "02",
    icon: icon2,
    alt: "Team icon",
    title: "Connect with your CSM &\nonboarding team",
  },
  {
    number: "03",
    icon: icon3,
    alt: "Headset icon",
    title: "Meet your STR\nAssistant next week",
  },
];

const GettingStarted = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold text-gray-900">
          Getting Started is <span className="text-[#ED3C6A]">Easy</span>
        </h2>
      </div>

      <p className="text-center text-sm max-w-2xl mx-auto mb-12 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto justify-center">
        {steps.map((step) => (
          <div key={step.number} className="relative flex-1">
            <div
              className="absolute -top-4 -left-4 z-10 w-14 h-14 rounded-full bg-white flex items-center justify-center text-2xl border-4"
              style={{ borderColor: "#ED3C6A", color: "#00000" }}
            >
              {step.number}
            </div>

            <div className="bg-white rounded-xl border-2 border-[#FDEBF0] flex flex-col items-center justify-center py-10 px-6 min-h-45">
              <Image
                src={step.icon}
                alt={step.alt}
                width={72}
                height={72}
                className="object-contain"
              />
            </div>

            <p className="text-center text-gray-800 font-semibold mt-4 leading-snug whitespace-pre-line">
              {step.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default GettingStarted;
