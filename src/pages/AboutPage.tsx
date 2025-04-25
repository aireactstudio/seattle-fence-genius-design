import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import AboutSection from "@/components/sections/AboutSection";
import CallToAction from "@/components/ui/CallToAction";
import { Award, Settings, Sparkles } from "lucide-react";

const AboutPage = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="About Seattle Fence"
        subtitle="Family-owned innovators in the fencing industry since 1994"
        backgroundImage="/lovable-uploads/f8f1f382-7e2e-4f9f-99ec-72f7b817ad47.png"
      />
      
      <AboutSection />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Award className="h-12 w-12 text-cedar mb-4" />
              <h3 className="text-xl font-semibold mb-3">Experience & Expertise</h3>
              <p className="text-gray-600">
                With decades of experience, we've perfected the art of fence design and installation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Settings className="h-12 w-12 text-cedar mb-4" />
              <h3 className="text-xl font-semibold mb-3">Innovation Leaders</h3>
              <p className="text-gray-600">
                Our proprietary Fence Genius software revolutionizes the fence industry with precision and efficiency.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Sparkles className="h-12 w-12 text-cedar mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                Premium materials and cutting-edge technology ensure your fence will stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Experience the Difference?"
        subtitle="Let our family-owned business transform your property with a beautiful, custom-designed fence."
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
      />
    </PageLayout>
  );
};

export default AboutPage;
