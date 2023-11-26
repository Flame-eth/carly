"use client";
import Image from "next/image";
import { CustomButton } from ".";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <motion.div
        className="flex-1 pt-36 padding-x "
        initial={{
          x: "-100%",
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <h1 className="hero__title">
          Find, book or rent a car --quickly and easily!
        </h1>
        <p className="hero__subtitle">
          {/* Streamline your car rental experience. */}
          Create an account and get started for free today!
        </p>

        <CustomButton
          title="Explore our cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </motion.div>

      <motion.div
        className="hero__image-container"
        // animate={{
        //   scale: [0.8, 1.4],
        // }}
        // transition={{
        //   duration: 10,
        //   repeat: Infinity,
        //   repeatType: "reverse",
        // }}
      >
        <motion.div
          className="hero__image"
          animate={{
            x: [null, -200, 200, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image src="/hero.png" alt="hero" fill className="object-contain " />
        </motion.div>
        <div className="hero__image-overlay"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
