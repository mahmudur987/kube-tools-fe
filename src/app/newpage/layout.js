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
