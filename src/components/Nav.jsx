function Nav() {
  return (
    <nav className="bg-sky-700 text-white flex justify-center gap-6 p-4">
      <a
        href="/home"
        className="px-3 py-2 rounded-lg hover:bg-sky-600 transition hover:scale-110"
      >
        Home
      </a>

      <a
        href="/projects"
        className="px-3 py-2 rounded-lg hover:bg-sky-600 transition hover:scale-110"
      >
        Projects
      </a>
      <a
        href="/thoughts"
        className="px-3 py-2 rounded-lg hover:bg-sky-600 transition hover:scale-110"
      >
        Thoughts
      </a>
    </nav>
  );
}

export default Nav;
