"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "/",
  },
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 2,
    name: "Report",
    href: "/report",
  },

  {
    id: 3,
    name: "Orders",
    href: "/orders",
  },
  
  
];

export function NavbarLinks() {
  const location = usePathname();

  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      {navLinks.map((item) => (
        <Link
          href={item.href}
          key={item.id}
          className={cn(
            location === item.href
              ? "text-white font-semibold"
              : "text-gray-400 hover:text-white",
            "group p-2"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
