"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <motion.div
      className="w-full absolute z-10"
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
        // ease: "easeInOut",
        type: "spring",
      }}
    >
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 pc-6 py-4">
        <Link href="/" className="flex justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Carly Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "
        />
      </nav>
    </motion.div>
  );
};

export default Navbar;
