"use client"; // For using hooks like useState

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);


  

  // Define menu items
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "TodoList", href: "/todolist" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" }
  ];

  return (
    <header className="relative max-w-7xl mx-auto w-full border-b-4 z-50 transition-all">
      <div className="flex sm:flex-row justify-between items-center px-4 sm:px-8 py-4">
        <Link className="flex items-center gap-4" href="/">
          <Image
            src="/Logo.png"
            alt="TodoList"
            width={120}
            height={60}
          />
          
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden rounded-md hover:bg-gray-300 p-2 duration-300"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-white border-b z-50"
          >
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      delay: index * 0.1,
                      opacity: { duration: 0.2 },
                      y: { duration: 0.3 },
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 hover:bg-gray-300 rounded-md p-2 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}