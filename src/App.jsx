// src/App.jsx
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Thoughts from "./pages/Thoughts";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 dark:text-gray-100 rounded"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
      <Header />
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/thoughts" element={<Thoughts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
