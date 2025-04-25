
interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
}

const TestimonialCard = ({ quote, name, location }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <svg className="h-8 w-8 text-cedar-light mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.51.88-3.995 2.987-3.995 5.407h4v10.442h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.511.88-3.996 2.987-3.996 5.407h4v10.442h-10z" />
      </svg>
      <p className="text-gray-700 mb-4">{quote}</p>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
