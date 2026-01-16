import { Activity, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Activity size={24} />
              </div>
              <span className="font-display font-bold text-2xl text-white tracking-tight">
                Medi<span className="text-primary">Care</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Leading the way in medical excellence, trusted care, and advanced technology. Your health is our commitment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Find a Doctor</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Departments</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-primary transition-colors">Cardiology</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Neurology</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Orthopedics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pediatrics</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Surgery</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-4">Subscribe to our newsletter for health tips and updates.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-slate-800 border-0 rounded-lg h-10 px-4 focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <button className="h-10 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2024 Medicare. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> for better healthcare.
          </p>
        </div>
      </div>
    </footer>
  );
}
