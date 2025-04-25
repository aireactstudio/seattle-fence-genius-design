
import { useState } from 'react';
import PageLayout from "@/components/layout/PageLayout";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import CallToAction from "@/components/ui/CallToAction";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Modern Horizontal Cedar Fence",
    description: "Contemporary horizontal fence design for a Seattle home.",
    category: "horizontal",
    imageUrl: "https://seattlefence.com/wp-content/uploads/elementor/thumbs/Wood-Fence-About-Img-qwginn1gl70zou99y2as08qqld07ea0dwivnuhyj7c.jpg"
  },
  {
    id: 2,
    title: "Traditional Privacy Fence",
    description: "Classic vertical board privacy fence in Western Red Cedar.",
    category: "privacy",
    imageUrl: "https://www.myfence.com/wp-content/uploads/2024/02/HomePage-fence1.webp"
  },
  {
    id: 3,
    title: "Custom Cedar Gate",
    description: "Matching gate designed for a horizontal fence installation.",
    category: "gates",
    imageUrl: "http://seattlefence.com/wp-content/uploads/elementor/thumbs/Custom-Fence-About-Img-qwgio0778vj07dq5t7zjz5f6wr7ce1gmmc0gkdf0s8.jpg"
  },
  {
    id: 4,
    title: "Contour-Following Fence",
    description: "Cedar fence designed to follow sloped terrain perfectly.",
    category: "custom",
    imageUrl: "https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img03.png"
  },
  {
    id: 5,
    title: "Board on Board Privacy Fence",
    description: "Overlapping boards for complete privacy from all angles.",
    category: "privacy",
    imageUrl: "https://www.myfence.com/wp-content/uploads/2024/02/Fence-right.webp"
  },
  {
    id: 6,
    title: "Paint It Black Series",
    description: "Premium pre-stained fence with our exclusive two-tone finish.",
    category: "custom",
    imageUrl: "https://www.myfence.com/wp-content/uploads/2024/02/Fence-left.webp"
  },
  {
    id: 7,
    title: "Modern Double Gate",
    description: "Contemporary double gate for driveway access.",
    category: "gates",
    imageUrl: "https://www.myfence.com/wp-content/uploads/2024/02/HomePage-fence2.webp"
  },
  {
    id: 8,
    title: "Horizontal Slat Fence",
    description: "Modern horizontal slat design with spacing for partial visibility.",
    category: "horizontal",
    imageUrl: "https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img02.png"
  },
  {
    id: 9,
    title: "Lattice Top Fence",
    description: "Privacy fence with decorative lattice top section.",
    category: "custom",
    imageUrl: "https://seattlefence.com/wp-content/uploads/elementor/thumbs/Wood-Fence-About-Img-qwginn1gl70zou99y2as08qqld07ea0dwivnuhyj7c.jpg"
  },
];

const GalleryPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
  
  const filterButtons = [
    { id: "all", label: "All Projects" },
    { id: "privacy", label: "Privacy Fences" },
    { id: "horizontal", label: "Horizontal Designs" },
    { id: "gates", label: "Custom Gates" },
    { id: "custom", label: "Specialty Projects" }
  ];
  
  return (
    <PageLayout>
      <PageHeader 
        title="Our Fence Gallery"
        subtitle="Explore our portfolio of custom cedar fence installations throughout Seattle."
        backgroundImage="https://www.myfence.com/wp-content/uploads/2024/02/HomePage-fence1.webp"
      />
      
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading 
            title="Browse Our Work"
            subtitle="Custom designed and installed cedar fences throughout the Seattle area."
            centered
          />
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filterButtons.map(button => (
              <Button
                key={button.id}
                variant={activeFilter === button.id ? "default" : "outline"}
                className={activeFilter === button.id ? "bg-cedar hover:bg-cedar-dark" : ""}
                onClick={() => setActiveFilter(button.id)}
              >
                {button.label}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <div className="flex items-center">
                    <span className="text-xs uppercase tracking-wider bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {project.category === "horizontal" && "Horizontal Design"}
                      {project.category === "privacy" && "Privacy Fence"}
                      {project.category === "gates" && "Custom Gate"}
                      {project.category === "custom" && "Specialty Project"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Fence Genius Advantage</h2>
              <p className="text-gray-700 mb-6">
                What sets our gallery of completed projects apart is our innovative approach to fence design 
                and installation. Using our proprietary Fence Genius software, we create custom fences that 
                perfectly follow your property's unique terrain.
              </p>
              <p className="text-gray-700 mb-6">
                Each project featured in our gallery represents a fence that was custom designed in collaboration 
                with the homeowner, then built in our climate-controlled workshop before being installed with 
                minimal disruption to the property.
              </p>
              <p className="text-gray-700">
                The result is a level of precision and quality that's simply not possible with traditional 
                on-site fence construction methods. Browse our gallery to see the difference for yourself, 
                and imagine what we could create for your property.
              </p>
            </div>
            <div>
              <img 
                src="https://seattlefence.com/wp-content/uploads/2024/11/Seattle-Fence-Img02.png" 
                alt="Fence Genius software visualization" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Ready to Start Your Own Fence Project?"
        subtitle="Contact us today for a free consultation and quote for your custom cedar fence."
        buttonText="Get a Free Quote"
        buttonLink="/contact-us"
      />
    </PageLayout>
  );
};

export default GalleryPage;
