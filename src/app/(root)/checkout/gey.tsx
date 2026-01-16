'use client';

import { motion } from "framer-motion";
import { useEffect } from "react";
import { getData } from "@/utils/storage";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const float = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 1.5, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/* ================= PAGE ================= */

const Homepage = () => {
  useEffect(() => {
    const data = getData("myCommissionRequest");
    console.log("My Commission Requests:", data);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[1680px] overflow-hidden">
      <main className="flex flex-col gap-40 px-4 py-28 md:px-10">

        {/* ================= HERO ================= */}
        <section className="flex flex-col items-center gap-14 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-4xl text-4xl font-bold md:text-6xl"
          >
            A place to display your <br />
            <span className="text-primary-blue">masterpiece.</span>
          </motion.h1>

          {/* Floating Stack */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative flex h-[240px] w-full max-w-4xl justify-center"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                {...float}
                className="absolute h-[180px] w-[140px] rounded-xl bg-primary shadow-2xl"
                style={{
                  transform: `translateX(${(i - 2) * 70}px) rotate(${(i - 2) * 8}deg)`,
                }}
                whileHover={{ scale: 1.08, y: -12 }}
              />
            ))}
          </motion.div>
        </section>

        {/* ================= SHOWCASE ================= */}
        <section className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">
              Showcase, Sell, <br />
              <span className="text-red-500">& acquire arts</span>
            </h2>
            <p className="max-w-md text-gray-400">
              Discover and trade artworks with artists and collectors worldwide.
            </p>
          </motion.div>

          <div className="relative flex h-[260px] justify-center">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                {...float}
                className="absolute h-[220px] w-[160px] rounded-xl bg-primary shadow-xl"
                style={{
                  transform: `translateX(${i * 50}px) rotate(${i * 6}deg)`,
                }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </section>

        {/* ================= FEATURED ================= */}
        <section className="space-y-8">
          <h2 className="text-2xl font-bold">Featured Artwork of the Month</h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative h-[420px] w-full rounded-2xl bg-primary shadow-2xl"
          />
        </section>

        {/* ================= ARTIST MESSAGE ================= */}
        <section className="flex flex-col items-center gap-12 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-2xl text-lg text-gray-300"
          >
            Whether you're an artist or a collector, this is your gateway to
            creativity and commerce.
          </motion.p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="h-12 w-12 rounded-full bg-primary"
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </motion.div>
        </section>

        {/* ================= COMMUNITY ================= */}
        <section className="flex flex-col items-center gap-10">
          <h2 className="text-xl font-semibold text-center">
            You’ll find yourself <br /> among us
          </h2>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-5 gap-4 sm:grid-cols-7 md:grid-cols-10"
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="h-12 w-12 rounded-full bg-primary"
                whileHover={{ scale: 1.15 }}
              />
            ))}
          </motion.div>
        </section>

        {/* ================= MARKETPLACE ================= */}
        <section className="space-y-10">
          <div>
            <h2 className="text-2xl font-bold">Marketplace</h2>
            <p className="text-gray-400">for Creativity</p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4"
          >
            {["Sell Art", "Buy Art", "Collaborate", "Discover"].map((label) => (
              <motion.div
                key={label}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="flex h-40 items-center justify-center rounded-xl bg-primary text-sm font-medium shadow-xl"
              >
                {label}
              </motion.div>
            ))}
          </motion.div>
        </section>

      </main>
    </div>
  );
};

export default Homepage;
