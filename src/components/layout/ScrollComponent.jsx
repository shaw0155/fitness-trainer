import * as React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function ScrollComponent({
  wrapperClassName: wrapperClassName,
  containerClassname: containerClassname,
  itemClassname: itemClassname,
  children,
}) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);

  return (
    <div className={`wrapper ${wrapperClassName}`}>
      <motion.div
        className={`container ${containerClassname}`}
        style={{
          scale,
        }}
      >
        <motion.div
          className={`item ${itemClassname}`}
          style={{
            scaleY: scrollYProgress,
            scaleX: scrollYProgress,
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
