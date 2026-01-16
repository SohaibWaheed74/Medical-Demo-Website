import { Clock, ShieldCheck, Stethoscope, Microscope } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "24/7 Service",
    description: "Always available for emergency cases",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    description: "Highly qualified medical professionals",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Microscope,
    title: "Modern Lab",
    description: "Accurate diagnostics and testing",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: ShieldCheck,
    title: "Affordable Care",
    description: "High quality care for everyone",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function Features() {
  return (
    <div className="py-16 bg-white relative z-20 -mt-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">{feature.title}</h3>
              <p className="text-slate-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
