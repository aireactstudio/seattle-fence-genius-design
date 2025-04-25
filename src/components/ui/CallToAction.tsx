
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage?: string;
  centered?: boolean;
}

const CallToAction = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink,
  backgroundImage,
  centered = true
}: CallToActionProps) => {
  const bgStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : { backgroundImage: 'linear-gradient(135deg, #8B5E3C, #47684E)' };

  return (
    <div 
      className="relative py-16 md:py-20"
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className={`container-custom relative z-10 text-white ${centered ? 'text-center' : ''}`}>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>}
        <Button asChild size="lg" className="bg-white hover:bg-gray-100 text-cedar-dark">
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default CallToAction;
