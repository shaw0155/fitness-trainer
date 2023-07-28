import { motion } from "framer-motion";

export default function Transition({ className: classname, children }) {
  return (
    <motion.div
      className={`box ${classname}`}
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
}
