import { Navbar } from "../../components/Navbar";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className="bg-white h-screen flex flex-col justify-center items-center">
        <Navbar />
        <div className="flex h-full overflow-y-auto px-6">
          <div className="py-0">
            <div className="max-w-lg">
              <div className="grid grid-cols-1 gap-6">
                <Image
                  src="/static/images/beverage-box.svg"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />
                <span className="mt-12 text-justify">
                  Have you found it hard keeping track of all the deals
                  happening in the Venture Capital space? Yep, me too! I created
                  Silicon Juice to have a searchable database of venture deals.
                  Most of the data has been sourced from{" "}
                  <Link
                    href="https://www.silicon.news/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className=" text-pink-600 underline"
                  >
                    Silicon.news
                  </Link>
                  . More sources to be added in the future.
                </span>
                <span className="text-center mt-12"></span>
                <span className="text-center mt-12">
                  For more about me, you can visit{" "}
                  <Link
                    href="https://www.arjunrao.co"
                    rel="noopener noreferrer"
                    target="_blank"
                    className=" text-pink-600 underline"
                  >
                    arjunrao.co
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
