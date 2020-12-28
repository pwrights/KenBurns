import React, { useState, useEffect } from "react";
//import { v4 as uuid_v4 } from "uuid";
import { AnimatePresence } from "framer-motion";
import { ViewBox, ImageBox, Image, ImageCopy } from "./styles";
import { slideData } from "./data";

import "../styles.css";

const imageBoxVariants = {
  hidden: {
    opacity: 0,
    rotate: 5,
    scale: 1.2
  },
  kenBurns: {
    opacity: 1,
    rotate: 0,
    scale: 1
  }
};

const imageCopyVariants = {
  hidden: {
    opacity: 0,
    rotate: 2,
    scale: 0.5
  },
  kenBurns: {
    opacity: [0, 1, 1, 1, 0],
    rotate: 0,
    scale: 1.0
  }
};

const KenBurns = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlide((prev) => (prev + 1) % slideData.length);
    }, 10 * 1000);
    return () => clearInterval(slideInterval);
  }, [slide]);

  return (
    <div className="centerBox">
      <ViewBox>
        <AnimatePresence>
          <ImageBox
            key={slide}
            variants={imageBoxVariants}
            initial="hidden"
            animate="kenBurns"
            exit="hidden"
            transition={{
              ease: "easeInOut",
              duration: 5,
              delayChildren: 5
            }}
          >
            <Image
              key={slideData[slide].url}
              src={slideData[slide].url}
              alt={slideData[slide].alt}
            />
            <ImageCopy
              key={slideData[slide].copy}
              style={{ originX: 0, originY: 0 }}
              variants={imageCopyVariants}
              transition={{ duration: 5, ease: "easeOut" }}
            >
              <h1>{slideData[slide].copy}</h1>
            </ImageCopy>
          </ImageBox>
        </AnimatePresence>
      </ViewBox>
    </div>
  );
};

export default KenBurns;
