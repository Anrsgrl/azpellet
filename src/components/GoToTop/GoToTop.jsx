import React, { useEffect } from "react";
import { useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import { motion, AnimatePresence } from "framer-motion";
import "./GoToTop.scss";
const GoToTop = () => {
    const [btn, setBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBtn(true);
            } else {
                setBtn(false);
            }
        });
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <AnimatePresence>
                {btn && (
                    <motion.button key={btn} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="go-to-top" onClick={() => scrollToTop()}>
                        <SlArrowUp />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default GoToTop;