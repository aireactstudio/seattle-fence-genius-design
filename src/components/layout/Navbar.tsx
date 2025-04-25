
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Cedar Fence', path: '/cedar-fence-installation' },
    { label: 'Fence Design', path: '/custom-fence-design' },
    { label: 'Software', path: '/custom-fence-software' },
    { label: 'Residential', path: '/residential-fencing' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact-us' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-cedar-dark">
            <span className="text-forest-dark">Seattle</span>Fence
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className="px-3 py-2 text-sm font-medium hover:text-cedar transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Button 
            asChild
            className="ml-4 bg-cedar hover:bg-cedar-dark text-white"
          >
            <Link to="/contact-us">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container-custom py-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-4 text-base hover:bg-gray-100 hover:text-cedar"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              className="w-full mt-4 bg-cedar hover:bg-cedar-dark text-white"
            >
              <Link to="/contact-us">Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
