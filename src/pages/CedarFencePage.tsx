
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/ui/CallToAction";

const CedarFencePage = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Cedar Fence Installation"
        subtitle="Premium Western Red Cedar fences designed and built for Seattle homes and businesses."
        backgroundImage="https://www.myfence.com/wp-content/uploads/2024/02/HomePage-fence1.webp"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Why Choose Western Red Cedar?"
                subtitle="The ultimate material for beautiful, durable fences in the Pacific Northwest."
              />
              <p className="text-gray-700 mb-6">
                At Seattle Fence, we specialize exclusively in Western Red Cedar fencing – and for good reason. 
                Cedar is the perfect choice for the Seattle climate, offering natural resistance to our 
                region's moisture, insects, and decay.
              </p>
              <p className="text-gray-700 mb-6">
                Beyond its practical benefits, cedar provides an unmatched natural beauty with rich, warm 
                tones that enhance any property. Our premium cedar fences are not just functional barriers; 
                they're architectural elements that add significant value and curb appeal to your home.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Natural Weather Resistance</h4>
                    <p className="text-gray-600">Withstands Seattle's rainy climate with minimal maintenance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Insect Resistant</h4>
                    <p className="text-gray-600">Natural oils repel termites and other wood-boring insects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Long Lifespan</h4>
                    <p className="text-gray-600">Properly maintained cedar fences can last 15-30 years</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Eco-Friendly Choice</h4>
                    <p className="text-gray-600">Sustainable, renewable resource with minimal environmental impact</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://seattlefence.com/wp-content/uploads/elementor/thumbs/Wood-Fence-About-Img-qwginn1gl70zou99y2as08qqld07ea0dwivnuhyj7c.jpg" 
                alt="Western Red Cedar fence" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Our Cedar Fence Installation Process"
            subtitle="Combining traditional craftsmanship with innovative technology for perfect results."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cedar-dark">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consultation & Design</h3>
              <p className="text-gray-600">
                We meet with you to understand your needs, measure your property, and design your custom fence using our Fence Genius software.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cedar-dark">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Prefabrication</h3>
              <p className="text-gray-600">
                Your fence panels are built off-site in our climate-controlled workshop, ensuring precision and quality.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cedar-dark">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Efficient Installation</h3>
              <p className="text-gray-600">
                We install your new fence quickly and quietly, minimizing disruption while ensuring proper placement and durability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Cedar Fence Styles"
            subtitle="We offer a variety of cedar fence styles to match your property and preferences."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Traditional Privacy Fence</h3>
                <p className="text-gray-600">
                  Our most popular style featuring vertical boards for maximum privacy and classic appeal.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Modern Horizontal Fence</h3>
                <p className="text-gray-600">
                  Contemporary design with horizontal boards for a sleek, modern aesthetic.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lattice Top Fence</h3>
                <p className="text-gray-600">
                  Privacy fence with decorative lattice for an elegant, airy appearance.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Board on Board Fence</h3>
                <p className="text-gray-600">
                  Overlapping boards create complete privacy from any angle with a dimensional look.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Picket Fence</h3>
                <p className="text-gray-600">
                  Classic picket style in cedar for a traditional, charming boundary.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-gray-600">
                  Work with our team to create a unique cedar fence design tailored to your property.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready for a Beautiful New Cedar Fence?"
        subtitle="Contact us today to schedule a consultation and get a free quote for your fence project."
        buttonText="Get a Free Quote"
        buttonLink="/contact-us"
      />
    </PageLayout>
  );
};

export default CedarFencePage;
