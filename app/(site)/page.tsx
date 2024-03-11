import { Metadata } from "next";
import Feature from "@/components/Features";
import About from "@/components/About";
import Integration from "@/components/Integration";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Health Website For Everyone",
  description: "This is Home Page!",
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
