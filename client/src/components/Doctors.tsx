import { useDoctors } from "@/hooks/use-medical";
import { Facebook, Twitter, Linkedin, Loader2 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export default function Doctors() {
  const { data: doctors, isLoading } = useDoctors();

  return (
    <section id="doctors" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase">Our Doctors</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 text-slate-900 font-display">Meet Our Specialists</h2>
          <p className="text-slate-500 text-lg">
            Our team of highly skilled and experienced doctors is dedicated to providing you with the best medical care.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-10 h-10 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {doctors?.map((doctor) => (
              <div key={doctor.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button className="p-2 bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white rounded-full text-primary hover:bg-secondary hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-1 font-display">{doctor.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{doctor.specialization}</p>
                  <p className="text-slate-500 text-sm line-clamp-2">{doctor.bio}</p>
                </div>
              </div>
            ))}
            
            {/* Fallback if no doctors from API yet */}
            {(!doctors || doctors.length === 0) && (
              <div className="col-span-full text-center text-muted-foreground italic">
                No doctor profiles available. Seed the database to see content here.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
