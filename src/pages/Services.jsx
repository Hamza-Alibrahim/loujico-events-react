/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.services.comprehensive.title"),
      icon: "📊",
      description: t("services.services.comprehensive.description"),
      features: [
        t("services.services.comprehensive.features.0"),
        t("services.services.comprehensive.features.1"),
        t("services.services.comprehensive.features.2"),
      ],
      color: "from-burning-flame to-orange-400",
    },
    {
      title: t("services.services.organization.title"),
      icon: "🎨",
      description: t("services.services.organization.description"),
      features: [
        t("services.services.organization.features.0"),
        t("services.services.organization.features.1"),
        t("services.services.organization.features.2"),
      ],
      color: "from-blue-fantastic to-blue-600",
    },
    {
      title: t("services.services.operation.title"),
      icon: "🏗️",
      description: t("services.services.operation.description"),
      features: [
        t("services.services.operation.features.0"),
        t("services.services.operation.features.1"),
        t("services.services.operation.features.2"),
      ],
      color: "from-truffle-trouble to-red-600",
    },
    {
      title: t("services.services.marketing.title"),
      icon: "🚀",
      description: t("services.services.marketing.description"),
      features: [
        t("services.services.marketing.features.0"),
        t("services.services.marketing.features.1"),
        t("services.services.marketing.features.2"),
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: t("services.process.steps.0.title"),
      description: t("services.process.steps.0.description"),
      icon: "👂",
      color: "from-burning-flame to-orange-400",
    },
    {
      step: "2",
      title: t("services.process.steps.1.title"),
      description: t("services.process.steps.1.description"),
      icon: "📝",
      color: "from-blue-fantastic to-blue-600",
    },
    {
      step: "3",
      title: t("services.process.steps.2.title"),
      description: t("services.process.steps.2.description"),
      icon: "⚡",
      color: "from-green-500 to-emerald-600",
    },
    {
      step: "4",
      title: t("services.process.steps.3.title"),
      description: t("services.process.steps.3.description"),
      icon: "📊",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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

  const featureVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
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
              {t("services.title")}
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
              {t("services.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              {t("services.process.title")}
            </h2>
            <p className="text-lg text-palladian/70">
              {t("services.process.description")}
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

      {/* Services Grid Section */}
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
              {t("services.services.title")}
            </h2>
            <p className="text-lg text-palladian/70">
              {t("services.services.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ltr:text-left"
                variants={itemVariants}
                transition={{
                  delay: Math.floor(index / 2) * 0.1 + (index % 2) * 0.05,
                }}
              >
                {/* Decorative Corner - Dynamic positioning */}
                <div
                  className={`absolute top-0 ltr:left-0 rtl:right-0 w-16 h-16 bg-linear-to-br ${service.color} ltr:rounded-br-3xl rtl:rounded-bl-3xl opacity-20`}
                />

                {/* Service Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-r ${service.color} flex items-center justify-center text-xl text-white shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-palladian mb-2">
                      {service.title}
                    </h3>
                    <p className="text-palladian/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center gap-2 text-palladian/90 text-sm"
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        delay: 0.3 + featureIndex * 0.08,
                      }}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.color} shrink-0`}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-fantastic">
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
              {t("services.cta.title")}
            </h2>
            <p className="text-lg text-palladian/70 mb-6">
              {t("services.cta.description")}
            </p>

            {/* PERFORMANCE: CSS-based CTA button */}
            <Link to={"/contact"}>
              <button className="cursor-pointer bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-burning-flame relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="relative z-10">
                  {t("services.cta.button")}
                </span>

                {/* CSS shine effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                {/* CSS pulse effect */}
                <div className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl animate-pulse-slow" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
