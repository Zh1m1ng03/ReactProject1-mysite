// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";

function Home() {
  const [showSubPageEdu, setShowSubPageEdu] = useState(false);
  const [showSubPageSkill, setShowSubPageSkill] = useState(false);
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
    <main
      className="min-h-screen px-4 py-10 transition-colors duration-500"
      style={backgroundStyle}
      onMouseMove={handleMouseMove}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 md:flex-row">
        <div className="min-h-96 flex-1 transform rounded-2xl bg-white p-6 text-left shadow-md transition duration-300 hover:scale-105 dark:bg-gray-800 dark:text-gray-100">
          <h2 className="mb-4 text-center text-xl font-semibold">About Me</h2>
          <p>Name: Zhiming Wu</p>
          <p>Email: Zhiming.Wu@uon.edu.au</p>
          <p>PhoneNo: 0424720331</p>
          <p className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4"
              fill="blue"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V24H.5V8.5zM8.5 8.5H12V10.5H12.07C12.7 9.28 14.07 8.5 15.91 8.5C20.01 8.5 21 10.92 21 15.25V24H17V15.98C17 13.74 16.5 12.5 15.1 12.5C13.63 12.5 13 13.67 13 15.8V24H9V8.5H8.5z" />
            </svg>
            <a
              href="https://www.linkedin.com/in/zhiming-wu-a4b047295/"
              target="_blank"
              rel="noopener noreferrer"
              className="items-center hover:text-blue-700 hover:underline"
            >
              My LinkedIn Profile
            </a>
          </p>
          <p className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 inline-block h-4 w-4 text-gray-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.113.793-.263.793-.582
     0-.288-.01-1.048-.016-2.057-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729
     1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.304-5.467-1.332-5.467-5.932
     0-1.31.467-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.5 11.5 0 0112 5.8a11.5 11.5 0 012.998.404c2.29-1.552
     3.296-1.23 3.296-1.23.655 1.653.243 2.874.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.625-5.48
     5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.192.698.8.58C20.565
     21.796 24 17.297 24 12c0-6.627-5.373-12-12-12z"
              />
            </svg>
            <a
              href="https://github.com/Zh1m1ng03?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="items-center hover:text-blue-700 hover:underline"
            >
              My GitHub Repositories
            </a>
          </p>
        </div>

        <>
          <div
            onClick={() => setShowSubPageEdu(true)}
            className="relative min-h-64 flex-1 transform cursor-pointer rounded-2xl bg-white p-6 text-left shadow-md transition duration-300 hover:scale-105 dark:bg-gray-800 dark:text-gray-100"
          >
            <h2 className="mb-4 text-center text-xl font-semibold">
              Education
            </h2>
            <div className="space-y-2 pl-2">
              <div className="flex w-full justify-between">
                <p className="font-semibold">University of Newcastle</p>
                <span className="text-sm text-gray-700">2023.07 – Present</span>
              </div>
              <p>Bachelor of Computer Science</p>
              <p>Major: Software Development</p>
            </div>
            <p className="absolute bottom-4 right-4 text-sm text-gray-600">
              (Click to view courses and grades)
            </p>
          </div>

          {showSubPageEdu && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative h-[80vh] w-[80vw] overflow-y-auto rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900 dark:text-gray-100">
                <button
                  onClick={() => setShowSubPageEdu(false)}
                  className="absolute right-4 top-4 text-2xl text-gray-600 hover:text-red-500"
                >
                  &times;
                </button>
                <h3 className="mb-4 text-xl font-semibold">
                  Courses and Grades
                </h3>
                <p className="text-gray-600">
                  (This section will display course details)
                </p>

                <img
                  src="/grades.png"
                  alt="Grades Overview"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
            </div>
          )}
        </>

        <>
          <div
            onClick={() => setShowSubPageSkill(true)}
            className="relative min-h-64 flex-1 transform cursor-pointer rounded-2xl bg-white p-6 text-left shadow-md transition duration-300 hover:scale-105 dark:bg-gray-800 dark:text-gray-100"
          >
            <h2 className="mb-4 text-center text-xl font-semibold">Skills</h2>
            <div className="space-y-2 pl-2 text-sm">
              <p>
                <span className="font-semibold">
                  Frontend & Web Technologies:
                </span>{" "}
                React, PHP, XML, HTML, CSS
              </p>
              <p>
                <span className="font-semibold">Backend Development:</span>{" "}
                Java, Python, C++
              </p>
              <p>
                <span className="font-semibold">System Programming:</span> C
              </p>
              <p>
                <span className="font-semibold">Tools & Frameworks:</span>{" "}
                Tailwind CSS, Git, Contentful CMS and Vercel
              </p>
              <p>
                <span className="font-semibold">Databases:</span> Microsoft SQL
                Server, Neo4j
              </p>
            </div>
            <p className="absolute bottom-4 right-4 text-sm text-gray-600">
              (Click to view more details)
            </p>
          </div>

          {showSubPageSkill && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div className="relative h-[80vh] w-[80vw] overflow-y-auto rounded-lg bg-white p-8 shadow-lg dark:bg-gray-900 dark:text-gray-100">
                <button
                  onClick={() => setShowSubPageSkill(false)}
                  className="absolute right-4 top-4 text-2xl text-gray-600 hover:text-red-500"
                >
                  &times;
                </button>
                <h3 className="mb-4 text-xl font-semibold">Detailed Skills</h3>
                <p className="text-gray-600">
                  (This section will display detailed skill sets and projects)
                </p>
                <div className="mx-auto max-w-4xl px-6 py-10">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-[120px_1fr]">
                    <div className="md:contents">
                      <div className="font-semibold text-gray-800 md:col-span-1">
                        Frontend
                      </div>
                      <div className="md:col-span-1">
                        <p>
                          <strong>React:</strong> Hands-on experience with the
                          React framework, React Hooks, and modern JavaScript.
                          Independently designed and built a{" "}
                          <a
                            href="https://github.com/Zh1m1ng03/ReactProject1-mysite"
                            className="text-blue-600 underline"
                          >
                            local website
                          </a>{" "}
                          using React and Vite, with structured components and
                          integrated blog functionality through a headless CMS.
                        </p>
                        <p className="mt-2">
                          <strong>HTML, XML, PHP, CSS:</strong> Familiar with
                          using HTML, CSS, PHP, XML, and JavaScript in academic
                          settings. Completed{" "}
                          <a
                            href="https://github.com/Zh1m1ng03/WebProjectAssignment"
                            className="text-blue-600 underline"
                          >
                            assignments and small projects
                          </a>{" "}
                          at university involving static webpage creation, form
                          handling, and server-side scripting using traditional
                          web technologies.
                        </p>
                      </div>
                    </div>

                    <div className="font-semibold text-gray-800">Backend</div>
                    <div>
                      <p>
                        <strong>Java:</strong> Familiar with Java syntax and
                        object-oriented principles. Completed course projects
                        such as simulating a juice factory system.
                      </p>
                      <p className="mt-2">
                        <strong>C++:</strong> Familiar with C++ syntax and used
                        it as a foundation to understand core data structures
                        such as arrays, linked lists, stacks, and queues.
                      </p>
                    </div>

                    <div className="font-semibold text-gray-800">Databases</div>
                    <div>
                      <p>
                        <strong>Database Design:</strong> Knowledge of EER
                        models, entity-relationship diagrams, normalization, and
                        relational schema design from conceptual to logical
                        level.
                      </p>
                      <p className="mt-2">
                        <strong>MS SQL Server:</strong> Used in course
                        assignments to design and query relational databases.
                      </p>
                      <p className="mt-2">
                        <strong>Neo4j:</strong> Familiar with basic CRUD
                        operations and understanding of graph database concepts
                        such as nodes and relationships.
                      </p>
                    </div>

                    <div className="font-semibold text-gray-800">Tools</div>
                    <div>
                      <p>
                        <strong>Tailwind CSS:</strong> Used for utility-first
                        styling in React projects, enabling rapid and responsive
                        UI development.
                      </p>
                      <p className="mt-2">
                        <strong>Contentful CMS:</strong> Integrated as a
                        headless CMS to manage and deliver structured content to
                        frontend applications.
                      </p>
                      <p className="mt-2">
                        <strong>Git & GitHub:</strong> Used for version control
                        and collaborative development with GitHub-hosted
                        repositories.
                      </p>
                      <p className="mt-2">
                        <strong>Vercel:</strong> Used to deploy React and
                        Vite-based websites with seamless integration and
                        continuous deployment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </main>
  );
}

export default Home;
