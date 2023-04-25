'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <TypingText title="Sweet Corner" textStyles="text-center" />
      <TitleText
        title={(
          <>Invite your friends over a special get-together for sweetest of the sweets.
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-[600px] h-[400px] mx-auto"
      >
        <img src="/people3.png" alt="map" className="w-full h-full object-cover" />
      </motion.div>
    </motion.div>
  </section>
);

export default World;