"use client";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "@/src/utils/anim";
import styles from "./styles.module.css";

interface Props {
  text: string;
  [key: string]: any;
}

export default function TextSlideAnimation({ text }: Props) {
  const description = useRef(null);

  const isInView = useInView(description);

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {text.split(" ").map((word, index) => {
            return (
              <span className={styles.mask} key={index}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
