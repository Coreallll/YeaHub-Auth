import Header from "@/widgets/header/ui/Header/Header.tsx";
import Footer from "@/widgets/footer/ui/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
