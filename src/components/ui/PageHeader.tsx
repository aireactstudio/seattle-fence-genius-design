
import { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle, backgroundImage, children }: PageHeaderProps) => {
  const bgStyle = backgroundImage 
    ? { backgroundImage: `url(${backgroundImage})` }
    : { backgroundImage: 'linear-gradient(135deg, #8B5E3C, #47684E)' };

  return (
    <div 
      className="relative flex items-center py-24 md:py-32" 
      style={bgStyle}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="container-custom relative z-10 text-white">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl max-w-2xl animate-slide-up">{subtitle}</p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
