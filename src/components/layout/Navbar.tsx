
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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

  // Define the services submenu items
  const fencingServicesItems = [
    { 
      title: "Cedar Fence Installation", 
      path: "/cedar-fence-installation", 
      description: "Premium Western Red Cedar fences designed for Seattle homes"
    },
    {
      title: "Wood Fence Installation",
      path: "/wood-fence-installation",
      description: "High-quality wood fencing solutions for durability and aesthetics"
    },
    {
      title: "Wood Gate Installation",
      path: "/wood-gate-installation",
      description: "Custom designed gates that complement your fence perfectly"
    },
    {
      title: "Custom Fence Design",
      path: "/custom-fence-design",
      description: "Create a unique fence that perfectly matches your home's style"
    },
    {
      title: "Residential Fencing",
      path: "/residential-fencing",
      description: "Beautiful fencing solutions for homes throughout Seattle"
    }
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
          <Link 
            to="/" 
            className="px-3 py-2 text-sm font-medium hover:text-cedar transition-colors duration-300"
          >
            Home
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium hover:text-cedar transition-colors duration-300 bg-transparent hover:bg-transparent focus:bg-transparent">
                  Services <ChevronDown className="h-4 w-4 ml-1" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {fencingServicesItems.map((service) => (
                      <li key={service.path} className="row-span-1">
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.path}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link 
            to="/custom-fence-software" 
            className="px-3 py-2 text-sm font-medium hover:text-cedar transition-colors duration-300"
          >
            Fence Genius Software
          </Link>
          
          <Link 
            to="/gallery" 
            className="px-3 py-2 text-sm font-medium hover:text-cedar transition-colors duration-300"
          >
            Gallery
          </Link>
          
          <Link 
            to="/about" 
            className="px-3 py-2 text-sm font-medium hover:text-cedar transition-colors duration-300"
          >
            About
          </Link>
          
          <Link 
            to="/contact-us" 
            className="px-3 py-2 text-sm font-medium hover:text-cedar transition-colors duration-300"
          >
            Contact
          </Link>
          
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
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-base hover:bg-gray-100 hover:text-cedar"
            >
              Home
            </Link>
            
            {/* Mobile Services Dropdown */}
            <div className="block py-3 px-4 text-base border-b border-gray-100">
              <div className="font-medium">Services</div>
              <div className="ml-4 mt-2 space-y-2">
                {fencingServicesItems.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-sm hover:text-cedar"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/custom-fence-software"
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-base hover:bg-gray-100 hover:text-cedar"
            >
              Fence Genius Software
            </Link>
            
            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-base hover:bg-gray-100 hover:text-cedar"
            >
              Gallery
            </Link>
            
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-base hover:bg-gray-100 hover:text-cedar"
            >
              About
            </Link>
            
            <Link
              to="/contact-us"
              onClick={() => setIsOpen(false)}
              className="block py-3 px-4 text-base hover:bg-gray-100 hover:text-cedar"
            >
              Contact
            </Link>
            
            <Button 
              asChild
              className="w-full mt-4 bg-cedar hover:bg-cedar-dark text-white"
            >
              <Link to="/contact-us" onClick={() => setIsOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
