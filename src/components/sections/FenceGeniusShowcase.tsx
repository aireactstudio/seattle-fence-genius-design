import { Code, Clock, Sparkles, Brain, Globe, BarChart, FileCheck, Building2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FenceGeniusShowcase = () => {
  return (
    <section className="bg-white section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-forest-light/10 to-cedar-light/10 pointer-events-none" />
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Revolutionary Fence Genius Software
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Seattle Fence is proud to be the creator and owner of Fence Genius™ - our proprietary technology that has completely 
            revolutionized how custom fences are designed, built, and installed.
          </p>
          <div className="inline-block bg-cedar text-white px-4 py-2 rounded-md">
            <p className="font-medium">Exclusive to Seattle Fence - Experience the Future of Fencing</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-forest-light p-3 rounded-lg">
                  <Brain className="h-6 w-6 text-forest" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">See Your Fence Before We Build It</h3>
                  <p className="text-gray-600">
                    Our software creates stunning 3D visualizations of your custom fence before construction begins. You'll see exactly 
                    how your fence follows your property's unique topography, ensuring complete confidence in your investment.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-cedar-light p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-cedar" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Perfect Terrain Integration</h3>
                  <p className="text-gray-600">
                    Fence Genius uses your property's actual topographic data to create a fence that perfectly follows your terrain. 
                    The software's advanced algorithms ensure a smooth visual flow along the top while precisely following ground contours.
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
                    Traditional fence installation takes days of noisy on-site construction. With Fence Genius, we pre-build your custom panels 
                    off-site and can complete installation in just 2 hours, with minimal disruption to your property and neighborhood.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-cedar-light p-3 rounded-lg">
                  <Building2 className="h-6 w-6 text-cedar" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Superior Quality Control</h3>
                  <p className="text-gray-600">
                    By building your fence panels in our climate-controlled facility, we achieve superior craftsmanship and consistency. 
                    Each panel is precisely crafted to match your design, ensuring maximum material yield and highest quality finish.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/d6aeb487-eef2-4451-a74d-19f62d2e2868.png" 
                alt="Fence Genius Software in action" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold text-forest mb-1">Revolutionary Technology</p>
              <p className="text-sm text-gray-600">Designed & owned exclusively by Seattle Fence</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-4">
              The Only Seattle Fence Company with Proprietary Design Software
            </h3>
            <p className="text-gray-600 mb-6">
              From the moment we capture your property's exact measurements with our iOS app to the final 2-hour installation, 
              Fence Genius delivers a level of precision, quality, and efficiency that's simply impossible with traditional methods.
            </p>
          </div>
          <Button asChild size="lg" className="bg-cedar hover:bg-cedar-dark text-white">
            <Link to="/custom-fence-software">Discover How Fence Genius Works</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FenceGeniusShowcase;
