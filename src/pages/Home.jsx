// src/pages/Home.jsx
import { useState } from "react";

function Home() {
  const [showSubPageEdu, setShowSubPageEdu] = useState(false);
  const [showSubPageSkill, setShowSubPageSkill] = useState(false);

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
    <main
      className="py-10 px-4"
      style={backgroundStyle}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
        <div className="transform hover:scale-105 transition duration-300 flex-1 bg-white rounded-2xl shadow-md p-6 text-left min-h-96">
          <h2 className="text-xl font-semibold mb-4 text-center">About Me</h2>
          <p>Name: Zhiming Wu</p>
          <p>Email: Zhiming.Wu@uon.edu.au</p>
          <p>PhoneNo: 0424720331</p>
          <p className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 mr-2 "
              fill="blue"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5H4.5V24H.5V8.5zM8.5 8.5H12V10.5H12.07C12.7 9.28 14.07 8.5 15.91 8.5C20.01 8.5 21 10.92 21 15.25V24H17V15.98C17 13.74 16.5 12.5 15.1 12.5C13.63 12.5 13 13.67 13 15.8V24H9V8.5H8.5z" />
            </svg>
            <a
              href="https://www.linkedin.com/in/zhiming-wu-a4b047295/"
              target="_blank"
              rel="noopener noreferrer"
              className=" items-center hover:underline hover:text-blue-700"
            >
              My LinkedIn Profile
            </a>
          </p>
          <p className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 inline-block mr-2 text-gray-800"
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
              className=" items-center hover:underline hover:text-blue-700"
            >
              My GitHub Repositories
            </a>
          </p>
        </div>

        <>
          <div
            onClick={() => setShowSubPageEdu(true)}
            className="flex-1 bg-white rounded-2xl shadow-md p-6 text-left min-h-64 transform hover:scale-105 transition duration-300 cursor-pointer relative"
          >
            <h2 className="text-xl font-semibold mb-4 text-center">
              Education
            </h2>
            <div className="space-y-2 pl-2">
              <div className="flex justify-between w-full">
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
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
              <div className="bg-white w-[80vw] h-[80vh] rounded-lg shadow-lg relative p-8">
                <button
                  onClick={() => setShowSubPageEdu(false)}
                  className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500"
                >
                  &times;
                </button>
                <h3 className="text-xl font-semibold mb-4">
                  Courses and Grades
                </h3>
                <p className="text-gray-600">
                  (This section will display course details)
                </p>
              </div>
            </div>
          )}
        </>

        <>
          <div
            onClick={() => setShowSubPageSkill(true)}
            className="flex-1 bg-white rounded-2xl shadow-md p-6 text-left min-h-64 transform hover:scale-105 transition duration-300 cursor-pointer relative"
          >
            <h2 className="text-xl font-semibold mb-4 text-center">Skills</h2>
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
                Tailwind CSS, Git, VSCode, Postman
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
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
              <div className="bg-white w-[80vw] h-[80vh] rounded-lg shadow-lg relative p-8">
                <button
                  onClick={() => setShowSubPageSkill(false)}
                  className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500"
                >
                  &times;
                </button>
                <h3 className="text-xl font-semibold mb-4">Detailed Skills</h3>
                <p className="text-gray-600">
                  (This section will display detailed skill sets and projects)
                </p>
              </div>
            </div>
          )}
        </>
      </div>
    </main>
  );
}

export default Home;
