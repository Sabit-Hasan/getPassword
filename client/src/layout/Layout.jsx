import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


export default function Layout() {
  return (
    <>
      <div className="layout">
        <Navbar />
        <main className="min-h-[85vh]">
          <Toaster position="top-right" />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}