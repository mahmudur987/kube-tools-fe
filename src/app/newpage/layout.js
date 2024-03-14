import Footer from "@/components/Home/Footer/Footer";
import Navbar from "@/components/Home/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}

      <Footer />
    </main>
  );
};

export default layout;
