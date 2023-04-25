'use client';

import { motion } from "framer-motion";
import styles from '../styles';
import { TypingText } from "../components";
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="About Us" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Welcome to <span className="font-extrabold text-white">Indian Express</span>, where we invite you to indulge in the flavors of India. Our restaurant offers a diverse menu featuring <span className="font-extrabold text-white">authentic Indian dishes</span> prepared with the freshest ingredients and traditional spices. From savory curries and <span className="font-extrabold text-white">tandoori</span> dishes to flavorful vegetarian options and delectable desserts, there is something for everyone to savor. Our talented chefs pride themselves on creating dishes that are not only delicious but also visually appealing. Whether you're dining with <span className="font-extrabold text-white">friends or family</span>, celebrating a special occasion, or simply looking for a great meal, Indian Express is the perfect destination. Our warm and welcoming atmosphere, attentive service, and exquisite food are sure to make your dining experience an unforgettable one. Come join us and take a culinary journey through India!
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
