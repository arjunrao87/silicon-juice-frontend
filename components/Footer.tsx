import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container mx-auto py-2 px-3 mt-6 text-gray-800 text-center">
      <div className="flex -mx-3">
        <div className="flex-1 px-3">
          <h2 className="text-md font-semibold">
            Sourced from{" "}
            <Link
              href="https://www.silicon.news/"
              rel="noopener noreferrer"
              target="_blank"
              className=" text-pink-600 underline"
            >
              Silicon.news
            </Link>{" "}
            , powered by Algolia and built by{" "}
            <Link
              href="https://www.arjunrao.co"
              rel="noopener noreferrer"
              target="_blank"
              className=" text-pink-600 underline"
            >
              arjunrao.co
            </Link>
          </h2>
        </div>
      </div>
    </footer>
  );
}
