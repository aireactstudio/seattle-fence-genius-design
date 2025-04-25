
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/ui/CallToAction";

const ResidentialFencingPage = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Residential Fencing"
        subtitle="Premium cedar fencing solutions for Seattle area homes."
        backgroundImage="https://www.myfence.com/wp-content/uploads/2024/02/HomePage-fence2.webp"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Enhance Your Home with Premium Cedar Fencing"
                subtitle="Beautiful, durable cedar fences designed specifically for Seattle area homes."
              />
              <p className="text-gray-700 mb-6">
                A well-designed fence does more than just mark your property line – it enhances your home's 
                security, privacy, and curb appeal. At Seattle Fence, we specialize in creating beautiful 
                residential cedar fences that perfectly complement your home while providing the functionality 
                you need.
              </p>
              <p className="text-gray-700 mb-6">
                Our residential fencing solutions are designed specifically for the Pacific Northwest climate 
                and lifestyle. Using premium Western Red Cedar and innovative design and installation methods, 
                we create fences that stand the test of time while adding significant value to your property.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Enhanced Privacy</h4>
                    <p className="text-gray-600">Create a private sanctuary for your family</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Improved Security</h4>
                    <p className="text-gray-600">Define boundaries and deter unwanted access</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Increased Property Value</h4>
                    <p className="text-gray-600">Quality fencing is an investment that pays dividends</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://www.myfence.com/wp-content/uploads/2024/02/Fence-right.webp" 
                alt="Beautiful cedar residential fence" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Residential Fencing Options"
            subtitle="Explore our most popular residential fence styles and applications."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Privacy Fences</h3>
                <p className="text-gray-600 mb-4">
                  Our most popular residential option, providing security and creating private outdoor living spaces.
                  Available in various heights and designs.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    6' standard height
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Vertical or horizontal boards
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Optional decorative tops
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Decorative Fences</h3>
                <p className="text-gray-600 mb-4">
                  Beautiful designs that enhance your home's appearance while providing partial privacy and boundary definition.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Lattice top designs
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
                    Accent panels and sections
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Property Line Fences</h3>
                <p className="text-gray-600 mb-4">
                  Clearly mark your property boundaries while complementing your landscaping and home design.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Various height options
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Good neighbor designs
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Follows property contours
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Garden & Accent Fences</h3>
                <p className="text-gray-600 mb-4">
                  Define specific areas within your property and create visual interest in your landscaping.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Garden enclosures
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Decorative features
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom designs
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Pet & Child Safety Fences</h3>
                <p className="text-gray-600 mb-4">
                  Keep your loved ones safe while maintaining the aesthetic appeal of your property.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Secure gate solutions
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Small spacing options
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Pool enclosures
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Matching Gates</h3>
                <p className="text-gray-600 mb-4">
                  Complete your fence with a beautiful, functional gate that perfectly matches your fence design.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Single and double gates
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Custom hardware options
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Self-closing options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Residential Fencing Process</h2>
              <p className="text-gray-700 mb-6">
                At Seattle Fence, we've streamlined the residential fence installation process to make it as 
                smooth and stress-free as possible. Our approach combines personalized service with innovative 
                technology to deliver exceptional results for every home.
              </p>
              
              <ol className="space-y-6 mt-8">
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-cedar rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Consultation & Design</h4>
                    <p className="text-gray-600">
                      We meet with you to discuss your needs, preferences, and budget. Our team surveys your 
                      property and works with you to design the perfect fence using our Fence Genius software.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-cedar rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Proposal & Approval</h4>
                    <p className="text-gray-600">
                      We provide a detailed proposal with 3D visualizations of your fence. You'll know exactly 
                      what you're getting and how much it will cost before we begin construction.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-cedar rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Post Installation & Measurement</h4>
                    <p className="text-gray-600">
                      Our team installs the fence posts and then uses our proprietary software to take precise 
                      measurements, ensuring each panel will fit perfectly with your property's contours.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-cedar rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-semibold">4</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Custom Fabrication</h4>
                    <p className="text-gray-600">
                      Your fence panels are built in our climate-controlled workshop using premium Western Red Cedar. 
                      Pre-staining options are available for maximum protection and longevity.
                    </p>
                  </div>
                </li>
                
                <li className="flex">
                  <div className="flex-shrink-0 w-8 h-8 bg-cedar rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-semibold">5</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Quick, Clean Installation</h4>
                    <p className="text-gray-600">
                      We install your pre-built fence panels quickly and efficiently, with minimal disruption to 
                      your property. The result is a beautiful, durable fence installed in a fraction of the time 
                      of traditional methods.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img03.png" 
                alt="Residential fence installation process" 
                className="rounded-lg shadow-xl"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <img 
                  src="http://seattlefence.com/wp-content/uploads/elementor/thumbs/Custom-Fence-About-Img-qwgio0778vj07dq5t7zjz5f6wr7ce1gmmc0gkdf0s8.jpg" 
                  alt="Cedar fence detail" 
                  className="rounded-lg shadow-md h-40 w-full object-cover"
                />
                <img 
                  src="https://seattlefence.com/wp-content/uploads/elementor/thumbs/Wood-Fence-About-Img-qwginn1gl70zou99y2as08qqld07ea0dwivnuhyj7c.jpg" 
                  alt="Completed residential fence" 
                  className="rounded-lg shadow-md h-40 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Transform Your Home with a Beautiful Cedar Fence?"
        subtitle="Contact us today for a free consultation and quote for your residential fence project."
        buttonText="Get a Free Quote"
        buttonLink="/contact-us"
      />
    </PageLayout>
  );
};

export default ResidentialFencingPage;
