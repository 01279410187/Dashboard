"use client";

import Image from "next/image";
import { useState } from "react";
import { NavbarLinks } from "./NavbarLinks";
import { BellDot, LogOut, Menu, UserRound, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Logo */}
      <Image
        alt="Logo"
        src="/logo.svg"
        width={66}
        height={66}
        className="item-center"
      />

      {/* Desktop Navbar Links */}
      <div className="hidden md:flex">
        <NavbarLinks />
      </div>

      {/* Icons and Mobile Menu Button */}
      <div className="flex items-center gap-x-4">
        <BellDot className="text-white" />
        <UserRound className="text-white" />
        <LogOut className="text-white" />

        {/* Toggle Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu (Hidden by default, shown when menuOpen is true) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center py-4 md:hidden">
          <NavbarLinks />
        </div>
      )}
    </div>
  );
}
