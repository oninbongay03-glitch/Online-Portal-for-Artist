'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import LightRays from "../components/ui/LightRays";
import { getData } from "@/utils/storage";
import { useEffect } from "react";

const images = [
  "https://i.pinimg.com/474x/81/ff/ab/81ffab6f07d5640bf654264f7e07a9ae.jpg",
"https://i.pinimg.com/474x/81/ff/ab/81ffab6f07d5640bf654264f7e07a9ae.jpg",
"https://i.pinimg.com/474x/81/ff/ab/81ffab6f07d5640bf654264f7e07a9ae.jpg",
"https://i.pinimg.com/474x/81/ff/ab/81ffab6f07d5640bf654264f7e07a9ae.jpg",
"https://i.pinimg.com/474x/81/ff/ab/81ffab6f07d5640bf654264f7e07a9ae.jpg",
];

const floatAnim = {
  animate: {
    y: [0, -8, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Homepage = () => {
  useEffect(() => {
    const data = getData("myCommissionRequest");
    console.log("My Commission Requests:", data);
  }, []);
  return (
    <div className="relative mx-auto w-full max-w-[1680px] overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 z-[-10]">
        {/* <LightRays
          raysOrigin="top-center"
          raysColor="#0af759"
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={3}
          followMouse
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.1}
        /> */}
      </div>

      <main className="flex flex-col gap-32 px-4 py-24 md:px-10">

        {/* ================= HERO ================= */}
        <section className="flex flex-col items-center gap-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-4xl font-bold md:text-6xl"
          >
            A place to display your <br />
            <span className="text-primary-blue">masterpiece.</span>
          </motion.h1>

          {/* Image Stack */}
          {/* <div className="relative flex h-[220px] w-full max-w-4xl justify-center">
            {images.slice(0, 5).map((src, i) => (
              <motion.div
                key={i}
                {...floatAnim}
                className="absolute"
                style={{
                  transform: `translateX(${(i - 2) * 60}px) rotate(${(i - 2) * 6}deg)`,
                }}
              >
                <Image
                  src={src}
                  alt="Artwork"
                  width={140}
                  height={180}
                  className="rounded-xl object-cover shadow-xl"
                />
              </motion.div>
            ))}
          </div> */}
        </section>

        {/* ================= SHOWCASE ================= */}
        <section className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Showcase, Sell, <br />
              <span className="text-red-500">& acquire arts</span> to our marketplace.
            </h2>
            <p className="max-w-md text-gray-400">
              Discover and trade artworks with artists and collectors worldwide.
            </p>
          </motion.div>

         
          {/* <div className="relative flex h-[260px] justify-center">
            {images.slice(0, 4).map((src, i) => (
              <motion.div
                key={i}
                {...floatAnim}
                className="absolute"
                style={{
                  transform: `translateX(${i * 40}px) rotate(${i * 5}deg)`,
                }}
              >
                <Image
                  src={src}
                  alt="Artwork"
                  width={160}
                  height={220}
                  className="rounded-xl shadow-xl"
                />
              </motion.div>
            ))}
          </div> */}
        </section>

        {/* ================= FEATURED ================= */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Featured Artwork of the month</h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[420px] w-full overflow-hidden rounded-2xl"
          >
            <Image
              src={images[0]}
              alt="Featured Art"
              fill
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* ================= ARTIST MESSAGE ================= */}
        <section className="flex flex-col items-center gap-10 text-center">
          <p className="max-w-2xl text-lg text-gray-300">
            Whether you're an artist or a collector, this is your gateway to
            creativity and commerce.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {images.map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Artist"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            ))}
          </div>
        </section>

    {/* COMMUNITY */}
        <section className="flex flex-col items-center gap-10">
          <h2 className="text-xl font-semibold">
            You’ll find yourself <br /> among us
          </h2>

          <div className="grid grid-cols-5 gap-4 sm:grid-cols-7 md:grid-cols-10">
            {images.concat(images).map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Community"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
            ))}
          </div>
        </section>

        {/* MARKETPLACE */}
        <section className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold">Marketplace</h2>
            <p className="text-gray-400">for Creativity</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            {["Sell Art", "Buy Art", "Collaborate", "Discover"].map((label, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="flex h-40 items-center justify-center rounded-xl bg-primary text-sm font-medium shadow-lg"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default Homepage;
