import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
      className="bg-white px-4 py-10"
      style={backgroundStyle}
      onMouseMove={handleMouseMove}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="my-8 text-left text-3xl font-bold dark:text-gray-100">
          Thoughts
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <div
              key={post.sys.id}
              onClick={() => setActivePost(post)}
              className="min-h-60 transform cursor-pointer rounded-2xl bg-white p-6 text-left shadow-md transition duration-300 hover:scale-105 dark:bg-gray-800 dark:text-gray-100"
            >
              <h3 className="mb-2 text-lg font-semibold">
                {post.fields.title}
              </h3>
              <p className="mb-1 text-sm text-gray-500">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 dark:text-gray-100">
            <div className="relative h-[80vh] w-[90vw] max-w-3xl overflow-y-auto rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800 dark:text-gray-100">
              <button
                onClick={() => setActivePost(null)}
                className="absolute right-4 top-4 text-2xl text-gray-600 hover:text-red-500"
              >
                &times;
              </button>
              <h3 className="mb-2 text-2xl font-bold">
                {activePost.fields.title}
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                {new Date(activePost.fields.postedTime).toLocaleString(
                  undefined,
                  {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  },
                )}
              </p>

              {activePost.fields.image && (
                <img
                  src={activePost.fields.image.fields.file.url}
                  alt="coverImage"
                  className="mb-6 max-h-[300px] w-full rounded-xl object-contain"
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
