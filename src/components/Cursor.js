import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useMousePosition from "../hooks/useMouse";
import isMobile from 'is-mobile';

const handleBodyClick = (event) => {
    event.stopPropagation();
};

document.body.addEventListener("click", handleBodyClick);

const CursorStyles = styled(motion.div)`
  pointer-events: none;
  position: fixed;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: var(--text);
  border: 1px solid var(--text);
  mix-blend-mode: difference;
  z-index: 20;
  cursor: none;
`;

const Cursor = () => {
    const { x, y } = useMousePosition();
    const [showCustomCursor, setShowCustomCursor] = useState(true);

    useEffect(() => {
        const handleMouseEnter = () => {
            setShowCustomCursor(true);
        };

        const handleMouseLeave = () => {
            setShowCustomCursor(false);
        };

        document.body.addEventListener("mouseenter", handleMouseEnter);
        document.body.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            document.body.removeEventListener("mouseenter", handleMouseEnter);
            document.body.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    const isMobileDevice = isMobile();

    if (isMobileDevice) {
        return null; // Ne rend pas le curseur personnalisé sur les appareils mobiles
    }

    return (
        <CursorStyles
            style={{
                display: showCustomCursor ? "block" : "none",
                top: y,
                left: x,
                transform: "translate(-50%, -50%)",
            }}
            animate={{ opacity: 1, backgroundColor: "gray" }}
            transition={{ ease: "linear", duration: 0.1 }}
        />
    );
};

export { Cursor };
