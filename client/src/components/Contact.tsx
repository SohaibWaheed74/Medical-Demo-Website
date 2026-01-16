import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useContact } from "@/hooks/use-medical";
import { Loader2 } from "lucide-react";

export default function Contact() {
  const mutation = useContact();
  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider text-sm uppercase">Get In Touch</span>
          <h2 className="text-4xl font-bold mt-2 mb-4 text-slate-900 font-display">Contact Us</h2>
          <p className="text-slate-500 text-lg">
            Have questions? Our team is here to help. Reach out to us via phone, email, or fill out the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">Our Location</h4>
                <p className="text-slate-500">123 Medical Center Dr,<br />Health City, HC 90210</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">Phone Number</h4>
                <p className="text-slate-500">+1 (555) 123-4567<br />+1 (555) 987-6543</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-900 mb-1">Email Address</h4>
                <p className="text-slate-500">info@medicare.com<br />support@medicare.com</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white border-0 h-12" 
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <Input 
                    placeholder="Your Email" 
                    type="email" 
                    className="bg-white border-0 h-12" 
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
                </div>
              </div>
              <div className="mb-6 space-y-2">
                <Input 
                  placeholder="Subject / Phone" 
                  className="bg-white border-0 h-12" 
                  {...form.register("phone")}
                />
              </div>
              <div className="mb-6 space-y-2">
                <Textarea 
                  placeholder="Your Message" 
                  className="bg-white border-0 min-h-[150px] resize-none" 
                  {...form.register("message")}
                />
                {form.formState.errors.message && <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>}
              </div>
              <Button size="lg" className="w-full md:w-auto px-10" disabled={mutation.isPending}>
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
