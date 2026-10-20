import React, { useState, useEffect, useRef } from "react";
import {
  Coffee,
  Flame,
  Leaf,
  Scale,
  Sparkles,
  Star,
  CheckCircle,
  Users,
  Award,
  Calendar,
  TrendingUp,
  ArrowRight,
  Zap,
  Heart,
} from "lucide-react";
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 });

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <Leaf className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#8A5233]" />,
      title: "Ethical Sourcing",
      description:
        "We partner directly with sustainable smallholder farms in Sumatra, Ethiopia, and Colombia, guaranteeing ethical fair wages and regenerative agriculture.",
      position: "left",
    },
    {
      icon: <Flame className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#8A5233]" />,
      title: "Artisan Roasting",
      description:
        "Each harvest is roasted in-house in small, carefully timed batches to coax out deep tasting notes of toasted hazelnut, caramelized cocoa, and wild honey.",
      position: "left",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#8A5233]" />,
      title: "Precision Calibration",
      description:
        "Our baristas weigh, time, and calibrate every shot down to the gram and second for balanced, silky extraction in every single pour.",
      position: "left",
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-[#8A5233]" />,
      title: "Signature Brews",
      description:
        "From velvety flat whites to single-origin cold brews steeped for 18 hours, every cup is crafted with obsessive attention to taste and texture.",
      position: "right",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-[#8A5233]" />,
      title: "Fresh Bakery",
      description:
        "Baked fresh every single morning using European cultured butter and unrefined cane sugar, curated to pair harmoniously with our coffee lineup.",
      position: "right",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-[#8A5233]" />,
      title: "The Third Place",
      description:
        "A warm community sanctuary between work and home. Analog vinyl records, soothing acoustics, fast fiber Wi-Fi, and genuine hospitality.",
      position: "right",
    },
  ];

  const stats = [
    { icon: <Award className="w-7 h-7" />, value: 15, label: "Single Origins", suffix: "+" },
    { icon: <Users className="w-7 h-7" />, value: 250, label: "Happy Regulars", suffix: "k+" },
    { icon: <Calendar className="w-7 h-7" />, value: 6, label: "Years of Craft", suffix: "+" },
    { icon: <TrendingUp className="w-7 h-7" />, value: 99, label: "Satisfaction Rate", suffix: "%" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 px-4 sm:px-6 md:px-12 text-[#2E1A11] overflow-hidden relative z-20"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#8A5233]/10 blur-3xl pointer-events-none"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[#D5C2B2]/25 blur-3xl pointer-events-none"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-[#8A5233]/30 pointer-events-none"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-[#D5C2B2]/40 pointer-events-none"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="container mx-auto max-w-6xl relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-6" variants={itemVariants}>
          <motion.span
            className="text-[#8A5233] font-semibold text-xs sm:text-sm tracking-widest uppercase mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            DISCOVER OUR STORY
          </motion.span>
          <h2 
            className="text-5xl md:text-7xl font-bold mb-4 text-center text-[#2E1A11]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Crafted with Soul, Poured with Love
          </h2>
          <motion.div
            className="h-1 bg-[#8A5233] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.p className="text-center max-w-2xl mx-auto mb-16 text-[#4A3222] text-base md:text-lg leading-relaxed px-4" variants={itemVariants}>
          Born in 2018 from a vintage mobile espresso cart, Joe's Coffee has grown into a sanctuary for coffee lovers.
          We are dedicated to elevating everyday rituals through ethical sourcing and obsessive brewing craft.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">
          {/* Left Column */}
          <div className="space-y-12 sm:space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl relative aspect-[3/4]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=800&q=80"
                  alt="Artisan Coffee Craft"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#2E1A11]/85 via-transparent to-transparent flex items-end justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <a
                    href="#menu"
                    className="bg-[#F3E8DB] text-[#2E1A11] px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg hover:bg-white transition-all hover:scale-105 active:scale-95"
                  >
                    Our Menu <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </motion.div>
              <motion.div
                className="absolute inset-0 border-4 border-[#8A5233]/30 rounded-2xl -m-3 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />

              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-[#8A5233]/15"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-[#D5C2B2]/30"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                style={{ y: y2 }}
              />

              {/* Additional decorative elements */}
              <motion.div
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#8A5233]"
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#D5C2B2]"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 sm:space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section with Spring Counter Animation */}
        <motion.div
          ref={statsRef}
          className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }) {
  return (
    <motion.div
      className="flex flex-col group cursor-pointer"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-[#8A5233] bg-[#8A5233]/10 p-3 rounded-xl transition-colors duration-300 group-hover:bg-[#8A5233]/20 relative shadow-sm"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-bold text-[#2E1A11] group-hover:text-[#8A5233] transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-[#5D4232] leading-relaxed pl-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-2 pl-12 flex items-center text-[#8A5233] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <span className="flex items-center gap-1">
          Learn more <ArrowRight className="w-3 h-3" />
        </span>
      </motion.div>
    </motion.div>
  );
}

function StatCounter({ icon, value, label, suffix, delay }) {
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: false });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 12,
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value);
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      springValue.set(0);
      setHasAnimated(false);
    }
  }, [isInView, value, springValue, hasAnimated]);

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest));

  return (
    <motion.div
      className="bg-white/50 backdrop-blur-md p-6 rounded-[2rem] border border-white/60 flex flex-col items-center text-center group hover:bg-white/80 transition-all duration-300 shadow-sm"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-[#8A5233]/10 flex items-center justify-center mb-4 text-[#8A5233] group-hover:bg-[#8A5233]/20 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div 
        ref={countRef} 
        className="text-4xl font-bold text-[#2E1A11] flex items-center" 
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-[#5D4232] text-xs font-semibold uppercase tracking-wider mt-1">{label}</p>
      <motion.div className="w-8 h-0.5 bg-[#8A5233] mt-3 group-hover:w-14 transition-all duration-300 rounded-full" />
    </motion.div>
  );
}
