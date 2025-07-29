import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

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

  const { darkMode } = useTheme();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  useEffect(() => {
    setMousePos({ x: 50, y: 50 });
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, ${
      darkMode ? "#1f2937" : "#e0f2ff"
    }, ${darkMode ? "#000000" : "#ffffff"})`,
    transition: "background 0.5s ease",
  };

  return (
    <section
      className="bg-white px-4 py-10"
      style={backgroundStyle}
      onMouseMove={handleMouseMove}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="my-8 text-left text-3xl font-bold dark:text-gray-100">
          My Practice Projects
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(project)}
              className="min-h-60 transform cursor-pointer rounded-2xl bg-white p-6 text-left shadow-md transition duration-300 hover:scale-105 dark:bg-gray-800 dark:text-gray-100"
            >
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-500">
                {project.description}
              </p>
              <p className="absolute bottom-4 right-4 text-sm text-gray-600">
                (Click to view more details)
              </p>
            </div>
          ))}
        </div>

        <h2 className="my-8 text-left text-3xl font-bold dark:text-gray-100">
          My Own Projects
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {ownProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setActiveProject(project)}
              className="min-h-60 transform cursor-pointer rounded-2xl bg-white p-6 text-left shadow-md transition duration-300 hover:scale-105 dark:bg-gray-800 dark:text-gray-100"
            >
              <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-500">
                {project.description}
              </p>
              <p className="absolute bottom-4 right-4 text-sm text-gray-600">
                (Click to view more details)
              </p>
            </div>
          ))}
        </div>

        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="relative h-[60vh] w-[90vw] max-w-xl overflow-y-auto rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 dark:text-gray-100">
              <button
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 text-2xl text-gray-600 hover:text-red-500"
              >
                &times;
              </button>
              <h3 className="mb-4 text-xl font-semibold">
                {activeProject.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-200">
                {activeProject.details}
              </p>
              {activeProject.image && (
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="mb-4 max-h-[70vh] w-full rounded-xl object-contain"
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
