"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, MapPin } from "lucide-react";
import { NavbarLinks } from "./NavbarLinks";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 mt-6 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between  max-w-7xl">
        
        <div>
          <Image
            alt="Logo"
            src="/logo.svg"
            width={66}
            height={66}
            className="items-center"
          />
        </div>

       
        <div className="flex space-x-10 text-sm font-medium border-b-2 border-b-[#28CEBF] py-20 border-t-2 border-t-[#5D469F] items-center justify-center md:w-2xl w-[100%] mt-6  ">
         <NavbarLinks />
        </div>

        
        <div className="flex items-center space-x-4 mt-6 md:mt-0">
          <span className="text-gray-400 text-sm">Social Media</span>
          <a href="#" className="text-purple-400 hover:text-white">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-purple-400 hover:text-white">
            <MapPin className="w-5 h-5" />
          </a>
          <a href="#" className="text-purple-400 hover:text-white">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-purple-400 hover:text-white">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-4 border-t border-gray-700 pt-4 items-center ">
        Copyright © 2024 • LOOKALIKES
      </div>
    </footer>
  );
};

export default Footer;



