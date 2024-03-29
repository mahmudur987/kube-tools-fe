import Footer from "@/components/Home/Footer/Footer";
import Navbar from "@/components/Home/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />

      {children}

      <Footer />
    </main>
  );
};

export default Layout;
