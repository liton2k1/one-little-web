import Image from "next/image";
import logo1 from "../../public/Group 39931.svg";
import logo2 from "../../public/layer1.svg";
import logo3 from "../../public/Clip path group.svg";
import logo4 from "../../public/Group.svg";
import logo5 from "../../public/Group (1).svg";
import logo6 from "../../public/Clip path group (1).svg";
import logo7 from "../../public/Group 39932.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const Trusted = () => {
  return (
    <div className="mt-10">
      <p className="text-center font-semibold mb-10">
        Trusted by leaders in 50+ industries
      </p>
      <div className="py-10 bg-[#F6F6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center">
                <Image
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  className="h-8 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trusted;