"use client";
import React from "react";

import { useEffect, useRef } from "react";

import gsap from "gsap";

import Magnetic from "../magnetic/Magnetic";
import { Box, Button } from "@mui/joy";

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
  [key: string]: any;
}
export default function OutlineButton({
  children,
  backgroundColor = "#455CE9",
  ...attributes
}: Props) {
  const circle = useRef<any>(null);

  let timeline = useRef<any>(null);

  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });

    timeline.current

      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )

      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);

    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Magnetic>
      <Button
        variant="outlined"
        // className={styles.roundedButton}
        style={{
          overflow: "hidden",
          borderColor: backgroundColor,
        }}
        onMouseEnter={() => {
          manageMouseEnter();
        }}
        onMouseLeave={() => {
          manageMouseLeave();
        }}
        {...attributes}
      >
        {/* <p style={{ zIndex: 1000, fontWeight: "bolder", fontSize: "1.3em" }}> */}
        {children}
        {/* </p> */}

        <Box
          ref={circle}
          style={{ backgroundColor }}
          sx={{
            width: "100%",
            height: "150%",
            position: "absolute",
            borderRadius: "50%",
            top: "100%",
            zIndex: -1,
            backgroundColor,
          }}
        ></Box>
      </Button>
    </Magnetic>
  );
}
