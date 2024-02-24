import { Navbar } from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className="bg-white">
        <Navbar />
        <h1>Home page</h1>
      </div>
    </>
  );
}
