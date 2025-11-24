/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileLanguageSwitcher from "./MobileLanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.achievements"), href: "/achievements" },
    { name: t("nav.team"), href: "/team" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          isScrolled
            ? "bg-blue-fantastic/50 backdrop-blur-md shadow-lg border-b border-palladian/20"
            : "bg-transparent border-b border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link to="/">
                <motion.div
                  className="relative overflow-hidden group w-12 h-12 sm:w-14 sm:h-14"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* SVG as Image */}
                  <img
                    src="./logo.svg"
                    alt="Logo"
                    className="w-full h-full object-contain relative z-10 transition-all duration-300 group-hover:scale-110"
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Menu with Better Spacing */}
            <div className="hidden lg:flex items-center gap-6 lg:gap-8">
              {navItems.map((item, index) => (
                <Link key={item.name} to={item.href}>
                  <motion.button
                    className="text-palladian hover:text-burning-flame transition-colors duration-300 font-medium relative py-2 group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-burning-flame group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                    />
                  </motion.button>
                </Link>
              ))}

              {/* Desktop Language Switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <LanguageSwitcher />
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              {/* Mobile Language Switcher */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <MobileLanguageSwitcher />
              </motion.div>

              <motion.button
                className="flex flex-col space-y-1.5 p-2"
                onClick={() => setIsOpen(!isOpen)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className={`w-6 h-0.5 bg-palladian transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <motion.span
                  className={`w-6 h-0.5 bg-palladian transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <motion.span
                  className={`w-6 h-0.5 bg-palladian transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu with Better Spacing */}
          <motion.div
            className={`lg:hidden overflow-hidden ${
              isOpen ? "block" : "hidden"
            } bg-blue-fantastic/95 backdrop-blur-lg border-t border-palladian/20`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  to={item.href}
                  className="block text-palladian hover:text-burning-flame transition-colors duration-300 font-medium py-4 px-6 ltr:text-left rtl:text-right ltr:border-l-4 rtl:border-r-4 border-transparent hover:border-burning-flame hover:bg-blue-fantastic/50"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
