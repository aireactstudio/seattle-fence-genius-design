
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/ui/CallToAction";

const WoodGatePage = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Wood Gate Installation"
        subtitle="Custom cedar gates designed to complement and complete your fence."
        backgroundImage="http://seattlefence.com/wp-content/uploads/elementor/thumbs/Custom-Fence-About-Img-qwgio0778vj07dq5t7zjz5f6wr7ce1gmmc0gkdf0s8.jpg"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Custom Wood Gates"
                subtitle="The perfect finishing touch for your premium cedar fence."
              />
              <p className="text-gray-700 mb-6">
                A beautiful fence deserves an equally beautiful gate. At Seattle Fence, we design and build 
                custom wood gates that perfectly complement your fence while providing convenient, secure access 
                to your property. Each gate is crafted with the same attention to detail and quality materials 
                as our fences, ensuring a cohesive look and lasting performance.
              </p>
              <p className="text-gray-700 mb-6">
                Using our innovative Fence Genius software, we design gates that are not only visually appealing 
                but also properly engineered for smooth operation and long-term durability. Whether you need a 
                simple garden gate or a grand entrance to your property, our custom wood gates deliver the perfect combination of form and function.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Custom Designed</h4>
                    <p className="text-gray-600">Perfectly matches your fence style and property needs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Premium Hardware</h4>
                    <p className="text-gray-600">Quality hinges and latches for smooth, reliable operation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Precision Built</h4>
                    <p className="text-gray-600">Engineered for proper alignment and easy operation</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="http://seattlefence.com/wp-content/uploads/elementor/thumbs/Custom-Fence-About-Img-qwgio0778vj07dq5t7zjz5f6wr7ce1gmmc0gkdf0s8.jpg" 
                alt="Custom wood gate" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Gate Styles and Options"
            subtitle="Customizable features to create your perfect gate."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Gate Designs</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Standard Match:</span> Gate design matches your fence pattern
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Arched Top:</span> Elegant curved top for a distinctive look
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Decorative Panel:</span> Custom designs like lattice or patterns
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Double Gates:</span> Wider openings for vehicles or equipment
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Custom Design:</span> Unique patterns to suit your style
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Hardware Options</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Standard Hinges:</span> Durable, weather-resistant hinges
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Heavy-Duty Hinges:</span> For larger or heavier gates
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Self-Closing Hinges:</span> Ensures gate always closes
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Decorative Latches:</span> Stylish and functional options
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Lockable Hardware:</span> Added security for your property
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Additional Features</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Gate Stops:</span> Prevents over-opening and damage
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Anti-Sag Kits:</span> Maintains gate alignment over time
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Custom Address Signs:</span> Integrated house numbers or name plates
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Pre-Staining:</span> Matches your fence finish for protection
                  </div>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-cedar mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <span className="font-medium">Custom Width:</span> Built to your exact opening specifications
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Importance of Proper Gate Installation</h2>
              <p className="text-gray-700 mb-6">
                While gates may seem simple, they actually represent one of the most technically challenging 
                aspects of fence construction. A properly designed and installed gate should open and close 
                smoothly, align perfectly with your fence, and remain that way for years to come.
              </p>
              <p className="text-gray-700 mb-6">
                Unfortunately, many fence contractors struggle with gate installation, resulting in gates that 
                sag, drag, or become misaligned over time. At Seattle Fence, our innovative approach and attention 
                to detail ensure that your gates are built and installed correctly from the start.
              </p>
              <p className="text-gray-700">
                We use premium hardware, proper bracing techniques, and precise measurements to create gates 
                that function flawlessly. Our Fence Genius software helps us design gates with the perfect 
                dimensions for your specific openings, ensuring a precise fit and proper operation.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://www.myfence.com/wp-content/uploads/2024/02/Fence-right.webp" 
                alt="Custom wood gate installation" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Popular Gate Applications"
            subtitle="Custom gates designed for specific needs and locations."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="h-48 bg-wood-pattern bg-cover bg-center rounded mb-6"></div>
              <h3 className="text-xl font-semibold mb-3">Entry Gates</h3>
              <p className="text-gray-600">
                Create a welcoming entrance to your front yard or garden with a beautifully designed gate that makes a statement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="h-48 bg-wood-pattern bg-cover bg-center rounded mb-6"></div>
              <h3 className="text-xl font-semibold mb-3">Side Yard Gates</h3>
              <p className="text-gray-600">
                Provide secure access to your backyard while maintaining privacy and security for your property.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="h-48 bg-wood-pattern bg-cover bg-center rounded mb-6"></div>
              <h3 className="text-xl font-semibold mb-3">Driveway Gates</h3>
              <p className="text-gray-600">
                Large double gates that provide vehicle access while enhancing security and curb appeal.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="h-48 bg-wood-pattern bg-cover bg-center rounded mb-6"></div>
              <h3 className="text-xl font-semibold mb-3">Garden Gates</h3>
              <p className="text-gray-600">
                Charming entrances to garden areas that add character while keeping pets and children safe.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Complete Your Fence with a Custom Gate?"
        subtitle="Contact us today to discuss your gate design and installation needs."
        buttonText="Get a Free Quote"
        buttonLink="/contact-us"
      />
    </PageLayout>
  );
};

export default WoodGatePage;
