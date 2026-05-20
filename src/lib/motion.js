export const transitions = {
  spring: {
    type: "spring",
    stiffness: 260,
    damping: 20,
  },
  soft: {
    type: "spring",
    stiffness: 100,
    damping: 15,
  },
  smooth: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  },
};

export const variants = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  reveal: {
    initial: { clipPath: "inset(100% 0% 0% 0%)" },
    animate: { clipPath: "inset(0% 0% 0% 0%)" },
  },
};
