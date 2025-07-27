// src/App.jsx
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Thoughts from "./pages/Thoughts";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
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
