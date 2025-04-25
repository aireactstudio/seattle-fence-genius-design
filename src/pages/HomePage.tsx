
import { Home, PenTool, Sparkles, Building, Fence } from "lucide-react";
import { Link } from 'react-router-dom';
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import SectionHeading from "@/components/ui/SectionHeading";
import FenceProject from "@/components/ui/FenceProject";
import CallToAction from "@/components/ui/CallToAction";

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
      imageUrl: "https://seattlefence.com/wp-content/uploads/elementor/thumbs/Wood-Fence-About-Img-qwginn1gl70zou99y2as08qqld07ea0dwivnuhyj7c.jpg",
      title: "Modern Horizontal Cedar Fence",
      description: "Custom design with horizontal boards for a contemporary Seattle home.",
      link: "/gallery"
    },
    {
      imageUrl: "http://seattlefence.com/wp-content/uploads/elementor/thumbs/Custom-Fence-About-Img-qwgio0778vj07dq5t7zjz5f6wr7ce1gmmc0gkdf0s8.jpg",
      title: "Custom Gate Installation",
      description: "Matching cedar gate with custom hardware for enhanced curb appeal.",
      link: "/gallery"
    },
    {
      imageUrl: "https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img03.png",
      title: "Privacy Fence Solution",
      description: "Tall cedar fence designed for maximum privacy in an urban setting.",
      link: "/gallery"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.myfence.com/wp-content/uploads/2024/02/HomePage-fence1.webp" 
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
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-cedar-dark">
                <Link to="/gallery">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Innovative Fence Design & Installation</h2>
              <p className="text-lg text-gray-700 mb-6">
                At Seattle Fence, we've revolutionized the fence installation process using our proprietary Fence Genius software. This technology allows us to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Precisely measure your property for a perfect fit</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Design custom panels that follow your terrain</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Pre-build your fence in a climate-controlled environment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-3">Install your fence quickly and quietly with minimal disruption</span>
                </li>
              </ul>
              <div className="mt-8">
                <Button asChild className="bg-cedar hover:bg-cedar-dark text-white">
                  <Link to="/custom-fence-software">Discover Fence Genius</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img02.png" 
                alt="Fence Genius software visualization" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-forest p-4 rounded-lg shadow-lg text-white">
                <p className="font-semibold">Custom Design</p>
                <p className="text-sm">Built precisely for your property</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
