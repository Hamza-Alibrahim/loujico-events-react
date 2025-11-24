/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Achievements = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      number: 95,
      suffix: "%",
      label: t("achievements.achievements.stats.0.label"),
      icon: "⭐",
      description: t("achievements.achievements.stats.0.description"),
      color: "from-burning-flame to-orange-400",
    },
    {
      number: 90,
      suffix: "%",
      label: t("achievements.achievements.stats.1.label"),
      icon: "⏱️",
      description: t("achievements.achievements.stats.1.description"),
      color: "from-blue-fantastic to-blue-600",
    },
    {
      number: 50,
      suffix: "+",
      label: t("achievements.achievements.stats.2.label"),
      icon: "🎯",
      description: t("achievements.achievements.stats.2.description"),
      color: "from-truffle-trouble to-red-600",
    },
    {
      number: 200,
      suffix: "+",
      label: t("achievements.achievements.stats.3.label"),
      icon: "🚀",
      description: t("achievements.achievements.stats.3.description"),
      color: "from-purple-500 to-purple-600",
    },
    {
      number: 100000,
      suffix: "+",
      label: t("achievements.achievements.stats.4.label"),
      icon: "👥",
      description: t("achievements.achievements.stats.4.description"),
      color: "from-green-500 to-emerald-600",
    },
  ];

  const geographicScope = [
    {
      region: t("achievements.geographic.local.title"),
      locations: [
        t("achievements.geographic.local.locations.0"),
        t("achievements.geographic.local.locations.1"),
        t("achievements.geographic.local.locations.2"),
        t("achievements.geographic.local.locations.3"),
        t("achievements.geographic.local.locations.4"),
        t("achievements.geographic.local.locations.5"),
        t("achievements.geographic.local.locations.6"),
      ],
      icon: "🏠",
      color: "from-burning-flame to-orange-400",
    },
    {
      region: t("achievements.geographic.regional.title"),
      locations: [
        t("achievements.geographic.regional.locations.0"),
        t("achievements.geographic.regional.locations.1"),
        t("achievements.geographic.regional.locations.2"),
        t("achievements.geographic.regional.locations.3"),
      ],
      icon: "🌍",
      color: "from-blue-fantastic to-blue-600",
    },
    {
      region: t("achievements.geographic.global.title"),
      locations: [t("achievements.geographic.global.locations.0")],
      icon: "🌎",
      color: "from-truffle-trouble to-red-600",
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

  const achievementVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const scopeVariants = {
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

  const locationVariants = {
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
              {t("achievements.title")}
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
              {t("achievements.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Stats Section */}
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
              {t("achievements.achievements.title")}
            </h2>
            <p className="text-lg text-palladian/70">
              {t("achievements.achievements.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-5 sm:p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                variants={achievementVariants}
                transition={{ delay: index * 0.1 }}
              >
                {/* Decorative Corner - Dynamic positioning */}
                <div
                  className={`absolute top-0 ltr:left-0 rtl:right-0 w-16 h-16 bg-linear-to-br ${achievement.color} ltr:rounded-br-3xl rtl:rounded-bl-3xl opacity-20`}
                />

                {/* Achievement Content */}
                <div className="text-center relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-r ${achievement.color} flex items-center justify-center text-xl text-white mb-3 mx-auto transition-transform duration-300 group-hover:scale-110`}
                  >
                    {achievement.icon}
                  </div>

                  {/* Number */}
                  <div className="flex justify-center">
                    <CountUp
                      className="text-xl sm:text-2xl font-bold text-burning-flame mb-2 text-center"
                      end={achievement.number}
                      suffix={achievement.suffix}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>

                  {/* Label */}
                  <h4 className="text-lg font-bold text-palladian mb-2">
                    {achievement.label}
                  </h4>

                  {/* Description */}
                  <p className="text-palladian/80 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Geographic Scope Section */}
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
              {t("achievements.geographic.title")}
            </h2>
            <p className="text-lg text-palladian/70">
              {t("achievements.geographic.description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {geographicScope.map((scope, index) => (
              <motion.div
                key={index}
                className="bg-abyssal-blue rounded-2xl shadow-xl border border-palladian/20 p-5 sm:p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                variants={scopeVariants}
                transition={{ delay: index * 0.15 }}
              >
                {/* Decorative Corner - Dynamic positioning */}
                <div
                  className={`absolute top-0 ltr:left-0 rtl:right-0 w-16 h-16 bg-linear-to-br ${scope.color} ltr:rounded-br-3xl rtl:rounded-bl-3xl opacity-20`}
                />

                {/* Scope Content */}
                <div className="text-center relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-r ${scope.color} flex items-center justify-center text-xl text-white mb-3 mx-auto transition-transform duration-300 group-hover:scale-110`}
                  >
                    {scope.icon}
                  </div>

                  {/* Region Title */}
                  <h3 className="text-xl font-bold text-palladian mb-4">
                    {scope.region}
                  </h3>

                  {/* Locations List */}
                  <div className="space-y-2">
                    {scope.locations.map((location, locationIndex) => (
                      <motion.div
                        key={locationIndex}
                        className="flex items-center justify-center gap-2 text-palladian/90 group/location"
                        variants={locationVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 + locationIndex * 0.06 }}
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${scope.color} shrink-0 transition-transform duration-300 group-hover/location:scale-125`}
                        />
                        <span className="text-sm font-medium transition-colors duration-300 group-hover/location:text-burning-flame">
                          {location}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
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
              {t("achievements.cta.title")}
            </h2>
            <p className="text-lg text-palladian/70 mb-6 max-w-2xl mx-auto">
              {t("achievements.cta.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {/* Phone Button */}
              <Link to={"/contact"} className="max-sm:w-full">
                <button className="cursor-pointer bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-burning-flame relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95">
                  <span className="relative z-10">
                    {t("achievements.cta.contact")}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                  <div className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl animate-pulse-slow" />
                </button>
              </Link>

              {/* Projects Button */}
              <Link to="/projects" className="max-sm:w-full">
                <button className="cursor-pointer bg-blue-fantastic text-palladian px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-palladian relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95">
                  <span className="relative z-10">
                    {t("achievements.cta.projects")}
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-palladian/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
