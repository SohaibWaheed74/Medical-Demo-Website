import { Heart, Brain, Bone, Baby, UserPlus, Activity, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  { icon: Heart, title: "Cardiology", desc: "Comprehensive heart care and diagnostics." },
  { icon: Brain, title: "Neurology", desc: "Expert care for neurological disorders." },
  { icon: Bone, title: "Orthopedics", desc: "Advanced treatments for bone and joint health." },
  { icon: Baby, title: "Pediatrics", desc: "Specialized healthcare for infants and children." },
  { icon: UserPlus, title: "Surgery", desc: "Minimally invasive and general surgical procedures." },
  { icon: Activity, title: "Emergency", desc: "24/7 emergency care for critical conditions." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Departments</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 text-slate-900 font-display">Specialized Medical Services</h2>
          <p className="text-slate-500 text-lg">
            We offer a wide range of specialized medical services to cater to all your healthcare needs under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">{service.title}</h3>
              <p className="text-slate-500 mb-6 line-clamp-2">
                {service.desc}
              </p>
              <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
