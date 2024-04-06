import { Metadata } from "next";
import Feature from "@/components/Introduction/Features";
import About from "@/components/Introduction/About";
import Integration from "@/components/Introduction/Integration";
import Contact from "@/components/Introduction/Contact";
import Testimonial from "@/components/Introduction/Testimonial";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Introduction/Lines";
import ToasterContext from "@/components/Introduction/context/ToastContext";
import FAQs from "@/components/Introduction/FAQs/faqs";

export const metadata: Metadata = {
  title: "Health Website For Everyone",
  icons: "./favicon.ico"
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Lines />
      <Header />
      <ToasterContext />
      <Feature />
      <Testimonial />
      <About />
      <Integration />
      <Contact />
      <FAQs/>
      <Footer />
    </main>
  );
}
