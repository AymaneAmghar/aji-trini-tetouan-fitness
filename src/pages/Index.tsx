import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dumbbell, Users, Calendar, User, Weight } from "lucide-react";
import heroImage from "../assets/gym-hero.jpg";
const Index = () => {
  const [activeDay, setActiveDay] = useState("monday");
  const services = [{
    icon: <Weight className="h-8 w-8" />,
    title: "Weight Training",
    description: "Professional equipment and guided sessions for strength building"
  }, {
    icon: <Dumbbell className="h-8 w-8" />,
    title: "CrossFit",
    description: "High-intensity functional movement workouts"
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Group Classes",
    description: "Motivating group sessions with expert trainers"
  }, {
    icon: <User className="h-8 w-8" />,
    title: "Personal Training",
    description: "One-on-one customized fitness programs"
  }, {
    icon: <Users className="h-8 w-8" />,
    title: "Women's Fitness",
    description: "Safe, supportive environment for women's training"
  }, {
    icon: <Calendar className="h-8 w-8" />,
    title: "Cardio Zone",
    description: "Modern cardio equipment with entertainment systems"
  }];
  const trainers = [{
    name: "Youssef Benali",
    specialty: "CrossFit & Strength",
    experience: "8 years",
    bio: "Certified trainer specializing in functional fitness and strength conditioning."
  }, {
    name: "Fatima El Amrani",
    specialty: "Women's Fitness",
    experience: "6 years",
    bio: "Expert in women's health and fitness, yoga instructor."
  }, {
    name: "Mohamed Tazi",
    specialty: "Personal Training",
    experience: "10 years",
    bio: "Former athlete turned personal trainer, specializes in weight loss and muscle building."
  }];
  const schedule = {
    monday: [{
      time: "08:00 - 15:30",
      class: "Monday, Wednesday, Friday",
      trainer: "Morning"
    }, {
      time: "20:30 - 23:30",
      class: "Monday, Wednesday, Friday",
      trainer: "Evening"
    }, {
      time: "12:30 - 23:30",
      class: "Tuesday, Thursday, Saturday",
      trainer: "Mohamed"
    }, {
      time: "20:00",
      class: "Group HIIT",
      trainer: "Youssef"
    }],
    tuesday: [{
      time: "07:00",
      class: "Cardio Blast",
      trainer: "Fatima"
    }, {
      time: "10:00",
      class: "Weight Training",
      trainer: "Mohamed"
    }, {
      time: "19:00",
      class: "CrossFit Pro",
      trainer: "Youssef"
    }],
    wednesday: [{
      time: "06:00",
      class: "Morning Yoga",
      trainer: "Fatima"
    }, {
      time: "17:00",
      class: "Strength & Power",
      trainer: "Mohamed"
    }, {
      time: "19:30",
      class: "Mixed Training",
      trainer: "Youssef"
    }]
  };
  const testimonials = [{
    name: "Ahmed Bennani",
    text: "Aji Trini changed my life! The trainers are amazing and the community is so supportive.",
    location: "Tetouan"
  }, {
    name: "Sara Benjelloun",
    text: "Finally found a gym where I feel comfortable and motivated. The women's section is perfect!",
    location: "Tetouan"
  }, {
    name: "Omar Chakiri",
    text: "Best gym in Tetouan! Professional equipment and knowledgeable trainers.",
    location: "Tetouan"
  }];
  const pricingPlans = [{
    name: "Day Pass",
    price: "25 MAD",
    period: "per day",
    features: ["Full gym access", "All equipment", "Locker room"]
  }, {
    name: "Monthly",
    price: "200 MAD",
    period: "per month",
    features: ["Unlimited access", "All classes", "Nutrition guidance", "Free Shower service"],
    popular: true
  }, {
    name: "Kids Sessions",
    price: "Coming Soon",
    period: "per month",
    features: ["Group training", "Customized program", "Nutrition plan", "Progress tracking"]
  }];
  return <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-gym-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/lovable-uploads/598dd682-567a-4cda-a07d-3d6f8dcb5151.png" alt="Aji Trini" className="h-10 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#schedule" className="text-foreground hover:text-primary transition-colors">Schedule</a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="hero">Join Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-r from-gym-black/80 via-gym-black/60 to-transparent" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-fade-in">
            <span className="text-foreground font-bold">AJI</span>{" "}
            <span className="text-primary animate-glow-pulse">TRINI</span>
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-bold mb-4 animate-slide-up">
            Change Your Life
          </p>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{
          animationDelay: '0.2s'
        }}>
            Strength Lives Here • Push Your Limits in Tetouan • Train Hard, Live Strong
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-slide-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Join Now
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4">
              View Classes
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gym-card-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Welcome to <span className="text-primary">Aji Trini</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Located in the heart of Tetouan, Aji Trini is more than just a gym – it's where strength, 
              community, and determination come together. We believe in empowering every individual to 
              push their limits and achieve their fitness goals in a supportive, inclusive environment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our state-of-the-art facility combines modern equipment with traditional Moroccan values 
              of hospitality and community. Whether you're a beginner or a seasoned athlete, 
              Aji Trini is your home for transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="bg-gym-card-bg border-gym-border hover:border-primary/50 transition-all duration-300 hover:shadow-orange group">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gym-card-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Class <span className="text-primary">Schedule</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <Tabs value={activeDay} onValueChange={setActiveDay} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gym-black/50">
                <TabsTrigger value="monday" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Men</TabsTrigger>
                <TabsTrigger value="tuesday" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Women</TabsTrigger>
                <TabsTrigger value="wednesday" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Kids</TabsTrigger>
              </TabsList>
              {Object.entries(schedule).map(([day, classes]) => <TabsContent key={day} value={day} className="mt-8">
                  <div className="grid gap-4">
                    {classes.map((classItem, index) => <Card key={index} className="bg-background border-gym-border">
                        <CardContent className="flex items-center justify-between p-6">
                          <div>
                            <h4 className="text-lg font-semibold">{classItem.class}</h4>
                            <p className="text-muted-foreground">with {classItem.trainer}</p>
                          </div>
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {classItem.time}
                          </Badge>
                        </CardContent>
                      </Card>)}
                  </div>
                </TabsContent>)}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Meet Our <span className="text-primary">Trainers</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => <Card key={index} className="bg-gym-card-bg border-gym-border hover:border-primary/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{trainer.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {trainer.specialty} • {trainer.experience}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{trainer.bio}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gym-card-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our Members <span className="text-primary">Say</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <Card key={index} className="bg-background border-gym-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-gym-border pt-4">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Membership <span className="text-primary">Plans</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => <Card key={index} className={`bg-gym-card-bg border-gym-border relative ${plan.popular ? 'border-primary scale-105' : ''}`}>
                {plan.popular && <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                  <Button variant={plan.popular ? "hero" : "outline-hero"} className="w-full">
                    {plan.popular ? "Start Training Today" : "Choose Plan"}
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gym-card-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Visit Our Gym</h3>
              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="font-semibold text-primary">Address</h4>
                  <p className="text-muted-foreground">Av, Haj Mohamed Bennouna, Boussafou, Tetouan, Morocco</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Phone</h4>
                  <p className="text-muted-foreground">+212 628473604</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Instagram</h4>
                  <p className="text-muted-foreground">@ajitrini09</p>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-gym-border">
                <h4 className="font-semibold text-primary mb-4">Opening Hours</h4>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span>08:00 - 23:30</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input placeholder="Your Name" className="bg-background border-gym-border" />
                  <Input placeholder="Your Phone" className="bg-background border-gym-border" />
                </div>
                <Input placeholder="Your Email" className="bg-background border-gym-border" />
                <Textarea placeholder="Your Message" rows={4} className="bg-background border-gym-border" />
                <Button variant="hero" className="w-full">
                  Send Message
                </Button>
                <Button variant="outline-hero" className="w-full">
                  Chat on WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gym-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src="/lovable-uploads/598dd682-567a-4cda-a07d-3d6f8dcb5151.png" alt="Aji Trini" className="h-12 w-auto mb-4" />
              <p className="text-muted-foreground">Unleash your full potential at our GYM! We're your destination for fitness success. Join us now and start your journey to a fitter, happier you!</p>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">Services</a>
                <a href="#schedule" className="block text-muted-foreground hover:text-primary transition-colors">Schedule</a>
                <a href="#pricing" className="block text-muted-foreground hover:text-primary transition-colors">Pricing</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-4">Contact Info</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Av, Haj Mohamed Bennouna</p>
                <p>Tetouan, Morocco</p>
                <p>+212 628473604</p>
                <p>@ajitrini09</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gym-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Aji Trini. All rights reserved. • Built with strength in Tetouan</p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
