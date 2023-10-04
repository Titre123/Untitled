import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function Revaeal({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const width = window.innerWidth;

  const variants = {
    hidden: { opacity: 0, y: 75 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.75, delay }}
      ref={ref}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export function TopAnimation({ delay, children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const width = window.innerWidth;

  const variants = {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 },
  };

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 1.25, delay }}
      ref={ref}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}

export function SlideAnimation({ children, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const width = window.innerWidth;

  const variants = {
    hidden: { opacity: 0, y: -75 },
    visible: { opacity: 1, y: 0 },
  };

  const slideVariants = {
    hover: {
      right: 0,
      top: 0,
      width: "100%",
      y: -75,
      opacity: 1
    },
    faded: {
      width: 0,
      y: 0,
      opacity: 0
    },
  };
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
      controls.start("faded")
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative">
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1.25, delay }}
        className="w-full"
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute bg-violet-500 h-full w-full"
        variants={slideVariants}
        initial="hover"
        animate={controls}
        transition={{ duration: 1.25, delay }}
      ></motion.div>
    </div>
  );
}
