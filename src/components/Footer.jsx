function Footer() {
  return (
    <footer className="bg-gray-800 px-4 py-6 text-sm text-gray-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="text-center md:text-left">
          <p>
            Email:{" "}
            <a href="mailto:Zhiming.Wu@uon.edu.au" className="hover:underline">
              Zhiming.Wu@uon.edu.au
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:0424720331" className="hover:underline">
              0424 720 331
            </a>
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://linkedin.com/in/zhiming-wu-a4b047295"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Zh1m1ng03"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-400"
          >
            GitHub
          </a>
        </div>

        <div className="text-center md:text-right">
          <p>&copy; 2025 Zhiming Wu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
