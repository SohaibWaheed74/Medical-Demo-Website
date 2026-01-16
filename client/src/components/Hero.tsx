import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Unsplash medical interior */}
        <img 
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Hospital Interior"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/30 text-primary font-semibold text-sm mb-6 border border-secondary/50">
              Your Health, Our Priority
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-900 mb-6 font-display">
              Advanced Care <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
                Compassionate Healing
              </span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              We combine state-of-the-art medical technology with dedicated experts to provide comprehensive healthcare for you and your family.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/25 hover:scale-105 transition-transform">
                <Calendar className="mr-2 h-5 w-5" /> Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8 text-base border-primary/20 hover:bg-primary/5">
                <Phone className="mr-2 h-5 w-5" /> Contact Us
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-8 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                24/7 Support
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                Expert Doctors
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Modern Clinic
              </div>
            </div>
          </motion.div>

          {/* Right side floating image/illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 border-4 border-white">
              {/* Unsplash doctor portrait */}
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                alt="Smiling Doctor"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative background elements */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-secondary/30 rounded-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
