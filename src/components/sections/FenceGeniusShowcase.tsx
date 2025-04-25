
import { Code, Clock, Sparkles, Brain } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FenceGeniusShowcase = () => {
  return (
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-forest-light/10 to-cedar-light/10 pointer-events-none" />
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Revolutionizing Fence Installation with Our Proprietary Technology
          </h2>
          <p className="text-lg text-gray-700">
            Experience the future of fencing with our exclusive Fence Genius software - developed and owned by Seattle Fence to transform how custom fences are designed, built, and installed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-forest-light p-3 rounded-lg">
                  <Brain className="h-6 w-6 text-forest" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Precision Design with AI</h3>
                  <p className="text-gray-600">
                    Our iOS app captures exact measurements between posts and terrain contours. The software's algorithms create a perfect fence design that follows your property's unique landscape.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-cedar-light p-3 rounded-lg">
                  <Sparkles className="h-6 w-6 text-cedar" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pre-fabricated Excellence</h3>
                  <p className="text-gray-600">
                    Once designed, your custom panels are built in our climate-controlled facility. Each panel is precisely crafted to match your terrain, ensuring a perfect fit and superior quality.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-forest-light p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-forest" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2-Hour Installation</h3>
                  <p className="text-gray-600">
                    Pre-built panels mean lightning-fast, quiet installations. What used to take days now takes just hours, with minimal disruption to your property and neighborhood.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-cedar-light p-3 rounded-lg">
                  <Code className="h-6 w-6 text-cedar" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">See Before You Buy</h3>
                  <p className="text-gray-600">
                    Our software provides detailed 3D visualizations of your fence before construction begins. Know exactly what you're getting and make informed decisions with complete confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <img 
              src="https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img02.png"
              alt="Fence Genius software visualization"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-forest mb-1">Lightning Fast Installation</p>
              <p className="text-sm text-gray-600">2-hour install time with pre-built panels</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Experience the Most Innovative Fence Installation in Seattle
            </h3>
            <p className="text-gray-600 mb-6">
              Our revolutionary Fence Genius software delivers unmatched precision, quality, and efficiency. See why we're leading the industry in custom fence design and installation.
            </p>
          </div>
          <Button asChild size="lg" className="bg-cedar hover:bg-cedar-dark text-white">
            <Link to="/custom-fence-software">Learn More About Fence Genius</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FenceGeniusShowcase;
