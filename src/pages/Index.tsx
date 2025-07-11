import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
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
    name: "Soufian Bakali",
    specialty: "CrossFit & Strength",
    experience: "8 years",
    bio: "Professional coach, 3rd in Men's Physique, Diet Plans"
  }, {
    name: "Al Khansaa El Ouardighi",
    specialty: "Women's Fitness",
    experience: "6 years",
    bio: "Expert in women's health and fitness, Healthy Lifestyle."
  }, {
    name: "Mohamed Zouhdi",
    specialty: "Personal Training",
    experience: "5 years",
    bio: "Former athlete turned personal trainer, specializes in weight loss and muscle building."
  }];
  const schedule = {
    monday: [{
      time: "08:00 - 15:30",
      class: "Monday, Wednesday, Friday (Morning)",
      trainer: "Soufian Bakali"
    }, {
      time: "20:30 - 23:30",
      class: "Monday, Wednesday, Friday (Evening)",
      trainer: "Soufian Bakali"
    }, {
      time: "12:30 - 23:30",
      class: "Tuesday, Thursday, Saturday",
      trainer: "Soufian Bakali"
    }],
    tuesday: [{
      time: "16:00 - 20:00",
      class: "Monday, Wednesday, Friday (Evening)",
      trainer: "Al Khansaa El Ouardighi"
    }, {
      time: "08:00 - 12:00",
      class: "Tuesday, Thursday, Saturday (Morning)",
      trainer: "Al Khansaa El Ouardighi"
    }],
    wednesday: [{
      time: "19:00",
      class: "First Session",
      trainer: "Soufian Bakali"
    }, {
      time: "20:00",
      class: "Second Session",
      trainer: "Soufian Bakali"
    }]
  };
  const testimonials = [{
    name: "Lamyae Ezzaouia",
    text: "Aji Trini is the best gym.",
    location: "Tetouan"
  }, {
    name: "Sara Benjelloun",
    text: "Finally found a gym where I feel comfortable and motivated. The women's section is perfect!",
    location: "Tetouan"
  }, {
    name: "Aymane Amghar",
    text: "Aji Trini changed my life! The trainers are amazing and the community is so supportive.",
    location: "Tetouan"
  }, {
    name: "C A",
    text: "This place is a rare gem in Tetouan. Great and professional coaching, clean equipment and airy space. I highly recommend you because this is the best place to become the best version of yourself!",
    location: "Tetouan"
  }];
  const pricingPlans = [{
    name: "Day Pass",
    price: "25 Dh",
    period: "per day",
    features: ["Full gym access", "All equipment", "Locker room", "Free Shower service"]
  }, {
    name: "Monthly",
    price: "200 DH",
    period: "per month",
    features: ["Unlimited access", "All classes", "Nutrition guidance", "Free Shower service"],
    popular: true
  }, {
    name: "Kids Sessions",
    price: "150 DH",
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
          <Button variant="hero" onClick={() => window.open('https://www.instagram.com/ajitrini09?igsh=MWp5bXV4ZXVxNzNpZA==', '_blank')}>Join Now</Button>
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
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://www.instagram.com/ajitrini09?igsh=MWp5bXV4ZXVxNzNpZA==', '_blank')}>
              Join Now
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 py-4" onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' })}>
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

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-primary">Gym</span>
          </h2>
          <div className="max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {[
                  "/lovable-uploads/3e8aab36-8d5b-4d66-9302-e2e2e7c002a3.png",
                  "/lovable-uploads/afbf8b99-7004-4fdc-9424-56299118b2dc.png", 
                  "/lovable-uploads/f7c1c605-56cd-43b5-826b-d36b905c4ec1.png",
                  "/lovable-uploads/648fe006-a102-46a1-8c81-147bcb1fe195.png",
                  "/lovable-uploads/95577eec-5983-4bcf-b81f-4f335a112bdf.png",
                  "/lovable-uploads/d4b5a91d-bfce-4ea0-b507-adfaf294eb4e.png",
                  "/lovable-uploads/ac2fe23f-078e-42c2-a36a-7d122375d481.png",
                  "/lovable-uploads/b7b1d0ea-289f-41be-8b73-cb043aca0083.png",
                  "/lovable-uploads/2339b41a-a0b4-4dc6-9b23-a6b282543629.png",
                  "/lovable-uploads/9f942829-323c-4d9c-abb9-2af04d4ea030.png"
                ].map((image, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                    <div className="group relative overflow-hidden rounded-lg bg-gym-card-bg border border-gym-border hover:border-primary/50 transition-all duration-300">
                      <img 
                        src={image} 
                        alt={`Aji Trini Gym ${index + 1}`}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gym-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-semibold">Aji Trini Gym</p>
                        <p className="text-sm text-primary">Professional Equipment</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gym-card-bg">
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
                  <Button variant={plan.popular ? "hero" : "outline-hero"} className="w-full" onClick={() => window.open('https://www.instagram.com/ajitrini09?igsh=MWp5bXV4ZXVxNzNpZA==', '_blank')}>
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
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name') || '';
                const phone = formData.get('phone') || '';
                const email = formData.get('email') || '';
                const message = formData.get('message') || '';
                const whatsappMessage = `Hello! My name is ${name}. ${phone ? `Phone: ${phone}. ` : ''}${email ? `Email: ${email}. ` : ''}Message: ${message}`;
                window.open(`https://wa.me/212628473604?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input name="name" placeholder="Your Name" className="bg-background border-gym-border" />
                  <Input name="phone" placeholder="Your Phone" className="bg-background border-gym-border" />
                </div>
                <Input name="plan" placeholder="Your Plan" className="bg-background border-gym-border" />
                <Textarea name="message" placeholder="Your Message" rows={4} className="bg-background border-gym-border" />
                <Button type="submit" variant="hero" className="w-full">
                  Send Message
                </Button>
                <Button type="button" variant="outline-hero" className="w-full" onClick={() => window.open('https://wa.me/212628473604', '_blank')}>
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
