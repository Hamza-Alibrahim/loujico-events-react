/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-linear-to-b from-blue-fantastic to-abyssal-blue text-palladian relative overflow-hidden">
      {/* Static background elements - no animation for performance */}
      <div className="absolute inset-0">
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-burning-flame/5 rounded-full blur-2xl" />
        <div className="absolute top-10 left-10 w-24 h-24 bg-truffle-trouble/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20 ltr:text-left">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Brand Column */}
            <motion.div className="lg:col-span-1" variants={sectionVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative overflow-hidden group w-12 h-12 sm:w-14 sm:h-14">
                  <img
                    src="./logo.svg"
                    alt="Logo"
                    className="w-full h-full object-contain relative z-10 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold">{t("footer.brand.name")}</h3>
              </div>

              <p className="text-palladian/80 leading-relaxed mb-6 max-w-md text-right ltr:text-left">
                {t("footer.brand.description")}
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {[
                  { name: t("footer.social.twitter"), icon: "🐦", href: "#" },
                  { name: t("footer.social.linkedin"), icon: "💼", href: "#" },
                  { name: t("footer.social.instagram"), icon: "📷", href: "#" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    to={social.href}
                    className="w-9 h-9 bg-palladian/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-palladian/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-burning-flame/20 hover:border-burning-flame/30 hover:rotate-3"
                  >
                    <span className="text-sm">{social.icon}</span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={sectionVariants}>
              <h4 className="text-lg font-bold mb-6 text-burning-flame text-right ltr:text-left">
                {t("footer.quickLinks.title")}
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  { name: t("footer.quickLinks.home"), href: "/" },
                  { name: t("footer.quickLinks.about"), href: "/about" },
                  { name: t("footer.quickLinks.services"), href: "/services" },
                  { name: t("footer.quickLinks.projects"), href: "/projects" },
                  {
                    name: t("footer.quickLinks.achievements"),
                    href: "/achievements",
                  },
                  { name: t("footer.quickLinks.team"), href: "/team" },
                  { name: t("footer.quickLinks.contact"), href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="w-fit text-palladian/80 hover:text-burning-flame transition-all duration-300 flex items-center gap-2 group text-right py-1"
                    >
                      <span className="transition-transform ltr:rotate-180 duration-300 group-hover:-translate-x-1 ltr:group-hover:translate-x-1">
                        ←
                      </span>
                      <span className="transition-all duration-300 group-hover:font-medium">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={sectionVariants}>
              <h4 className="text-lg font-bold mb-6 text-burning-flame text-right ltr:text-left">
                {t("footer.services.title")}
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  t("footer.services.eventManagement"),
                  t("footer.services.eventOrganization"),
                  t("footer.services.exhibitionOperation"),
                  t("footer.services.marketing"),
                ].map((service) => (
                  <li key={service} className="text-right">
                    <span className="text-palladian/80 flex items-center gap-2 group cursor-default transition-all duration-300 hover:text-burning-flame hover:translate-x-1">
                      <span className="w-1.5 h-1.5 bg-burning-flame rounded-full transition-transform duration-300 group-hover:scale-125" />
                      <span>{service}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={sectionVariants}>
              <h4 className="text-lg font-bold mb-6 text-burning-flame text-right ltr:text-left">
                {t("footer.contact.title")}
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: "📞",
                    label: t("footer.contact.phone"),
                    value: t("footer.contact.phoneValue"),
                  },
                  {
                    icon: "📧",
                    label: t("footer.contact.email"),
                    value: t("footer.contact.emailValue"),
                  },
                  {
                    icon: "🏢",
                    label: t("footer.contact.address"),
                    value: t("footer.contact.addressValue"),
                  },
                ].map((contact) => (
                  <div
                    key={contact.label}
                    className="flex items-center flex-row-reverse gap-3 justify-end group"
                  >
                    <div className="text-right ltr:text-left transition-all duration-300 group-hover:translate-x-1">
                      <p className="text-palladian/70 text-sm">
                        {contact.label}
                      </p>
                      <p className="font-medium transition-colors duration-300 group-hover:text-burning-flame">
                        {contact.value}
                      </p>
                    </div>
                    <div className="w-9 h-9 bg-palladian/10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-burning-flame/10">
                      <span className="text-burning-flame transition-transform duration-300 group-hover:scale-110">
                        {contact.icon}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar - FIXED: Use onAnimationComplete from main container */}
        <motion.div
          className="border-t border-palladian/20 py-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-palladian/70 text-sm text-center md:text-right order-2 md:order-1">
              {t("footer.bottom.copyright", { year: currentYear })}
            </p>
            <div className="flex gap-6 text-sm order-1 md:order-2">
              {[t("footer.bottom.privacy"), t("footer.bottom.terms")].map(
                (link) => (
                  <Link
                    key={link}
                    to="#"
                    className="text-palladian/70 hover:text-burning-flame transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
