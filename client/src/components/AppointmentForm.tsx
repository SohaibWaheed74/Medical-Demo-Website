import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAppointmentSchema, type InsertAppointment } from "@shared/schema";
import { useCreateAppointment } from "@/hooks/use-medical";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { Phone, Calendar as CalendarIcon, Clock, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

// Standard HTML select for simplicity/accessibility in this demo
const departments = [
  "General Medicine", "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Dental"
];

export default function AppointmentForm() {
  const mutation = useCreateAppointment();
  
  const form = useForm<InsertAppointment>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      department: departments[0],
      date: new Date().toISOString().split('T')[0], // Simple YYYY-MM-DD
      notes: ""
    }
  });

  const onSubmit = (data: InsertAppointment) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  };

  return (
    <section id="appointment" className="py-24 bg-primary relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-secondary/20 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="font-bold tracking-wider text-sm uppercase text-secondary">Book Now</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 font-display">Make An Appointment</h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Skip the waiting room. Schedule your appointment online and get priority access to our specialists.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <Phone className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Emergency Call</h4>
                  <p className="text-blue-100 text-sm">24/7 Support line: +1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                <Clock className="w-6 h-6 text-secondary mt-1" />
                <div>
                  <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                  <p className="text-blue-100 text-sm">Mon - Fri: 8:00 AM - 9:00 PM</p>
                  <p className="text-blue-100 text-sm">Sat - Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-2xl shadow-black/20">
            <CardContent className="p-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input 
                      placeholder="John Doe" 
                      {...form.register("name")}
                      className={cn(form.formState.errors.name && "border-red-500 focus-visible:ring-red-500")}
                    />
                    {form.formState.errors.name && <p className="text-xs text-red-500">{form.formState.errors.name.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input 
                      placeholder="john@example.com" 
                      type="email"
                      {...form.register("email")}
                      className={cn(form.formState.errors.email && "border-red-500 focus-visible:ring-red-500")}
                    />
                     {form.formState.errors.email && <p className="text-xs text-red-500">{form.formState.errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone</label>
                    <Input 
                      placeholder="+1 (555) 000-0000" 
                      {...form.register("phone")}
                      className={cn(form.formState.errors.phone && "border-red-500 focus-visible:ring-red-500")}
                    />
                     {form.formState.errors.phone && <p className="text-xs text-red-500">{form.formState.errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Department</label>
                    <select 
                      {...form.register("department")}
                      className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Preferred Date</label>
                  <Input 
                    type="date" 
                    {...form.register("date")}
                    className={cn(form.formState.errors.date && "border-red-500 focus-visible:ring-red-500")}
                  />
                   {form.formState.errors.date && <p className="text-xs text-red-500">{form.formState.errors.date.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message (Optional)</label>
                  <Textarea 
                    placeholder="Describe your symptoms or reason for visit..." 
                    className="min-h-[100px]"
                    {...form.register("notes")}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-semibold shadow-lg shadow-primary/20"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Booking...
                    </>
                  ) : (
                    "Book Appointment Now"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
