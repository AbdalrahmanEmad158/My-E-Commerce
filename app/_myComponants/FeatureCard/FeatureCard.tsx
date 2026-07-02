import {
  FaTruck,
  FaShieldAlt,
  FaUndo,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    title: "Free Shipping",
    description: "On orders over 500 EGP",
    icon:  FaTruck,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Secure Payment",
    description: "100% secure transactions",
    icon: FaShieldAlt,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Easy Returns",
    description: "14-day return policy",
    icon: FaUndo,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    title: "24/7 Support",
    description: "Dedicated support team",
    icon: FaHeadset,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
];

export default function Features() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="
                  group
                  flex
                  items-center
                  gap-5
                  rounded-2xl
                  border
                  bg-white
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  cursor-pointer
                "
              >
                <div
                  className={`
                    flex h-16 w-16 items-center justify-center rounded-2xl
                    ${feature.iconBg}
                  `}
                >
                  <Icon
                    className={`h-8 w-8 ${feature.iconColor}`}
                    strokeWidth={2}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}