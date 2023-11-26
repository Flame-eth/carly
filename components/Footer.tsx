"use client";
import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col text-black-100 mt-5 border-t border-gray-100 "
      initial={{
        y: -100,
      }}
      whileInView={{
        y: [200, 150, 180, 100, 120, 60, 90, 30, 50, 0],
        scale: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10  ">
        <div className="flex flex-col justify-start items-start gap-6 ">
          <Image
            src="/logo.svg"
            alt="Carly Logo"
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            Carly 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link, index) => (
            <div className="footer__link" key={index}>
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item, index) => (
                <Link href={item.url} key={index}>
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between flex-col md:flex-row items-center mt-10 flex-wrap border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Carly. All Rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link className="text-gray-500" href="/">
            Privacy Policy
          </Link>
          <Link className="text-gray-500" href="/">
            Terms of Service
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
