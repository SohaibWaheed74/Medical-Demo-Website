import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             {/* Unsplash surgery/team photo */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551601651-2a8dc88c70e0?auto=format&fit=crop&q=80&w=1000"
                alt="Medical Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <div className="text-4xl font-bold text-primary mb-1">15+</div>
              <div className="text-slate-600 font-medium">Years of experience providing top quality care.</div>
            </div>
          </div>

          <div>
            <span className="text-primary font-bold tracking-wider text-sm uppercase">About Us</span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-slate-900 font-display">Dedicated To Your Health & Well-being</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              At Medicare, we believe that healthcare should be accessible, affordable, and compassionate. Our team of dedicated professionals works tirelessly to ensure you receive the best possible treatment.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Founded on the principles of excellence and integrity, we have grown to become one of the most trusted healthcare providers in the region.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Comprehensive Medical Services",
                "Patient-Centered Approach",
                "State-of-the-art Facilities",
                "Experienced Medical Professionals"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary w-5 h-5 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
