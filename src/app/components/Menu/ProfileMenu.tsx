"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { LOGGED_IN_USER_ID } from "@/lib/auth";
import UserProfile from "@/data/user_profile.json";
import credentials from "@/data/credentials.json";

import { useLocalStorage } from "@/hooks/useLocalStorage";

interface ProfileMenuProps {
  handleLogOut: () => void;
}

type Theme = "light" | "dark";

const ProfileMenu = ({ handleLogOut }: ProfileMenuProps) => {
  const owner = UserProfile.find((user) => user.id === LOGGED_IN_USER_ID);
  const credential = credentials.find(
    (cred) => cred.account_id === owner?.account_id
  );

  // Theme State
  const {
    value: theme,
    setValue: setTheme,
  } = useLocalStorage<Theme>("theme", "light");

  //  Apply Theme
  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);


  // Detect System Theme Preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return;

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;

    setTheme(prefersDark ? "dark" : "light");
  }, [setTheme]);

  return (
    <div className="flex items-center justify-center bg-primary">
      <div className="relative flex w-[350px] flex-col items-center rounded-lg border border-primary-line bg-primary py-5">

        {/* Profile */}
        <div className="flex items-center justify-center">
          <div className="overflow-hidden rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-[5px]">
            <Link href={`/profile/${owner?.id}`}>
              <Image
                width={80}
                height={80}
                src="https://i.pinimg.com/1200x/95/cf/0b/95cf0b0894ac9afdb1ebc3c486a2b0ca.jpg"
                alt="user profile"
                className="h-20 w-20 rounded-full bg-primary object-cover"
              />
            </Link>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col gap-2 p-3 pb-6 text-center">
          <h1 className="text-3xl font-bold">
            {owner?.first_name} {owner?.last_name}
          </h1>
          <p className="text-sm opacity-50">
            {credential?.gmail}
          </p>
        </div>

        {/* Menu */}
        <div className="w-full border-t border-primary-line px-2 pt-2 text-base">
          <p><Link href="/checkout" className="px-4 py-2 my-4 font-semibold">Checkout</Link></p>
          <p><Link href="/my-purchases" className="px-4 py-2 my-2 font-semibold">My Purchases</Link></p>
          {/* Theme Toggle */}
          <div className="flex items-center justify-between rounded-sm px-4 py-2 transition hover:bg-secondary">
            <span className="font-semibold">Theme</span>

            <div className="flex gap-3">
              {/* Dark */}
              <button
                onClick={() => setTheme("dark")}
                className={`flex h-8 w-8 items-center justify-center rounded-full border
                  ${
                    theme === "dark"
                      ? "border-[#6D449F] bg-black"
                      : "border-gray-500 opacity-50"
                  }
                `}
              >
                🌙
              </button>

             

              {/* Light */}
              <button
                onClick={() => setTheme("light")}
                className={`flex h-8 w-8 items-center justify-center rounded-full border
                  ${
                    theme === "light"
                      ? "border-yellow-400 bg-white text-black"
                      : "border-gray-500 opacity-50"
                  }
                `}
              >
                ☀️
              </button>
            </div>
          </div>

          {/* Browsing Mode */}
          <div className="flex items-center justify-between rounded-sm px-4 py-2 transition hover:bg-secondary">
            <span className="font-semibold">Browsing Mode</span>
            <span className="text-gray-400">Standard</span>
          </div>

          {/* Logout */}
          <div
            onClick={handleLogOut}
            className="cursor-pointer rounded-sm px-4 py-3 transition hover:bg-secondary"
          >
            <span className="font-semibold">Log Out</span>
          </div>
        </div>

        {/* Divider Lines */}
        <hr className="absolute top-[18.4em] w-full border-primary-line" />
        <hr className="absolute top-[22.4em] w-full border-primary-line" />
      </div>
    </div>
  );
};

export default ProfileMenu;
