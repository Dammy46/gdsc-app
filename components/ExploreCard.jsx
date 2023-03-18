'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, title, link, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative  ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer google-gradient rounded-md`}
    onClick={() => handleClick(id)}
  >
    {active !== id ? (
      <h3
        className={`font-semibold sm:text-[26px] text-[18px] absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] ${
          active === id ? "text-black" : "text-white"
        } `}
      >
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 lg:p-8 p-2 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.06)] rounded-b-[24px]">
        <a href={link} target="_blank">
          <div
            className={`${styles.flexCenter} lg:w-[60px] lg:h-[60px] h-[50px] w-[50px] rounded-[24px] border border-white mb-[16px]`}
          >
            <img
              src="/google.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-black uppercase">
            Enter field
          </p>
          <h2 className="lg:mt-[24px] mt-[10px] font-semibold sm:text-[32px] text-[24px] text-black">
            {title}
          </h2>
        </a>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
