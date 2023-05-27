import { useState, useRef } from "react";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";

const MasonryTile = ({ image }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imageRef = useRef(null);
  return (
    <motion.div layout animate={{ opacity: imageLoaded ? 1 : 0 }}>
      {!imageLoaded && (
        <Skeleton
          variant="rectangular"
          width={imageRef.current ? imageRef.current.offsetWidth : 0}
          height={imageRef.current ? imageRef.current.offsetHeight : 0}
          animation="wave"
        />
      )}
      <img
        ref={imageRef}
        src={image.imageUrl}
        key={image.id}
        onLoad={() => setImageLoaded(true)}
        style={{
          width: "100%",
        }}
      />
    </motion.div>
  );
};

export default MasonryTile;
