import { Inter } from "next/font/google";
import HeroSection from "@/Components/HeroSection";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>atlan garvit virmani sql editor</title>
      </Head>
      <HeroSection />
    </>
  );
}
