import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import Footer from "../components/Footer";

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-[#0D0D0D]">
        <Navbar />
      </div>
      <div className="bg-[#5D469F] rounded-b-2xl ">
        <UserInfo />
      </div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        {children}
      </main>
      <Footer/>
    </>
  );
}
