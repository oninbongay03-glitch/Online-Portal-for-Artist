"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

import { usePopup } from "@/hooks/usePopup";

import { CgMail } from "react-icons/cg";
import { FaHome, FaShoppingBag, FaRegUser } from "react-icons/fa";
import { GoGlobe } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import ProfileMenu from "../Menu/ProfileMenu";
import LogoDark from "@/app/logo-dark.png";
import Logo from "../ui/Logo";
import { RiNotificationLine } from "react-icons/ri";


export const nav_links = [
  { label: "Home", href: "/", icon: FaHome },
  { label: "Explore", href: "/explore", icon: GoGlobe },
  { label: "Shop", href: "/shop", icon: FaShoppingBag },
];

export const commission_links = [
  { label: "My Client", href: "/my-client" },
  { label: "My Request", href: "/my-request" },
];



export default function Header() {
  const [isLogin, setIsLogin] = useState(true);
  const [commissionDropdown, setCommissionDropdown] = useState(false);

  const mobileMenu = usePopup();
  const profileMenu = usePopup();

  const handleLogOut = () => {
    setIsLogin(false);
    profileMenu.close();
  };

  return (
    <header className="z-100 sticky top-0 w-full bg-background  flex justify-between items-center px-5 md:px-10 lg:px-20 h-16">
      <div className="flex items-center gap-3">
        <GiHamburgerMenu
          onClick={mobileMenu.open}
          className="cursor-pointer text-3xl lg:hidden"
        />

        <div className=" md-block">
          <Logo />
        </div>
       

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-4">
          {nav_links.map(({ label, href, icon: Icon }) => (
            <Link key={label} href={href}>
              <div className="flex items-center gap-3 px-6">
                <Icon />
                <span>{label}</span>
              </div>
            </Link>
          ))}

          {/* Commission Desktop */}
          <div className="relative group flex items-center gap-3 px-6 cursor-pointer">
            <FaRegUser />
            <span>Commission</span>
            <IoIosArrowDown />

            <div className="absolute left-0 top-6 hidden group-hover:block">
              <div className="bg-primary border border-primary-line rounded-md p-2 mt-2 flex flex-col">
                {commission_links.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="p-2 rounded-md hover:text-green-500 transition"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE DRAWER ---------------- */}
      <div
        ref={mobileMenu.ref}
        className={clsx(
          "fixed inset-y-0 left-0 z-40 w-[60%] bg-background p-4 space-y-6 transition-transform duration-300 lg:hidden",
          {
            "translate-x-0": mobileMenu.isOpen,
            "-translate-x-full": !mobileMenu.isOpen,
          }
        )}
      >
        <IoClose
          onClick={mobileMenu.close}
          className="text-xl cursor-pointer"
        />

        {nav_links.map(({ label, href, icon: Icon }) => (
          <Link key={label} href={href} onClick={mobileMenu.close}>
            <div className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-primary-line">
              <Icon />
              <span>{label}</span>
            </div>
          </Link>
        ))}

        {/* Commission Mobile */}
        <div>
          <div
            onClick={() => setCommissionDropdown((p) => !p)}
            className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-primary-line cursor-pointer"
          >
            <FaRegUser />
            <span>Commission</span>
            <MdOutlineArrowDropDown
              className={clsx("ml-auto transition", {
                "rotate-180": commissionDropdown,
              })}
            />
          </div>

          {commissionDropdown && (
            <div className="ml-6 mt-2 flex flex-col">
              {commission_links.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={mobileMenu.close}
                  className="p-2 rounded-md hover:bg-primary-line"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      <div
        onClick={mobileMenu.close}
        className={clsx(
          "fixed inset-0 bg-black transition-opacity lg:hidden",
          {
            "opacity-50 block": mobileMenu.isOpen,
            "opacity-0 hidden": !mobileMenu.isOpen,
          }
        )}
      />

      {/* ---------------- RIGHT ---------------- */}
      <div className="flex items-center gap-4">
        {isLogin && (
          <Link href="/mail">
            <RiNotificationLine className="text-2xl"/>
          </Link>
        )}

        {/* Avatar */}
        {isLogin && (
          <div onClick={profileMenu.toggle} className="cursor-pointer">
            <Image
              src="https://i.pinimg.com/736x/76/84/b7/7684b7cbf34ac441c6f377f359fb6868.jpg"
              alt="profile"
              width={44}
              height={44}
              className="rounded-full border-2 h-12 w-12 border-white object-cover "
            />
          </div>
        )}

        {/* Profile Menu */}
        {profileMenu.isOpen && (
          <div
            ref={profileMenu.ref}
            className="absolute top-20 right-10 z-40"
          >
            <ProfileMenu handleLogOut={handleLogOut} />
          </div>
        )}

        {!isLogin && (
          <div className="flex gap-6 items-center">
            <Link href="/register">Sign up</Link>
            <Link
              href="/login"
              className="bg-gradient-primary bg-green-500 text-white px-6 py-2 rounded-full"
            >
              Log in
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
