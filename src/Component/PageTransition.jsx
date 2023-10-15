import { motion } from "framer-motion";
const PageTransition = ({ children }) => {
  const opacityAnimation = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
  };
  // const rotateAnimation = {
  //   initial: { rotateY: 0 },
  //   animate: { rotateY: 90 },
  //   exit: {
  //     rotateY: -90,
  //   },
  // };
  return (
    <motion.div
      className="slide-out"
      transition={{ ease: "easeInOut", duration: 0.4 }}
      variants={opacityAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
