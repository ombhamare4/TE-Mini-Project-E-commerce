import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <main className="p-5 xs:p-0">{props.children}</main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
