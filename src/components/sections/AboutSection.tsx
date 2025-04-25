
import { Users } from 'lucide-react';
import SectionHeading from "@/components/ui/SectionHeading";

const AboutSection = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-cedar" />
              <h3 className="text-2xl font-semibold">Family Owned Values - Father & Son</h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              At Seattle Fence, we're not just a business, we're a family. Spearheaded by a dynamic father-son duo, 
              our company reflects the values of family – trust, reliability, and commitment. With a shared vision, 
              we've created a revolutionary platform that makes custom fence design and installation accessible to all.
            </p>
            <p className="text-lg text-gray-700">
              We understand that every investment in your property is a significant decision. That's why we've crafted 
              our services to offer complete transparency and clarity. Our Fence Genius platform allows you to visualize 
              your custom fence design, enabling you to make informed, confident decisions. With us, you don't just invest 
              in a fence; you invest in peace of mind.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://www.myfence.com/wp-content/uploads/2024/02/Fence-right.webp" 
              alt="Family owned fence business"  
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
