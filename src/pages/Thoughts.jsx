import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ReactMarkdown from "react-markdown";

const client = createClient({
  space: "4okojd13yd75",
  accessToken: "c3Wwu9Ab9tOcljPOXNNw480_M8nM4w9ya7sXXhLyVvw",
});

function Thoughts() {
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const { darkMode } = useTheme();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await client.getEntries({ content_type: "blogPage" });
        setPosts(response.items);
      } catch (err) {
        console.error("failed", err);
      }
    }

    fetchPosts();
  }, []);

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
      className="bg-white py-10 px-4"
      style={backgroundStyle}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold my-8 text-left dark:text-gray-100">
          Thoughts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {posts.map((post) => (
            <div
              key={post.sys.id}
              onClick={() => setActivePost(post)}
              className="dark:bg-gray-800 dark:text-gray-100 transform hover:scale-105 transition duration-300 bg-white rounded-2xl shadow-md p-6 text-left min-h-60 cursor-pointer"
            >
              <h3 className="text-lg font-semibold mb-2">
                {post.fields.title}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                {new Date(post.fields.postedTime).toLocaleDateString()}
              </p>

              <p className="text-sm text-gray-700 dark:text-gray-400">
                {post.fields.description}
              </p>
              <p className="absolute bottom-4 right-4 text-sm text-gray-600">
                (Click to view more details)
              </p>
            </div>
          ))}
        </div>

        {activePost && (
          <div className=" dark:text-gray-100 fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="dark:bg-gray-800 dark:text-gray-100 bg-white w-[90vw] max-w-3xl h-[80vh] rounded-lg shadow-lg relative p-8 overflow-y-auto">
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-red-500"
              >
                &times;
              </button>
              <h3 className="text-2xl font-bold mb-2">
                {activePost.fields.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {new Date(activePost.fields.postedTime).toLocaleString()}
              </p>

              {activePost.fields.coverImage && (
                <img
                  src={activePost.fields.coverImage.fields.file.url}
                  alt="coverImage"
                  className="w-full max-h-[300px] object-contain rounded-xl mb-6"
                />
              )}

              <div className="prose max-w-none text-gray-800 dark:text-gray-100">
                {documentToReactComponents(activePost.fields.body)}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Thoughts;
