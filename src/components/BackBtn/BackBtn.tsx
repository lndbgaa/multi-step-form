import style from "./BackBtn.module.css";

interface BackBtnProps {
  handleClick: () => void;
}

const BackBtn = ({ handleClick }: BackBtnProps) => {
  return (
    <button type="button" className={style.backBtn} onClick={handleClick} aria-label="Go back to the previous step">
      Go Back
    </button>
  );
};

export default BackBtn;
