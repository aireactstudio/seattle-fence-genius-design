
import { Link } from 'react-router-dom';

interface FenceProjectProps {
  imageUrl: string;
  title: string;
  description: string;
  link?: string;
}

const FenceProject = ({ imageUrl, title, description, link }: FenceProjectProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl border border-gray-100">
      <div className="h-64 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {link && (
          <Link 
            to={link}
            className="text-cedar font-semibold hover:text-cedar-dark transition-colors inline-flex items-center"
          >
            View Details
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
        )}
      </div>
    </div>
  );
};

export default FenceProject;
