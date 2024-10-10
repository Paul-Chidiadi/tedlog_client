"use client";
import Navigation from "../../components/navbar";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  //GET USERS INFO FROM LOCAL STORAGE
  // const role = getDataFromLocalStorage("role");

  // useEffect(() => {
  //   if (role) {
  //     role !== "sender" ? router.push(`/auth/login`) : "";
  //   }
  // }, [role]);

  return (
    <>
      <Navigation role="sender" />
      <section className="">{children}</section>
    </>
  );
}
