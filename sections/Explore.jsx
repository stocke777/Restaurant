'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import styles from '../styles';
import { navVariants, staggerContainer } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('world-2')
  return <section className={`${styles.paddings}`} id='explore'>
    <motion.div variants={staggerContainer} initial="hidden" whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <TypingText title="The Favorites" textStyles='text-center' />
      <TitleText title={<>Choose the delicacy you want <br className="md:block hidden" /> </>} textStyles='text-center' />

      <div className="flex mt-[50px] flex-col lg:flex-row min-h-[70vh] gap-5">
        {exploreWorlds.map((world, index) => {

          return <ExploreCard
            key={world.id}
            {...world}
            index={index}
            active={active} handleClick={setActive}
          />
        })}
      </div>
    </motion.div>
  </section>
};

export default Explore;
