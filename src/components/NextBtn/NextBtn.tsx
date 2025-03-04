import style from "./NextBtn.module.css";

interface BtnProps {
  handleClick: () => void;
}

const NextBtn = ({ handleClick }: BtnProps) => {
  return (
    <button type="button" className={style.btn} onClick={handleClick} aria-label="Go to the next step">
      Next Step
    </button>
  );
};

export default NextBtn;
