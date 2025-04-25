
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/ui/CallToAction";

const WoodFencePage = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Wood Fence Installation"
        subtitle="Premium cedar wood fences designed and built to last in the Pacific Northwest."
        backgroundImage="https://seattlefence.com/wp-content/uploads/elementor/thumbs/Wood-Fence-About-Img-qwginn1gl70zou99y2as08qqld07ea0dwivnuhyj7c.jpg"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Premium Wood Fence Installation"
                subtitle="Quality materials and craftsmanship for beautiful, long-lasting fences."
              />
              <p className="text-gray-700 mb-6">
                At Seattle Fence, we use only the highest quality Western Red Cedar to create beautiful, 
                durable wood fences that stand the test of time. Our wood fence installation process combines 
                traditional craftsmanship with innovative technology for superior results.
              </p>
              <p className="text-gray-700 mb-6">
                Unlike typical fence contractors, our unique Fence Genius software and off-site construction method 
                allows us to build custom wood fence panels in a climate-controlled environment. This results in 
                higher quality, more precise construction, and a faster, cleaner installation process.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Premium Cedar Materials</h4>
                    <p className="text-gray-600">Naturally resistant to decay and insects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Pre-Staining Available</h4>
                    <p className="text-gray-600">Complete protection for maximum longevity</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Precision Engineering</h4>
                    <p className="text-gray-600">Custom built to follow your property's unique contours</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://www.myfence.com/wp-content/uploads/2024/02/Fence-left.webp" 
                alt="Premium wood fence installation" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Our Wood Fence Installation Process"
            subtitle="A revolutionary approach that delivers superior results."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cedar-dark">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600">
                We discuss your needs and design preferences to create the perfect fence plan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cedar-dark">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Post Installation</h3>
              <p className="text-gray-600">
                We precisely set your fence posts, accounting for terrain variations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cedar-dark">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Digital Measurement</h3>
              <p className="text-gray-600">
                Using Fence Genius software, we take precise measurements between posts.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cedar-dark">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Off-Site Production</h3>
              <p className="text-gray-600">
                Your custom fence panels are built in our climate-controlled facility.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cedar-dark">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Quick Installation</h3>
              <p className="text-gray-600">
                We install your pre-built panels for a fast, quiet, and clean process.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              This innovative process results in a wood fence that's built to higher quality standards, 
              installed with minimal disruption to your property, and precisely fitted to your terrain. 
              The result is a beautiful, durable fence that will last for years to come.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Popular Wood Fence Styles"
            subtitle="We offer a variety of wood fence styles to match your home and preferences."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Privacy Fence</h3>
                <p className="text-gray-600 mb-4">
                  Our most popular style, providing maximum privacy and security for your property.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Traditional vertical boards
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    6-foot standard height
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Solid construction
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Horizontal Modern</h3>
                <p className="text-gray-600 mb-4">
                  Contemporary design featuring horizontal boards for a sleek, modern aesthetic.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Clean, modern look
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Various board spacing options
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Popular for contemporary homes
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Board-on-Board</h3>
                <p className="text-gray-600 mb-4">
                  Overlapping boards create complete privacy from any angle with a dimensional look.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Maximum privacy
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Attractive shadow lines
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Looks great from both sides
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Lattice Top</h3>
                <p className="text-gray-600 mb-4">
                  Combines solid lower panels with decorative lattice for an elegant, airy look.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Decorative appearance
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Allows light and airflow
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Various lattice patterns
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Picket Fence</h3>
                <p className="text-gray-600 mb-4">
                  Classic picket design in cedar for a traditional, charming boundary.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Traditional charm
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Various picket styles
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Defines boundaries without blocking views
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
              <div className="h-64 bg-wood-pattern bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-gray-600 mb-4">
                  A unique fence design created specifically for your property and preferences.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Completely personalized
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mix of styles and elements
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-cedar mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Designed for your specific needs
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The "Paint It Black" Series</h2>
              <p className="text-gray-700 mb-6">
                For those seeking a truly distinctive look, our "Paint It Black" series offers a premium 
                pre-finish option that creates a dramatic, contemporary appearance. This exclusive finish 
                combines two colors for a unique aesthetic that makes your fence a true architectural statement.
              </p>
              <p className="text-gray-700 mb-6">
                Beyond its striking appearance, our pre-staining process seals all hidden areas such as between 
                boards and behind rails and trim. This comprehensive coverage ensures maximum protection and 
                extends the lifespan of your cedar fence significantly.
              </p>
              <p className="text-gray-700">
                Whether you choose our "Paint It Black" option or our natural cedar pre-finishing, you'll enjoy 
                a fence that's not only beautiful but also built to last through Seattle's challenging weather 
                conditions for years to come.
              </p>
            </div>
            <div>
              <img 
                src="https://www.myfence.com/wp-content/uploads/2024/02/HomePage-fence2.webp" 
                alt="Paint it Black series fence" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready for Your New Wood Fence?"
        subtitle="Contact us today for a free consultation and quote for your custom cedar fence."
        buttonText="Get a Free Quote"
        buttonLink="/contact-us"
      />
    </PageLayout>
  );
};

export default WoodFencePage;
