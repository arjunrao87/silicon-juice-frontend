import Link from "next/link";

export function Navbar() {
  return (
    <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <a
          href="/"
          className="text-2xl no-underline text-orange-600 hover:text-blue-dark"
        >
          🧃 Silicon Juice
        </a>
      </div>
      <div>
        <div className="inline-block">
          <button
            type="button"
            className="py-3 px-8 text-sm bg-teal-500 hover:bg-teal-600 rounded text-white"
          >
            <Link href="/investments" className="text-lg hover:text-blue-dark">
              Investments
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}
