/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Contact = () => {
  const { t } = useTranslation();

  const processSteps = [
    {
      step: "1",
      title: t("contact.process.steps.0.title"),
      description: t("contact.process.steps.0.description"),
      icon: "👂",
      color: "from-burning-flame to-orange-400",
    },
    {
      step: "2",
      title: t("contact.process.steps.1.title"),
      description: t("contact.process.steps.1.description"),
      icon: "📝",
      color: "from-blue-fantastic to-blue-600",
    },
    {
      step: "3",
      title: t("contact.process.steps.2.title"),
      description: t("contact.process.steps.2.description"),
      icon: "⚡",
      color: "from-truffle-trouble to-red-600",
    },
    {
      step: "4",
      title: t("contact.process.steps.3.title"),
      description: t("contact.process.steps.3.description"),
      icon: "📊",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const contactInfo = [
    {
      icon: "📞",
      title: t("contact.contact.info.phone.title"),
      value: t("contact.contact.info.phone.value"),
      link: t("contact.contact.info.phone.link"),
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: "📧",
      title: t("contact.contact.info.email.title"),
      value: t("contact.contact.info.email.value"),
      link: t("contact.contact.info.email.link"),
      color: "from-burning-flame to-orange-400",
    },
    {
      icon: "🌐",
      title: t("contact.contact.info.website.title"),
      value: t("contact.contact.info.website.value"),
      link: t("contact.contact.info.website.link"),
      color: "from-blue-fantastic to-blue-600",
    },
    {
      icon: "📍",
      title: t("contact.contact.info.address.title"),
      value: t("contact.contact.info.address.value"),
      link: t("contact.contact.info.address.link"),
      color: "from-purple-500 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const contactVariants = {
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

  const processVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-40 bg-linear-to-br from-blue-fantastic to-abyssal-blue text-palladian overflow-hidden">
        {/* PERFORMANCE: Static background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 ltr:left-20 rtl:right-20 w-40 h-40 bg-burning-flame/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 ltr:right-20 rtl:left-20 w-32 h-32 bg-truffle-trouble/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              {t("contact.title")}
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-burning-flame font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut",
              }}
            >
              {t("contact.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-abyssal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-4">
              {t("contact.process.title")}
            </h2>
            <p className="text-lg text-palladian/70">
              {t("contact.process.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group relative"
                variants={processVariants}
                transition={{ delay: index * 0.1 }}
              >
                {/* Connecting line between steps (except last one) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-burning-flame/20 -z-10" />
                )}

                {/* Main step container */}
                <div className="relative">
                  {/* Step number with gradient background */}
                  <div className="relative mb-4 mx-auto">
                    <div className="w-20 h-20 bg-linear-to-br from-blue-fantastic to-abyssal-blue rounded-full flex items-center justify-center text-xl font-bold text-white mb-3 mx-auto border-2 border-palladian/20 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:border-burning-flame/30">
                      {step.step}
                    </div>

                    {/* Floating icon with gradient */}
                    <div
                      className={`absolute -top-2 -right-2 max-sm:right-1/12 w-12 h-12 rounded-xl bg-linear-to-r ${step.color} flex items-center justify-center text-lg text-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}
                    >
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-palladian transition-colors duration-300 group-hover:text-burning-flame">
                      {step.title}
                    </h3>

                    <div className="w-12 h-1 bg-linear-to-r from-burning-flame to-orange-400 mx-auto rounded-full transition-transform duration-300 group-hover:scale-125" />

                    <p className="text-palladian/80 text-sm leading-relaxed transition-colors duration-300 group-hover:text-palladian/90">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-blue-fantastic">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-4">
              {t("contact.contact.title")}
            </h2>
            <p className="text-lg text-palladian/70">
              {t("contact.contact.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                to={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : "_self"}
                rel={
                  contact.link.startsWith("http") ? "noopener noreferrer" : ""
                }
                className="bg-abyssal-blue rounded-2xl shadow-xl border border-palladian/20 p-5 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] block"
                variants={contactVariants}
                transition={{ delay: index * 0.1 }}
              >
                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Contact Card Content */}
                <div className="flex items-center gap-3 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-r ${contact.color} flex items-center justify-center text-xl text-white shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {contact.icon}
                  </div>

                  <div className="flex-1 text-right rtl:text-right ltr:text-left">
                    <h3 className="text-lg font-bold text-palladian mb-1">
                      {contact.title}
                    </h3>

                    <p className="text-burning-flame font-semibold text-base">
                      {contact.value}
                    </p>
                  </div>
                </div>

                {/* Click Indicator */}
                <div className="absolute ltr:right-3 rtl:left-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1.5 h-1.5 bg-burning-flame rounded-full" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-abyssal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-4">
              {t("contact.cta.title")}
            </h2>
            <p className="text-lg text-palladian/70 mb-6 max-w-2xl mx-auto">
              {t("contact.cta.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {/* Phone Button */}
              <Link to={"tel:+963996320963"} className="max-sm:w-full">
                <button className="cursor-pointer bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-burning-flame relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95">
                  <span className="relative z-10">
                    {t("contact.cta.phone.text")}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl animate-pulse-slow" />
                </button>
              </Link>

              {/* Email Button */}
              <Link
                to={"mailto:info@yousefallouji.com"}
                className="max-sm:w-full"
              >
                <button className="cursor-pointer bg-blue-fantastic text-palladian px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-palladian relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95">
                  <span className="relative z-10">
                    {t("contact.cta.email.text")}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-palladian/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                </button>
              </Link>
            </div>

            <p className="text-palladian/60 mt-6 text-sm">
              {t("contact.cta.responseTime")}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
