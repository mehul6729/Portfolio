export const fadeInLeft = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const boxVariants2 = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export const boxVariants3 = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
};

export const iconLeftAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const iconRightAnimation = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};


export const heartbeat = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "easeInOut",
  },

};