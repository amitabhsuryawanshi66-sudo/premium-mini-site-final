export const transitions = {
  // Mechanical and Precise - High stiffness, high damping per Emil Kowalski
  mechanical: {
    type: "spring",
    stiffness: 260,
    damping: 20,
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
    damping: 15,
  },
  // Smooth editorial reveal per Taste/Impeccable
  editorial: {
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1], // Custom Bézier for high-end feel
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
        staggerChildren: 0.08,
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
