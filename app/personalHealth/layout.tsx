
import Navbar from "@/components/InsideNavbar/navbar";

export default function MainLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navbar/>
      {children}
    </main>
  );
}
