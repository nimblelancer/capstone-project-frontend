import { Metadata } from "next";
import Feature from "@/components/Introduction/Features";
import About from "@/components/Introduction/About";
import Integration from "@/components/Introduction/Integration";
import Contact from "@/components/Introduction/Contact";
import Testimonial from "@/components/Introduction/Testimonial";

export const metadata: Metadata = {
  title: "Health Website For Everyone",
  icons: "./favicon.ico"
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Feature />
      <Testimonial />
      <About />
      <Integration />
      <Contact />
    </main>
  );
}
