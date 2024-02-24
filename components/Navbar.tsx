export function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/"
          className="text-2xl no-underline text-red-800 hover:text-blue-dark"
        >
          🧃 Silicon Juice
        </a>
      </div>
      <div>
        <a
          href="/investments"
          className="text-lg no-underline text-green-700 hover:text-blue-dark ml-2"
        >
          Investments
        </a>
        <a
          href="/about"
          className="text-lg no-underline text-slate-700 hover:text-blue-dark ml-2"
        >
          About
        </a>
      </div>
    </nav>
  );
}
