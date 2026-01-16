import { users, type User, type InsertUser, doctors, type Doctor, appointments, type Appointment, type InsertAppointment, messages, type Message, type InsertMessage } from "@shared/schema";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Medical App Storage
  getDoctors(): Promise<Doctor[]>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private doctors: Doctor[];
  private appointments: Appointment[];
  private messages: Message[];
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.appointments = [];
    this.messages = [];
    this.currentId = 1;
    
    // Seed doctors data
    this.doctors = [
      {
        id: 1,
        name: "Dr. Sarah Johnson",
        specialization: "Cardiology",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Expert in heart health with 15 years of experience.",
        experience: "15 Years"
      },
      {
        id: 2,
        name: "Dr. James Wilson",
        specialization: "Neurology",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Specializing in neurological disorders and brain health.",
        experience: "12 Years"
      },
      {
        id: 3,
        name: "Dr. Emily Chen",
        specialization: "Pediatrics",
        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Dedicated to the health and well-being of children.",
        experience: "10 Years"
      },
      {
        id: 4,
        name: "Dr. Michael Brown",
        specialization: "Orthopedics",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300",
        bio: "Expert in bone and joint health and sports injuries.",
        experience: "18 Years"
      }
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = (this.currentId++).toString();
    const user: User = { ...insertUser, id, username: insertUser.username, password: insertUser.password };
    this.users.set(id, user);
    return user;
  }

  async getDoctors(): Promise<Doctor[]> {
    return this.doctors;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = this.currentId++;
    const appointment: Appointment = { ...insertAppointment, id, createdAt: new Date() };
    this.appointments.push(appointment);
    return appointment;
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.currentId++;
    const message: Message = { ...insertMessage, id, createdAt: new Date() };
    this.messages.push(message);
    return message;
  }
}

export const storage = new MemStorage();
