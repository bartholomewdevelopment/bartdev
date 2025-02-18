import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";
import Footer from "../pages/shared/Footer";

function RootLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Renders the current page here */}
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
