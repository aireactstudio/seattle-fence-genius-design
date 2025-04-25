import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/ui/CallToAction";
import { Code, Settings, Sparkles, Clock } from "lucide-react";

const FenceSoftwarePage = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Our Revolutionary Fence Genius Software"
        subtitle="Exclusive proprietary technology developed by Seattle Fence to transform the fence industry"
        backgroundImage="https://www.myfence.com/wp-content/uploads/2024/02/Fence-left.webp"
      />
      
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Fence Genius: Our Exclusive Innovation"
                subtitle="We developed Fence Genius to revolutionize how fences are designed, built, and installed"
              />
              <p className="text-gray-700 mb-6">
                As the creators and owners of Fence Genius software, we've revolutionized the fence industry with our 
                proprietary technology. This innovative platform enables us to design, prefabricate, and install custom 
                fences with unprecedented precision and efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-6 w-6 text-cedar mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Precise Measurements & Design</h4>
                    <p className="text-gray-600">Our iOS app captures exact measurements between posts and terrain contours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Settings className="h-6 w-6 text-cedar mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Pre-fabrication Excellence</h4>
                    <p className="text-gray-600">Custom panels built in our climate-controlled facility for superior quality</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-cedar mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Fast & Quiet Installation</h4>
                    <p className="text-gray-600">2-hour installations with pre-built panels for minimal disruption</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="h-6 w-6 text-cedar mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Smart Algorithms</h4>
                    <p className="text-gray-600">Automated calculations for perfect terrain adaptation and material optimization</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img02.png" 
                alt="Fence Genius software visualization" 
                className="rounded-lg shadow-xl"
              />
              <div className="mt-4 bg-forest-light p-4 rounded-lg">
                <p className="text-sm text-forest-dark font-medium">
                  See your custom fence design before installation with our proprietary Fence Genius visualization technology
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="How Fence Genius Works"
            subtitle="Our innovative process combines technology and craftsmanship for perfect results."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Precise Measurements</h3>
              <p className="text-gray-600 mb-5">
                After installing fence posts, we use our proprietary iOS app to take precise measurements of your property.
                This captures the exact distances between posts and the unique contours of your terrain.
              </p>
              <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Custom Design Software</h3>
              <p className="text-gray-600 mb-5">
                Using the measurements, we work with you to design your fence in our Fence Genius software.
                You'll see exactly how your fence will look, including how it follows the contours of your property.
              </p>
              <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Off-Site Construction</h3>
              <p className="text-gray-600 mb-5">
                Once the design is approved, we build your custom fence panels in our climate-controlled workshop.
                This ensures consistent quality and allows for pre-finishing options like staining.
              </p>
              <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
                <svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="The Fence Genius Advantage"
            subtitle="Why our innovative approach delivers superior results."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-forest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Superior Quality</h3>
              <p className="text-gray-600">
                Building in a controlled environment with precise measurements results in better craftsmanship and consistency.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-forest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Faster Installation</h3>
              <p className="text-gray-600">
                Pre-built panels can be installed quickly with minimal on-site disruption, noise, and mess.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-forest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Perfect Fit</h3>
              <p className="text-gray-600">
                Custom panels follow your terrain precisely, eliminating gaps and creating a seamless appearance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-12 h-12 bg-forest-light rounded-full flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-forest-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Transparency</h3>
              <p className="text-gray-600">
                You see exactly what you're getting in our 3D visualizations before construction begins.
              </p>
            </div>
          </div>
        </div>
      </section>
      
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
                    <p className="text-gray-400">Watch how our innovative technology transforms the fence installation process</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold mb-6">See the Difference</h2>
              <p className="text-gray-700 mb-6">
                In this video, you can see how our Fence Genius technology enables us to install a custom fence with 
                unprecedented speed and precision. Watch as our team installs pre-built panels that perfectly follow 
                the property's contours, creating a seamless, beautiful fence in a fraction of the time required by 
                traditional methods.
              </p>
              <p className="text-gray-700 mb-6">
                Notice how quiet and clean the installation process is - with minimal disruption to the property and 
                neighborhood. This is the future of fence installation, available now through Seattle Fence.
              </p>
              <p className="text-gray-700">
                Our clients consistently tell us they're amazed by how smooth and efficient the process is, and how 
                perfectly the final product matches what they saw in our digital designs.
              </p>
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
