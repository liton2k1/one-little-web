import Image from "next/image";
import Link from "next/link";
import img1 from "../../public/Avatar.png";
import img2 from "../../public/Avatar (1).png";
import img3 from "../../public/Avatar (2).png";

const teamAvatars = [img1, img2, img3];

const Cta = () => {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F7F9] rounded-xl py-12 flex flex-col items-center text-center gap-4">
          <div className="flex -space-x-3">
            {teamAvatars.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Team member"
                height={20}
                width={20}
                className="w-11 h-11 rounded-full border-2 border-white object-cover"
              />
            ))}
          </div>

          <h3 className="text-lg font-bold text-gray-900 mt-1">
            Still have Questions?
          </h3>
          <p className="text-sm text-gray-400 max-w-lg">
            Can&apos;t find the answer you&apos;re looking for? Please chat to
            our friendly team.
          </p>

          <Link
            href="#"
            className="mt-2 bg-[#ED3C6A] text-white text-sm font-semibold px-7 py-3 rounded-lg"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
