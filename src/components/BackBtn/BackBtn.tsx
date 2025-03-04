import style from "./BackBtn.module.css";

interface BtnProps {
  handleClick: () => void;
}

const BackBtn = ({ handleClick }: BtnProps) => {
  return (
    <button type="button" className={style.btn} onClick={handleClick} aria-label="Go back to the previous step">
      Go Back
    </button>
  );
};

export default BackBtn;
