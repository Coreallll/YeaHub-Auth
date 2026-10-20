import Header from "@/widgets/Header/ui/Header/Header.tsx";
import Footer from "@/widgets/Footer/ui/Footer/Footer.tsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
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
