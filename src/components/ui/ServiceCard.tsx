
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl border border-gray-100 h-full flex flex-col">
      <div className="text-cedar-dark mb-4 w-16 h-16 flex items-center justify-center bg-gray-50 rounded-md">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={link} 
        className="text-cedar font-semibold hover:text-cedar-dark transition-colors inline-flex items-center"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
