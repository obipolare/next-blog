import Head from "next/head";
import Footer from "./partials/Footer";
import Navbar from "./partials/navbar";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
