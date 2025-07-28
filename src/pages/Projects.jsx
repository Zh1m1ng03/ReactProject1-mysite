import { useState } from "react";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "Pizza Menu",
      description: "An ordering pizza app.",
      details: "Not updated",
      image: "/pizza-menu.png",
    },
    {
      title: "Steps",
      description: "Not updated",
      details: "Not updated",
    },
    {
      title: "Travel list",
      description: "Not updated",
      details: "Not updated",
    },
    {
      title: "usePopcorn",
      description: "Not updated",
      details: "Not updated",
    },
  ];

  const ownProjects = [
    {
      title: "My Site",
      description: "A Self Introduction Single Page Application .",
      details: "Built with React and Tailwind CSS. Shows self info.",
      image: "/mysite.png",
    },
  ];
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #e0f2ff, #ffffff)`,
    transition: "background 0.1s ease",
  };

  return (
    <section
      className="bg-white py-10 px-4"
      style={backgroundStyle}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold my-8 text-left">
          My Practice Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(project)}
              className="transform hover:scale-105 transition duration-300 bg-white rounded-2xl shadow-md p-6 text-left min-h-60 cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700">{project.description}</p>
              <p className="absolute bottom-4 right-4 text-sm text-gray-600">
                (Click to view more details)
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold my-8 text-left">My Own Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-5xl mx-auto gap-6">
          {ownProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(project)}
              className="transform hover:scale-105 transition duration-300 bg-white rounded-2xl shadow-md p-6 text-left min-h-60 cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700">{project.description}</p>
              <p className="absolute bottom-4 right-4 text-sm text-gray-600">
                (Click to view more details)
              </p>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white w-[90vw] max-w-xl h-[60vh] rounded-lg shadow-lg relative p-8 overflow-y-auto">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500"
              >
                &times;
              </button>
              <h3 className="text-xl font-semibold mb-4">
                {activeProject.title}
              </h3>
              <p className="text-gray-700">{activeProject.details}</p>
              {activeProject.image && (
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full max-h-[70vh] object-contain rounded-xl mb-4"
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
