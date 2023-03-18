"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

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
      <TypingText title="| About GDSC" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-black"
      >
        GDSC stands for{" "}
        <span className="font-extrabold text-primary-black">
          Google Developer Student Clubs
        </span>
        , a program that helps student learn about technology and development
        through workshops, speaker sessions, hackathons, and other activities.
        The program also provides access to{" "}
        <span className="font-extrabold text-primary-black">
          online training
        </span>{" "}
        courses, development tools, and networking opportunities to help
        students develop their skills and connect with other{" "}
        <span className="font-extrabold text-primary-black">developer</span>.
        Overall, GDSC is a great way for students to gain the skills and
        experience they need to succeed in the field of technology and
        development.{" "}
        <span className="font-extrabold text-primary-black">explore</span> the
        world of technology and development GDSC.
      </motion.p>

      <a href="#explore">
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </a>
    </motion.div>
  </section>
);

export default About;
