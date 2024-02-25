import { Navbar } from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <script
        data-goatcounter="https://siliconjuice.goatcounter.com/count"
        async
        src="//gc.zgo.at/count.js"
      ></script>
      <div className="">
        <Navbar />
        <h1>Home page</h1>
      </div>
    </>
  );
}
