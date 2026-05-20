export const transitions = {
  // Mechanical and Precise - High stiffness, high damping for no overshoot but fast response
  mechanical: {
    type: "spring",
    stiffness: 400,
    damping: 30,
    mass: 0.8
  },
  // Snappy for UI elements
  snappy: {
    type: "spring",
    stiffness: 300,
    damping: 25,
  },
  // Soft for larger panels
  soft: {
    type: "spring",
    stiffness: 100,
    damping: 20,
  },
  // Smooth editorial reveal
  editorial: {
    duration: 0.7,
    ease: [0.33, 1, 0.68, 1],
  },
};

export const variants = {
  fadeIn: {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 15 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  },
  // Precise slide for the control panel
  slideUp: {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  },
  // Media panel reveal
  reveal: {
    initial: { clipPath: "inset(100% 0% 0% 0%)" },
    animate: { clipPath: "inset(0% 0% 0% 0%)" },
  },
};
