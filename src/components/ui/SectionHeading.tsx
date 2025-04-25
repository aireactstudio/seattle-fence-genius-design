
import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  children?: ReactNode;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = false,
  children 
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
