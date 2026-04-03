"use client";
import { useState } from "react";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Freebie",
    price: 0,
    features: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
    included: [true, true, false, false, false, false, false, false],
    popular: false,
    description:
      "Ideal for individuals who need quick access to basic features.",
  },
  {
    name: "Professional",
    price: 25,
    features: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
    included: [true, true, true, true, true, true, false, false],
    popular: true,
    description:
      "Ideal for individuals who need advanced features and tools for client work.",
  },
  {
    name: "Enterprise",
    price: 100,
    features: [
      "20,000+ of PNG & SVG graphics",
      "Access to 100 million stock images",
      "Upload custom icons and fonts",
      "Unlimited Sharing",
      "Upload graphics & video in up to 4k",
      "Unlimited Projects",
      "Instant Access to our design system",
      "Create teams to collaborate on designs",
    ],
    included: Array(8).fill(true),
    popular: false,
    description:
      "Ideal for businesses who need personalized services and security for large teams.",
  },
];

const primaryColor = "#ED3C6A";
const checkBgColor = "#FAC4D2";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          Airnbn Assistant <span style={{ color: primaryColor }}>pricing</span>
        </h2>
        <p className="mb-8">Choose a plan that’s right for you</p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${!isYearly ? "font-bold" : ""}`}>
            Pay Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-12 h-6 bg-gray-300 rounded-full transition-all"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                isYearly ? "translate-x-6" : ""
              }`}
            />
          </button>
          <span className={`text-sm ${isYearly ? "font-bold" : ""}`}>
            Pay Yearly
          </span>
          {isYearly && (
            <span style={{ color: primaryColor }} className="text-sm ml-2">
              Save 25%
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border rounded-xl p-8 flex flex-col justify-between transition-transform`}
              style={{
                backgroundColor: plan.popular ? primaryColor : "white",
                color: plan.popular ? "white" : "inherit",
                borderColor: plan.popular ? primaryColor : checkBgColor,
              }}
            >
              <div>
                <h3 className="text-lg font-bold mb-2">{plan.name}</h3>
                <p className="text-sm mb-4">{plan.description}</p>
                <div className="text-3xl font-extrabold mb-6">
                  ${plan.price}{" "}
                  <span className="text-base font-normal">/ Month</span>
                </div>

                <div className="my-5">
                  <button
                    className="w-full py-2 rounded transition-colors font-semibold"
                    style={{
                      backgroundColor: plan.popular ? "white" : "transparent",
                      color: primaryColor,
                      border: plan.popular
                        ? "none"
                        : `1px solid ${primaryColor}`,
                    }}
                  >
                    Get Started Now
                  </button>
                </div>

                <ul className="space-y-2 mb-6 text-sm">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{
                          backgroundColor: plan.included[idx]
                            ? checkBgColor
                            : "#F3F4F6",
                        }}
                      >
                        {plan.included[idx] ? (
                          <Check size={14} style={{ color: primaryColor }} />
                        ) : (
                          <X size={14} className="text-gray-400" />
                        )}
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
