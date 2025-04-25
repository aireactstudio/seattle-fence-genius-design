
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/ui/CallToAction";

const FinancingPage = () => {
  return (
    <PageLayout>
      <PageHeader 
        title="Fence Financing Options"
        subtitle="Flexible payment plans to help you get the fence you want."
        backgroundImage="https://www.myfence.com/wp-content/uploads/2024/02/HomePage-fence2.webp"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Finance Your Dream Fence"
                subtitle="Affordable monthly payments for your custom cedar fence project."
              />
              <p className="text-gray-700 mb-6">
                At Seattle Fence, we understand that investing in a quality cedar fence is a significant 
                decision. That's why we've partnered with trusted financing providers to offer flexible 
                payment options that make it easier to get the fence you want, when you want it.
              </p>
              <p className="text-gray-700 mb-6">
                Our financing options allow you to spread the cost of your fence project over time with 
                convenient monthly payments, rather than paying the full amount upfront. This means you 
                can enjoy your beautiful new fence now while paying for it over time in a way that fits 
                your budget.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Quick Application Process</h4>
                    <p className="text-gray-600">Simple online application with fast approval decisions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">Competitive Rates</h4>
                    <p className="text-gray-600">Attractive interest rates with various term options</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-6 w-6 text-cedar mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <div className="ml-3">
                    <h4 className="font-semibold">No Prepayment Penalties</h4>
                    <p className="text-gray-600">Pay off your fence early without additional fees</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6 text-center">Example Payment Plans</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-center mb-2">
                      <span className="text-xl font-bold text-cedar-dark">$5,000 Fence Project</span>
                    </div>
                    <table className="w-full text-gray-700">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2">Term</td>
                          <td className="py-2 text-right font-medium">36 Months</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2">Monthly Payment</td>
                          <td className="py-2 text-right font-medium">$155*</td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt-2 text-xs text-gray-500 italic">
                            *Example rate, subject to credit approval
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-center mb-2">
                      <span className="text-xl font-bold text-cedar-dark">$10,000 Fence Project</span>
                    </div>
                    <table className="w-full text-gray-700">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="py-2">Term</td>
                          <td className="py-2 text-right font-medium">60 Months</td>
                        </tr>
                        <tr className="border-b border-gray-200">
                          <td className="py-2">Monthly Payment</td>
                          <td className="py-2 text-right font-medium">$205*</td>
                        </tr>
                        <tr>
                          <td colSpan={2} className="pt-2 text-xs text-gray-500 italic">
                            *Example rate, subject to credit approval
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500 mb-4">
                    Actual rates and payments will depend on credit approval and selected terms. 
                    Contact us for a personalized quote.
                  </p>
                  <a 
                    href="/contact-us" 
                    className="inline-block bg-cedar text-white hover:bg-cedar-dark py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    Request Financing Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Our Financing Process"
            subtitle="Simple steps to finance your fence project."
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cedar-dark">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Consultation</h3>
              <p className="text-gray-600">
                Meet with our team to design your fence and receive a detailed quote.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cedar-dark">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Apply</h3>
              <p className="text-gray-600">
                Complete our simple financing application online or in person.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cedar-dark">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Approval</h3>
              <p className="text-gray-600">
                Receive a quick decision and review your payment plan options.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-cedar-light rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-cedar-dark">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Installation</h3>
              <p className="text-gray-600">
                Schedule your fence installation and enjoy your new fence!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-2">Who is eligible for financing?</h4>
                  <p className="text-gray-600">
                    Homeowners with qualifying credit may be eligible for financing. The application process 
                    will determine your eligibility and available terms based on your credit history.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Is there a minimum project size for financing?</h4>
                  <p className="text-gray-600">
                    Typically, fence projects over $2,500 are eligible for financing, though this may vary 
                    based on the specific financing provider and current promotions.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">How long does approval take?</h4>
                  <p className="text-gray-600">
                    Most financing applications receive an approval decision within minutes. Once approved, 
                    we can proceed with scheduling your fence installation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Are there any special financing promotions?</h4>
                  <p className="text-gray-600">
                    We periodically offer special financing promotions, such as 0% interest for a limited time 
                    or no payments for the first few months. Contact us to learn about current offers.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-2">Can I pay off my fence early?</h4>
                  <p className="text-gray-600">
                    Yes, our financing options typically allow early payoff without penalties, giving you 
                    flexibility if your financial situation changes.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://www.myfence.com/wp-content/uploads/2024/02/Fence-left.webp" 
                alt="Beautiful cedar fence" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Finance Your New Cedar Fence?"
        subtitle="Contact us today to discuss your project and explore your financing options."
        buttonText="Get Started Today"
        buttonLink="/contact-us"
      />
    </PageLayout>
  );
};

export default FinancingPage;
