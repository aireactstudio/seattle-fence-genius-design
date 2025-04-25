
import { useState } from 'react';
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";

const ContactPage = () => {
  const [activeTab, setActiveTab] = useState("contact");
  
  return (
    <PageLayout>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with our team to discuss your fence project."
        backgroundImage="https://www.myfence.com/wp-content/uploads/2024/02/Fence-left.webp"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading 
                title="Get in Touch"
                subtitle="We're here to answer your questions and provide expert advice for your fence project."
              />
              
              <div className="space-y-8 mt-6">
                <div className="flex items-start">
                  <div className="bg-cedar-light p-3 rounded-full mr-4">
                    <svg className="h-6 w-6 text-cedar-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <a href="tel:2534551885" className="text-gray-700 hover:text-cedar transition-colors">
                      (253) 455-1885
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      Monday - Friday: 8am - 6pm<br />
                      Saturday: 9am - 3pm
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cedar-light p-3 rounded-full mr-4">
                    <svg className="h-6 w-6 text-cedar-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:info@seattlefence.com" className="text-gray-700 hover:text-cedar transition-colors">
                      info@seattlefence.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      We typically respond within 24 hours
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cedar-light p-3 rounded-full mr-4">
                    <svg className="h-6 w-6 text-cedar-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Service Area</h3>
                    <p className="text-gray-700">
                      Serving the Greater Seattle Area including:
                    </p>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2 text-gray-600 text-sm">
                      <span>Seattle</span>
                      <span>Bellevue</span>
                      <span>Tacoma</span>
                      <span>Kirkland</span>
                      <span>Redmond</span>
                      <span>Renton</span>
                      <span>Everett</span>
                      <span>Issaquah</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 hover:bg-cedar hover:text-white text-gray-600 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-cedar hover:text-white text-gray-600 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-cedar hover:text-white text-gray-600 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 hover:bg-cedar hover:text-white text-gray-600 p-3 rounded-full transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <SectionHeading 
              title="Frequently Asked Questions"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">What areas do you service?</h4>
                <p className="text-gray-600">
                  We service the Greater Seattle area including Seattle, Bellevue, Tacoma, Kirkland, 
                  Redmond, Renton, Everett, Issaquah, and surrounding communities.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">How long does a fence installation take?</h4>
                <p className="text-gray-600">
                  Our innovative process typically allows us to complete most residential fence installations 
                  in 1-3 days after the posts are set, significantly faster than traditional methods.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Do you offer free estimates?</h4>
                <p className="text-gray-600">
                  Yes, we provide free consultations and estimates for all fence projects. Contact us to 
                  schedule yours today.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">What types of wood do you use?</h4>
                <p className="text-gray-600">
                  We exclusively use premium Western Red Cedar for all our fence installations, offering 
                  the best combination of beauty, durability, and weather resistance.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">Are you licensed and insured?</h4>
                <p className="text-gray-600">
                  Yes, Seattle Fence is fully licensed, bonded, and insured for your protection and peace of mind.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-2">How does your Fence Genius software work?</h4>
                <p className="text-gray-600">
                  Our proprietary software takes precise measurements of your installed posts, allowing us 
                  to design and build custom panels off-site that perfectly fit your property's unique contours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="bg-cedar text-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6 max-w-2xl mx-auto">
              Contact us today to schedule a consultation and take the first step toward your beautiful new cedar fence.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <a href="tel:2534551885" className="bg-white text-cedar-dark hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (253) 455-1885
              </a>
              <a href="mailto:info@seattlefence.com" className="border-2 border-white text-white hover:bg-white hover:text-cedar-dark font-semibold py-3 px-6 rounded-lg transition-colors inline-flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ContactPage;
