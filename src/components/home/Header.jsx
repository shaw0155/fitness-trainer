import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="header">
      <motion.div
        className="box header-title-container"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="header-title">
          The <span>ultimate</span> online personal training plans
        </h1>
        <Link className="header-link" to="/">
          <p className="header-link-content">Let's Start </p>
          <p className="header-link-arrow"> &rarr;</p>
        </Link>
      </motion.div>
    </div>
  );
}
