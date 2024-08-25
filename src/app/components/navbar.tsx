import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./cartIcon";
import Image from "next/image";

function Navbar() {
  const user = false;

  return (
    <div className="flex items-center justify-between text-red-500 uppercase border-b-2 border-b-red-500 p-4 md:h-24 lg:px-20">
      {/*left links*/}
      <div className="hidden md:flex gap-4 items-center flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Massimo</Link>
      </div>
      <div className="md:hidden">
        <Menu></Menu>
      </div>
      {/*right links*/}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 right-2 lg:static flex items-center cursor-pointer bg-orange-300 rounded-md px-1">
          <Image src='/phone.png' alt="" width={20} height={20}></Image>
          <span>123 456 78</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon></CartIcon>
      </div>
    </div>
  );
}

export default Navbar;
