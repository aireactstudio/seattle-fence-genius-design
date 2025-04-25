
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/ui/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, Settings, Sparkles, Clock, Globe, BarChart, 
  FileCheck, Building2, Users, Laptop, ArrowRight, CheckCircle
} from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FenceSoftwarePage = () => {
  const benefitsList = [
    { icon: <Clock className="h-5 w-5" />, title: "Increased Efficiency", description: "Reduce project timelines from days to hours with automated design and prefabrication" },
    { icon: <Building2 className="h-5 w-5" />, title: "Superior Quality", description: "Climate-controlled manufacturing environment ensures perfect craftsmanship every time" },
    { icon: <BarChart className="h-5 w-5" />, title: "Cost Savings", description: "Optimized material usage and reduced labor hours mean better value for your investment" },
    { icon: <CheckCircle className="h-5 w-5" />, title: "Perfect Accuracy", description: "Topography integration ensures your fence follows your terrain with precision" },
    { icon: <FileCheck className="h-5 w-5" />, title: "Complete Transparency", description: "See and approve your exact fence design before production begins" },
    { icon: <Users className="h-5 w-5" />, title: "Minimal Disruption", description: "2-hour installation means less noise and disturbance to your home and neighborhood" },
  ];

  const userGroups = [
    {
      title: "For Homeowners",
      description: "Design the perfect fence for your property with confidence. Our software shows you exactly what you'll get before we build it.",
      features: [
        "User-friendly 3D visualization",
        "Accurate cost estimation",
        "Validation of design feasibility",
        "Complete project transparency"
      ]
    },
    {
      title: "For Contractors",
      description: "Our team uses Fence Genius to streamline every project, ensuring efficiency and accuracy from measurement to installation.",
      features: [
        "Digital measurement storage",
        "Precise terrain adaptation",
        "Accelerated production timelines",
        "Reduced on-site labor requirements"
      ]
    },
    {
      title: "For Manufacturers",
      description: "As both creators and manufacturers, we've optimized our production process for maximum efficiency and quality control.",
      features: [
        "Climate-controlled production environment",
        "Precise material calculations",
        "Consistent quality standards",
        "Scalable manufacturing processes"
      ]
    }
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="Fence Genius™: Our Exclusive Innovation"
        subtitle="The revolutionary software we developed to transform the fence industry"
        backgroundImage="https://www.myfence.com/wp-content/uploads/2024/02/Fence-left.webp"
      />
      
      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="The Future of Fence Design & Installation"
                subtitle="Created, owned and exclusively used by Seattle Fence"
              />
              <p className="text-gray-700 mb-6">
                Fence Genius is our revolutionary web-based software platform that has completely transformed how fences are designed, 
                built, and installed. As the creators and exclusive owners of this technology, we've built a system that combines 
                digital precision with craftsmanship to deliver the perfect fence every time.
              </p>
              <p className="text-gray-700 mb-6">
                Unlike traditional fence companies that rely on manual measurements and on-site construction, our proprietary 
                software enables us to capture precise measurements, create exact 3D designs, and pre-fabricate your custom 
                fence panels in our controlled facility before quick installation at your property.
              </p>
              <div className="flex items-center space-x-2 text-forest font-medium">
                <span>Exclusive to Seattle Fence</span>
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div>
              <img 
                src="https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img02.png" 
                alt="Fence Genius software visualization" 
                className="rounded-lg shadow-xl"
              />
              <div className="mt-4 bg-forest-light/20 p-4 rounded-lg border border-forest-light">
                <p className="text-forest-dark font-medium mb-2">
                  "Fence Genius represents a significant advancement in the fencing industry, offering a powerful, 
                  web-based platform that addresses the needs of homeowners, contractors, and manufacturers."
                </p>
                <p className="text-sm text-forest-dark/80 italic">— Industry Assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Key Features Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Key Features of Fence Genius"
            subtitle="Our innovative platform combines technology with craftsmanship"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-forest" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web-Based Design Platform</h3>
                <p className="text-gray-600">
                  Our core platform serves as the interface for designing, estimating, and visualizing your fence. 
                  Experience real-time 3D visualization of your custom fence before we build it, ensuring complete 
                  confidence in your investment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-cedar" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Topography Integration</h3>
                <p className="text-gray-600">
                  Fence Genius integrates your property's actual topographic data, creating designs that perfectly adapt 
                  to your terrain. This ensures a seamless appearance with smooth visual flow while eliminating gaps 
                  and irregularities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-forest" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Off-Site Pre-Manufacturing</h3>
                <p className="text-gray-600">
                  Once your design is approved, we build your custom fence panels in our climate-controlled facility. 
                  This controlled environment ensures superior craftsmanship, consistent quality, and allows for 
                  pre-finishing options like staining.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-cedar" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Estimation & Validation</h3>
                <p className="text-gray-600">
                  Our built-in tools generate accurate cost estimates and validate project feasibility, ensuring 
                  transparency throughout the process. Know exactly what you're getting and what it will cost 
                  before we begin production.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mb-4">
                  <Laptop className="h-6 w-6 text-forest" />
                </div>
                <h3 className="text-xl font-semibold mb-3">iOS Measurement App</h3>
                <p className="text-gray-600">
                  Our proprietary iOS app captures exact measurements between posts and terrain contours, creating a 
                  digital blueprint of your property. This precision ensures your custom panels will fit perfectly 
                  during installation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-cedar" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rapid Installation</h3>
                <p className="text-gray-600">
                  Pre-built panels mean lightning-fast, quiet installations. What used to take days now takes just 
                  2 hours, with minimal disruption to your property and neighborhood. Experience the future of 
                  fence installation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="How Fence Genius Works"
            subtitle="Our innovative process combines technology and craftsmanship"
            centered
          />
          
          <div className="relative mt-16">
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-forest-light/30 -translate-y-1/2 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Precise Measurements</h3>
                <p className="text-gray-600 text-sm">
                  After installing fence posts, we use our proprietary iOS app to capture exact measurements of your property, 
                  including terrain contours and post positions.
                </p>
              </div>
              
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Custom Design</h3>
                <p className="text-gray-600 text-sm">
                  Using these measurements, we create a detailed 3D visualization of your fence in our software. 
                  You'll see exactly how it will look on your property.
                </p>
              </div>
              
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Off-Site Production</h3>
                <p className="text-gray-600 text-sm">
                  Once approved, we build your custom panels in our climate-controlled workshop, ensuring consistent 
                  quality and allowing for pre-finishing options.
                </p>
              </div>
              
              <div className="relative flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center mb-4 z-10">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Rapid Installation</h3>
                <p className="text-gray-600 text-sm">
                  We deliver and install your pre-built, custom panels in just 2 hours, with minimal noise and 
                  disruption to your property.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 p-6 md:p-8 rounded-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4">
                <div className="aspect-square bg-forest-light/20 rounded-lg flex items-center justify-center p-8">
                  <Clock className="h-16 w-16 text-forest" />
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold mb-4">From Arrival to Completion: Just 2 Hours</h3>
                <p className="text-gray-700 mb-4">
                  "From arrival to departure, my fence installation crew of two was there for just 
                  2 hours, moving the loud traditional on-site construction offsite and bringing a pre-fabricated, 
                  pre-stained fence system for a quiet installation to keep our neighborhood's peace."
                </p>
                <p className="text-forest-dark font-medium">
                  — Actual customer experience with Fence Genius installation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="The Fence Genius Advantage"
            subtitle="Six ways our technology delivers superior results"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {benefitsList.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex items-start gap-4">
                <div className="text-cedar mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Target Audience Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Who Benefits from Fence Genius"
            subtitle="Our technology serves homeowners, contractors, and manufacturers"
            centered
          />
          
          <div className="mt-12 overflow-hidden">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {userGroups.map((group, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="p-1">
                      <Card className="border-none shadow-lg">
                        <CardContent className="p-6">
                          <h3 className="text-2xl font-bold text-forest mb-3">{group.title}</h3>
                          <p className="text-gray-700 mb-6">{group.description}</p>
                          <ul className="space-y-2">
                            {group.features.map((feature, fIndex) => (
                              <li key={fIndex} className="flex items-start gap-2">
                                <ArrowRight className="h-5 w-5 text-cedar shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-6">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      
      {/* Video Section */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7">
              <div className="aspect-video bg-black rounded-lg shadow-xl overflow-hidden">
                <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <svg className="h-16 w-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xl mb-2">Fence Genius in Action</p>
                    <p className="text-gray-400">Watch how our proprietary technology transforms fence installation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold mb-6">Seattle's Fence Innovation Leader</h2>
              <p className="text-gray-700 mb-6">
                In this video, you'll see Fence Genius technology in action, demonstrating how our proprietary software 
                enables us to install a perfect custom fence in just 2 hours. Watch as our team installs pre-built panels 
                that follow your property's contours with precision.
              </p>
              <p className="text-gray-700 mb-6">
                Notice how the top of the fence follows a smooth visual flow through the contour of the ground, while the bottom 
                adapts to the direct ups and downs of the terrain. This precision is achieved through the Fence Genius 
                algorithms, delivering an arguably perfect fence system with maximum material yield.
              </p>
              <div className="flex justify-start">
                <Button asChild className="bg-cedar hover:bg-cedar-dark text-white">
                  <Link to="/contact-us">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Experience the Fence Genius Difference"
        subtitle="Get a perfect fence with our innovative technology. Contact us for a consultation today."
        buttonText="Get Started Today"
        buttonLink="/contact-us"
        backgroundImage="https://www.myfence.com/wp-content/uploads/2024/02/Fence-left.webp"
      />
    </PageLayout>
  );
};

export default FenceSoftwarePage;
