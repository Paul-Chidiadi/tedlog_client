"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { useMediaQuery } from "react-responsive";

interface Navprops {
  role: string;
}

export default function Navigation({ role }: Navprops) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef(null);
  const [senderMenu, setSenderMenu] = useState([
    {
      id: 1,
      isSelected: true,
      icon: "material-symbols-light:team-dashboard-outline",
      iconfilled: "material-symbols-light:team-dashboard",
      title: "Dashboard",
      link: "/sender",
    },
    {
      id: 2,
      isSelected: false,
      icon: "hugeicons:delivery-truck-01",
      iconfilled: "mage:delivery-truck-fill",
      title: "Shipments",
      link: "/sender/shipments",
    },
    {
      id: 3,
      isSelected: false,
      icon: "solar:wallet-outline",
      iconfilled: "solar:wallet-bold",
      title: "Wallet",
      link: "/sender/wallet",
    },
    {
      id: 4,
      isSelected: false,
      icon: "octicon:person-24",
      iconfilled: "octicon:person-fill-24",
      title: "Profile",
      link: "/sender/profile",
    },
  ]);
  const [adminMenu, setAdminMenu] = useState([
    {
      id: 1,
      isSelected: true,
      icon: "material-symbols-light:team-dashboard-outline",
      iconfilled: "material-symbols-light:team-dashboard",
      title: "Dashboard",
      link: "/admin",
    },
    {
      id: 2,
      isSelected: false,
      icon: "hugeicons:delivery-truck-01",
      iconfilled: "mage:delivery-truck-fill",
      title: "Shipments",
      link: "/admin/shipments",
    },
    {
      id: 3,
      isSelected: false,
      icon: "heroicons:user-group",
      iconfilled: "heroicons:user-group-solid",
      title: "Users",
      link: "/admin/users",
    },
    {
      id: 4,
      isSelected: false,
      icon: "octicon:person-24",
      iconfilled: "octicon:person-fill-24",
      title: "Profile",
      link: "/admin/profile",
    },
  ]);
  // Media query to check if the screen width is less than 1000px
  const isMobile = useMediaQuery({ query: "(max-width: 1000px)" });

  // Function to switch menu items
  function switchMenuItem(id: number) {
    if (role === "sender") {
      setSenderMenu((prev) =>
        prev.map((item) => ({
          ...item,
          isSelected: item.id === id,
        }))
      );
    } else {
      setAdminMenu((prev) =>
        prev.map((item) => ({
          ...item,
          isSelected: item.id === id,
        }))
      );
    }
  }

  // Update selected menu item based on the current path
  const updateSelectedMenuItem = (path: string) => {
    const updateMenu = (menu: any) =>
      menu.map((item: any) => ({
        ...item,
        isSelected: item.link === path,
      }));

    if (role === "sender") {
      setSenderMenu(updateMenu(senderMenu));
    } else {
      setAdminMenu(updateMenu(adminMenu));
    }
  };

  //DISPLAY MENU ITEMS ELEMENTS FOR BOTH SENDER, ADMIN
  const renderMenuItems = (menu: any) =>
    menu.map((item: any) => {
      return (
        <div
          key={item.id}
          onClick={() => {
            switchMenuItem(item.id);
            // router.push(item.link);
          }}
          className={`w-full flex flex-col md:flex-row items-center justify-start gap-4 p-2 md:px-6 md:py-4 cursor-pointer ${
            item.isSelected && !isMobile ? "bg-burnt" : "bg-transparent"
          }`}
        >
          {item.isSelected ? (
            <Icon
              className="text-white text-[30px]"
              icon={item.iconfilled}
              width="1.2em"
              height="1.2em"
            />
          ) : (
            <Icon className="text-white text-[30px]" icon={item.icon} />
          )}
          <h3 className="font-poppins font-medium text-xs md:text-base text-white">
            {item.title}
          </h3>
        </div>
      );
    });
  const senderMenuElement = renderMenuItems(senderMenu);
  const adminMenuElement = renderMenuItems(adminMenu);

  // Use effect to listen for route changes and update the selected menu item
  useEffect(() => {
    updateSelectedMenuItem(pathname);
  }, [pathname]);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 w-full h-fit md:w-[280px] md:h-screen flex flex-col bg-madeinblacc justify-start items-center md:gap-[120px] py-2 md:py-10 rounded-t-xl md:rounded-none">
        <Image
          className="w-0 h-auto md:w-fit"
          src="/factory-logo.png"
          width={150}
          height={50}
          quality={100}
          alt="Tedlog Logo"
        />

        <div className="w-full h-fit flex flex-row md:flex-col gap-2 md:gap-5 justify-evenly md:justify-start items-center md:items-start">
          {role === "sender" ? senderMenuElement : adminMenuElement}
        </div>
      </div>
    </>
  );
}
