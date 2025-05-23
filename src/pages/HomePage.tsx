import { Home, PenTool, Sparkles, Building, Fence } from "lucide-react";
import { Link } from 'react-router-dom';
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FenceProject from "@/components/ui/FenceProject";
import CallToAction from "@/components/ui/CallToAction";
import FenceGeniusShowcase from "@/components/sections/FenceGeniusShowcase";

const HomePage = () => {
  const services = [
    {
      title: "Residential Fencing",
      description: "Beautiful cedar fencing solutions designed to enhance your home's security, privacy, and curb appeal.",
      icon: <Home className="h-8 w-8" />,
      link: "/residential-fencing"
    },
    {
      title: "Custom Fence Design",
      description: "Work with our experts to design a unique fence that perfectly matches your home's style and your specific needs.",
      icon: <PenTool className="h-8 w-8" />,
      link: "/custom-fence-design"
    },
    {
      title: "Fence Genius Software",
      description: "Experience our innovative approach using proprietary software for precise measurements and perfect installations.",
      icon: <Sparkles className="h-8 w-8" />,
      link: "/custom-fence-software"
    },
    {
      title: "Wood Gate Installation",
      description: "Custom designed gates that complement your fence and provide secure access points to your property.",
      icon: <Fence className="h-8 w-8" />,
      link: "/wood-gate-installation"
    }
  ];

  const testimonials = [
    {
      quote: "The Seattle Fence team created an absolutely beautiful cedar fence for our property. Their Fence Genius software allowed them to design the perfect solution for our sloped yard.",
      name: "Michael Johnson",
      location: "Seattle, WA"
    },
    {
      quote: "I was amazed by how quickly and efficiently they installed our new fence. The pre-built panels meant minimal noise and disruption, and the quality is outstanding.",
      name: "Jennifer Williams",
      location: "Bellevue, WA"
    },
    {
      quote: "Their custom design process is incredible. We got exactly what we wanted, and the cedar fence has held up perfectly through multiple Seattle winters.",
      name: "Robert Taylor",
      location: "Kirkland, WA"
    }
  ];

  const featuredProjects = [
    {
      imageUrl: "/lovable-uploads/f8f1f382-7e2e-4f9f-99ec-72f7b817ad47.png",
      title: "Horizontal Cedar Privacy Fence",
      description: "Premium horizontal cedar fence with clean lines and modern aesthetics",
      link: "/gallery"
    },
    {
      imageUrl: "/lovable-uploads/d6aeb487-eef2-4451-a74d-19f62d2e2868.png",
      title: "Custom Height Fence Design",
      description: "Stepped cedar fence following natural terrain gradient",
      link: "/gallery"
    },
    {
      imageUrl: "/lovable-uploads/7a3eee8d-5266-4b5f-a486-30e5b3c0e127.png",
      title: "Modern Semi-Privacy Fence",
      description: "Horizontal slat design offering partial privacy with style",
      link: "/gallery"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/f8f1f382-7e2e-4f9f-99ec-72f7b817ad47.png"
            alt="Beautiful cedar fence" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Seattle's Trusted Fence Company
            </h1>
            <p className="text-xl mb-8 animate-slide-up">
              Premium cedar fencing solutions designed and built with innovative technology for Seattle homes and businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-cedar hover:bg-cedar-dark text-white">
                <Link to="/contact-us">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white bg-cedar-dark/40 hover:bg-white hover:text-cedar-dark">
                <Link to="/gallery">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fence Genius Showcase */}
      <FenceGeniusShowcase />


      {/* Services Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Our Fence Services" 
            subtitle="We specialize in premium cedar fencing with innovative design and installation methods."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="Browse through some of our recent fence installations throughout the Seattle area."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <FenceProject 
                key={index}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-cedar hover:bg-cedar-dark text-white">
              <Link to="/gallery">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="What Our Clients Say" 
            subtitle="Don't just take our word for it - hear from our satisfied customers throughout Seattle."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                location={testimonial.location}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Family Business */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Family Owned & Operated</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Seattle Fence, we're not just a business, we're a family. Spearheaded by a dynamic father-son duo, our company reflects the values of family – trust, reliability, and commitment.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With a shared vision, we've created a platform that makes custom fence design and installation accessible to all. We understand that every investment in your property is a significant decision. That's why we've crafted our services to offer complete transparency and clarity.
              </p>
              <p className="text-lg text-gray-700">
                Our platform allows you to visualize your custom fence design, enabling you to make informed, confident decisions. With us, you don't just invest in a fence; you invest in peace of mind.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://www.myfence.com/wp-content/uploads/2024/02/Fence-right.webp" 
                alt="Family owned business" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction 
        title="Ready to Transform Your Property with a Beautiful Cedar Fence?"
        subtitle="Contact us today for a free consultation and quote. We serve Seattle, Bellevue, and surrounding areas."
        buttonText="Get a Free Quote"
        buttonLink="/contact-us"
        backgroundImage="https://www.myfence.com/wp-content/uploads/2024/02/Fence-left.webp"
      />
    </PageLayout>
  );
};

export default HomePage;
