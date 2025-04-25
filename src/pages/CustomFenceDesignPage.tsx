import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/ui/CallToAction";

const CustomFenceDesignPage = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Custom Fence Design"
        subtitle="Creating unique, personalized fence solutions for Seattle homes and businesses."
        backgroundImage="/lovable-uploads/d6aeb487-eef2-4451-a74d-19f62d2e2868.png"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Your Vision, Our Expertise"
                subtitle="Bringing your ideal fence to life with our custom design process."
              />
              <p className="text-gray-700 mb-6">
                At Seattle Fence, we understand that every property is unique, and so are the needs of our clients. 
                That's why we offer comprehensive custom fence design services that go beyond standard, 
                one-size-fits-all solutions.
              </p>
              <p className="text-gray-700 mb-6">
                Our design process combines your vision with our expertise, leveraging our innovative Fence 
                Genius software to create a fence that perfectly fits your property's terrain, complements 
                your home's architecture, and fulfills your functional requirements.
              </p>
              <p className="text-gray-700">
                From contemporary horizontal designs to traditional privacy fences with custom details, 
                our team can bring any vision to life with precision and quality craftsmanship.
              </p>
            </div>
            <div>
              <img 
                src="https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img03.png" 
                alt="Custom fence design visualization" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Our Custom Design Process"
            subtitle="A collaborative approach that ensures your complete satisfaction."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-cedar-dark">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Initial Consultation</h3>
              <p className="text-gray-600">
                We discuss your needs, preferences, and budget to understand your vision for the perfect fence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-cedar-dark">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Property Assessment</h3>
              <p className="text-gray-600">
                Our team surveys your property, measuring and analyzing terrain to ensure a perfect fit.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-cedar-dark">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Digital Design</h3>
              <p className="text-gray-600">
                Using our Fence Genius software, we create a detailed design showing exactly how your fence will look.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-cedar-dark">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Collaborative Refinement</h3>
              <p className="text-gray-600">
                We review the design together, making adjustments until you're completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Custom Design Elements"
            subtitle="Personalize your fence with these custom features and options."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Board Configurations</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vertical traditional
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Modern horizontal
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Board-on-board
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Alternating patterns
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Diagonal designs
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Decorative Elements</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lattice tops
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom post caps
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Decorative trim
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accent panels
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Integrated planters
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Finishing Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Natural cedar (unstained)
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Clear sealants
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Transparent stains
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Semi-transparent stains
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  'Paint it Black' premium finish
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Perfect Fit for Any Terrain</h2>
              <p className="text-gray-700 mb-6">
                One of the biggest advantages of our custom design process is our ability to create fences that 
                perfectly follow the contours of your property. Seattle's varied topography often presents 
                challenges for standard fence installations, but our Fence Genius technology overcomes these obstacles.
              </p>
              <p className="text-gray-700 mb-6">
                Whether your property has slopes, hills, or unusual boundaries, we can design a fence that follows 
                these contours seamlessly. Our precise measurements and custom prefabrication ensure that each 
                panel fits perfectly, creating a continuous, even appearance despite terrain variations.
              </p>
              <p className="text-gray-700">
                The result is a custom fence that looks as though it was always meant to be there – a natural 
                extension of your landscape that enhances your property's beauty and functionality.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img02.png" 
                alt="Custom fence design for sloped terrain" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Design Your Custom Cedar Fence?"
        subtitle="Contact us today to schedule a design consultation with our experts."
        buttonText="Start Your Design"
        buttonLink="/contact-us"
      />
    </PageLayout>
  );
};

export default CustomFenceDesignPage;
