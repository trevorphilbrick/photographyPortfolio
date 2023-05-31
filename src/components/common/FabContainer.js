import React from "react";
import NavFab from "./NavFab";
import ContactFab from "./ContactFab";
import { motion } from "framer-motion";

const FabContainer = () => {
  return (
    <motion.div
      animate={{ x: 0, opacity: 1 }}
      initial={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.5, delay: 3 }}
      style={{ position: "fixed", bottom: 32, right: 32, zIndex: 200 }}
    >
      <NavFab />
      <ContactFab />
    </motion.div>
  );
};

export default FabContainer;
