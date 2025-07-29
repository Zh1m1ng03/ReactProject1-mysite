function Nav() {
  return (
    <nav className="flex justify-center gap-6 bg-sky-700 p-4 text-white dark:bg-black">
      <a
        href="/home"
        className="rounded-lg px-3 py-2 transition hover:scale-110 hover:bg-sky-600"
      >
        Home
      </a>

      <a
        href="/projects"
        className="rounded-lg px-3 py-2 transition hover:scale-110 hover:bg-sky-600"
      >
        Projects
      </a>
      <a
        href="/thoughts"
        className="rounded-lg px-3 py-2 transition hover:scale-110 hover:bg-sky-600"
      >
        Thoughts
      </a>
    </nav>
  );
}

export default Nav;
