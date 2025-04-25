
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cedar-dark">Seattle Fence</h3>
            <p className="text-gray-600 mb-4">
              Your leading Seattle-area fence contractors since 1994! 
              Specializing in custom cedar fences designed and built with 
              our innovative Fence Genius software.
            </p>
            <div className="flex items-center mb-2">
              <Phone size={18} className="text-cedar mr-2" />
              <a href="tel:2534551885" className="text-gray-600 hover:text-cedar transition-colors">
                (253) 455-1885
              </a>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={18} className="text-cedar mr-2" />
              <a href="mailto:info@seattlefence.com" className="text-gray-600 hover:text-cedar transition-colors">
                info@seattlefence.com
              </a>
            </div>
            <div className="flex items-start mb-2">
              <MapPin size={18} className="text-cedar mr-2 mt-1 flex-shrink-0" />
              <p className="text-gray-600">
                Servicing the greater Seattle Area
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cedar-dark">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-cedar transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cedar-fence-installation" className="text-gray-600 hover:text-cedar transition-colors">
                  Cedar Fence Installation
                </Link>
              </li>
              <li>
                <Link to="/custom-fence-design" className="text-gray-600 hover:text-cedar transition-colors">
                  Custom Fence Design
                </Link>
              </li>
              <li>
                <Link to="/custom-fence-software" className="text-gray-600 hover:text-cedar transition-colors">
                  Fence Genius Software
                </Link>
              </li>
              <li>
                <Link to="/residential-fencing" className="text-gray-600 hover:text-cedar transition-colors">
                  Residential Fencing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-600 hover:text-cedar transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-gray-600 hover:text-cedar transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cedar-dark">Service Areas</h3>
            <p className="text-gray-600 mb-4">
              We provide premium fence design and installation services throughout the Greater Seattle area including:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <span className="text-gray-600">Seattle</span>
              <span className="text-gray-600">Bellevue</span>
              <span className="text-gray-600">Tacoma</span>
              <span className="text-gray-600">Everett</span>
              <span className="text-gray-600">Renton</span>
              <span className="text-gray-600">Kirkland</span>
              <span className="text-gray-600">Redmond</span>
              <span className="text-gray-600">Issaquah</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} SeattleFence.com. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-cedar transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-cedar transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
