import React, { useState } from "react";
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const Header = ({ home, about, form }) => {
  const { t, i18n } = useTranslation();
  const [color, setColor] = useState();
  const [hamburger, setHamburger] = useState(false);
  const changeColor = () => {
    setHamburger(false);
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current?.offsetTop - 60,
      behavior: "smooth",
    });
  };
  const clickHandle = (lang) => {
    i18n.changeLanguage(lang);
  };

  const openCertificates = () => {
    if (i18n.language === "aze") {
      window.open(
        "https://drive.google.com/file/d/1ibJycIGbE8pH0PT7CYLlni9cRl9WknoN/view"
      );
    } else {
      window.open(
        "https://drive.google.com/file/d/1oIuejhn1eqvdaXQ2jsq1nvNh4tddCRPS/view?pli=1"
      );
    }
  };

  window.addEventListener("scroll", changeColor);

  const headerElements = [
    {
      name: t("Nav1"),
      func: () => scrollToSection(home),
    },
    {
      name: t("Nav2"),
      func: () => scrollToSection(about),
    },
    {
      name: t("Nav4"),
      func: () => openCertificates(home),
    },
    {
      name: t("Nav3"),
      func: () => scrollToSection(form),
    },
  ];
  return (
    <header className={color ? "scrolled py-2" : "py-2"}>
      <div className="container">
        <div className="header-content">
          <h2>
            <button
              onClick={() => {
                scrollToTop();
              }}
              className="clean-button"
            >
              Azpellet
            </button>
          </h2>
          <ul className="p-0 pe-5">
            {headerElements.map((item) => (
              <li>
                <button
                  type="button"
                  title={item.name}
                  aria-label={item.name}
                  onClick={item.func}
                  className="clean-button"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
          <div className="header-right">
            <select
              name="Languages"
              id="Languages"
              title="Languages"
              aria-label="Languages"
              onChange={(e) => {
                clickHandle(e.target.value);
              }}
            >
              <option aria-label="EN" title="EN" value="en">
                EN
              </option>
              <option aria-label="AZ" title="AZ" value="aze">
                AZ
              </option>
              <option aria-label="RU" title="RU" value="ru">
                RU
              </option>
            </select>
            <div className="hamburger">
              <button
                type="button"
                className="hamburger-button clean-button py-0"
                onClick={() => setHamburger(!hamburger)}
              >
                <GiHamburgerMenu />
              </button>
              <AnimatePresence>
                {hamburger && (
                  <motion.aside
                    key={hamburger}
                    initial={{ right: -200, opacity: 0 }}
                    animate={{ right: 0, opacity: 1 }}
                    exit={{ right: -200, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      opacity: { ease: "linear" },
                    }}
                  >
                    <button
                      className="close-button clean-button"
                      onClick={() => setHamburger(false)}
                    >
                      <AiOutlineCloseCircle />
                    </button>
                    <ul>
                      {headerElements.map((item) => (
                        <li>
                          <button
                            type="button"
                            title={item.name}
                            aria-label={item.name}
                            onClick={item.func}
                            className="clean-button"
                          >
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.aside>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
