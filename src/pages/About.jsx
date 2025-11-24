/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const cardVariants = {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const stats = [
    { number: 200, suffix: "+", label: t("about.stats.projects"), icon: "🚀" },
    { number: 50, suffix: "+", label: t("about.stats.team"), icon: "👥" },
    {
      number: 95,
      suffix: "%",
      label: t("about.stats.satisfaction"),
      icon: "⭐",
    },
    { number: 5, suffix: "+", label: t("about.stats.experience"), icon: "⏱️" },
  ];

  const values = [
    {
      title: t("about.values.innovation.title"),
      icon: "💡",
      description: t("about.values.innovation.description"),
      color: "from-burning-flame to-orange-400",
    },
    {
      title: t("about.values.precision.title"),
      icon: "🎯",
      description: t("about.values.precision.description"),
      color: "from-blue-fantastic to-blue-600",
    },
    {
      title: t("about.values.transparency.title"),
      icon: "🔍",
      description: t("about.values.transparency.description"),
      color: "from-green-500 to-emerald-600",
    },
    {
      title: t("about.values.punctuality.title"),
      icon: "⏰",
      description: t("about.values.punctuality.description"),
      color: "from-purple-500 to-purple-600",
    },
    {
      title: t("about.values.quality.title"),
      icon: "⭐",
      description: t("about.values.quality.description"),
      color: "from-truffle-trouble to-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-40 bg-linear-to-br from-blue-fantastic to-abyssal-blue text-palladian overflow-hidden">
        {/* PERFORMANCE: Static background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-burning-flame/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-truffle-trouble/10 rounded-full blur-3xl" />
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
              {t("about.title")}
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
              {t("about.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section with Stats */}
      <section className="py-20 bg-abyssal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision & Mission Cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
            {/* Vision Card */}
            <motion.div
              className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-6 sm:p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ltr:text-left"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Decorative Element - Dynamic positioning based on direction */}
              <div className="absolute top-0 ltr:left-0 rtl:right-0 w-16 h-16 sm:w-20 sm:h-20 bg-burning-flame/20 rtl:rounded-bl-3xl ltr:rounded-br-3xl" />

              <motion.div
                className="text-3xl sm:text-4xl mb-4 sm:mb-6 text-burning-flame"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.2 }}
              >
                👁️
              </motion.div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-palladian mb-4 sm:mb-6">
                {t("about.vision.title")}
              </h2>

              <p className="text-base sm:text-lg text-palladian/80 leading-relaxed">
                {t("about.vision.description")}
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-6 sm:p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ltr:text-left"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
            >
              {/* Decorative Element - Dynamic positioning based on direction */}
              <div className="absolute top-0 ltr:left-0 rtl:right-0 w-16 h-16 sm:w-20 sm:h-20 bg-truffle-trouble/20 rtl:rounded-bl-3xl ltr:rounded-br-3xl" />

              <motion.div
                className="text-3xl sm:text-4xl mb-4 sm:mb-6 text-truffle-trouble"
                variants={iconVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.3 }}
              >
                🎯
              </motion.div>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-palladian mb-4 sm:mb-6">
                {t("about.mission.title")}
              </h2>

              <p className="text-base sm:text-lg text-palladian/80 leading-relaxed">
                {t("about.mission.description")}
              </p>
            </motion.div>
          </div>

          {/* Stats Cards - Optimized with variants */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-fantastic backdrop-blur-sm p-4 sm:p-5 rounded-xl border border-palladian/20 group relative overflow-hidden flex-1 min-w-[120px] sm:min-w-32 md:min-w-[150px] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  variants={statsVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-linear-to-br from-burning-flame/10 to-truffle-trouble/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className="text-lg sm:text-xl mb-2 text-center">
                    {stat.icon}
                  </div>

                  {/* Number */}
                  <div className="flex justify-center">
                    <CountUp
                      className="text-xl sm:text-2xl font-bold text-burning-flame mb-2 text-center"
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>

                  {/* Label */}
                  <div className="text-palladian font-semibold text-xs sm:text-sm text-center">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Culture Section */}
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
              {t("about.culture.title")}
            </h2>
            <p className="text-lg text-palladian/70">
              {t("about.culture.subtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-abyssal-blue rounded-xl shadow-lg border border-palladian/20 p-4 sm:p-5 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: Math.floor(index / 3) * 0.1 + (index % 3) * 0.05,
                }}
              >
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-linear-to-r ${value.color} flex items-center justify-center text-xl text-white mb-3 mx-auto transition-transform duration-300 group-hover:scale-110`}
                  variants={iconVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    delay:
                      0.2 + Math.floor(index / 3) * 0.1 + (index % 3) * 0.05,
                  }}
                >
                  {value.icon}
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-palladian mb-2 text-center">
                  {value.title}
                </h3>

                <p className="text-palladian/80 text-sm sm:text-base text-center leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
