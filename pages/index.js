import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import StudioCard from "../components/StudioCard";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      {/* <Hero/> */}
      <main>
         <Slider/>
      <StudioCard/>
      </main>
     
    </div>
  );
}
