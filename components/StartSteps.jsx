import styles from '../styles';

const StartSteps = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`justify-center items-center w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]  lg:flex md:flex hidden`}
    >
      <p className="font-bold text-[20px] text-white">{number}</p>
    </div>
    <p className="flex-1 font-normal text-[18px] text-black leading-[32.4px] lg:ml-[30px] md:ml-[30px]">
      {text}
    </p>
  </div>
);

export default StartSteps;
