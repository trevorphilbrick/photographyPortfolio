import { useRef, useState } from "react";
import { motion } from "framer-motion";

const MasonryTile = ({ image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);
  return (
    <motion.div
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: imageLoaded + 0.5 }}
      initial={{ opacity: 0 }}
    >
      <img
        ref={imageRef}
        src={image.imageUrl}
        key={image.id}
        style={{
          width: "100%"
        }}
        onLoad={() => setImageLoaded(true)}
      />
    </motion.div>
  );
};

export default MasonryTile;
