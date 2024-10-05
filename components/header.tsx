"use client";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [navItems, setNavItems] = useState([
    { id: 1, title: "Home", link: "/", isSelected: true },
    { id: 2, title: "About", link: "#", isSelected: false },
    { id: 3, title: "Blog", link: "#", isSelected: false },
    { id: 3, title: "Track Dispatch", link: "#", isSelected: false },
  ]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navElement = navItems.map((item) => {
    return (
      <a
        key={item.id}
        href={item.link}
        className={`hover:text-neutral cursor-pointer font-poppins font-normal text-base ${
          item.isSelected ? "text-neutral" : "text-madeinblacc"
        }`}
      >
        {item.title}
      </a>
    );
  });
  const navElementSmallScreen = navItems.map((item) => {
    return (
      <a
        key={item.id}
        href={item.link}
        className={`hover:text-neutral cursor-pointer font-poppins font-medium text-base ${
          item.isSelected ? "text-neutral" : "text-white"
        }`}
      >
        {item.title}
      </a>
    );
  });

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex flex-row items-center justify-between z-50 bg-white w-full h-fit px-8 py-4 md:px-20 md:py-4">
        <a href="/">
          <Image
            className="w-24 h-auto md:w-fit"
            src="/factory-logo.png"
            width={150}
            height={50}
            quality={100}
            alt="Tedlog Logo"
          />
        </a>

        {/* MENU ITEMS AT LARGE SCREEN */}
        <div className="hidden items-center justify-between w-2/5 lg:flex">
          {navElement}
        </div>
        {/* CTAS AT LARGE SCREEN */}
        <div className="hidden items-center justify-between gap-3 lg:flex">
          <a
            href="#"
            className="flex items-center justify-center px-6 py-3 rounded-md border border-madeinblacc font-poppins font-normal text-madeinblacc text-base cursor-pointer hover:border-burnt hover:text-burnt"
          >
            Sign in
          </a>
          <a
            href="#"
            className="flex items-center justify-center px-6 py-3 rounded-md border border-madeinblacc font-poppins font-normal bg-madeinblacc text-white text-base cursor-pointer hover:bg-burnt hover:border-burnt"
          >
            Create Account
          </a>
        </div>

        {/* MENU ITEMS AT SMALL SCREEN */}
        {showMenu && (
          <div
            className={`absolute flex flex-col items-start justify-start gap-3 w-full h-fit top-full left-0 py-4 px-8 md:px-20 bg-madeinblacc z-50 lg:hidden`}
          >
            {navElementSmallScreen}
            {/* CTAS AT SMALL SCREEN */}
            <div className="flex items-center justify-between gap-3">
              <a
                href="#"
                className="flex items-center justify-center px-6 py-3 rounded- border border-neutral font-poppins font-normal text-neutral text-base cursor-pointer"
              >
                Sign in
              </a>
              <a
                href="#"
                className="flex items-center justify-center px-6 py-3 rounded-md border border-neutral font-poppins font-normal bg-neutral text-white text-base cursor-pointer"
              >
                Create Account
              </a>
            </div>
          </div>
        )}

        {/* MENU BUTTONS */}
        <div onClick={toggleMenu} className="lg:hidden">
          {!showMenu && (
            <i className="bx bx-menu text-3xl text-madeinblacc"></i>
          )}
          {showMenu && <i className="bx bx-x text-3xl text-madeinblacc"></i>}
        </div>
      </nav>
    </>
  );
}
