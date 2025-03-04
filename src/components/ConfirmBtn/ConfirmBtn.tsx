import style from "./ConfirmBtn.module.css";

interface BtnProps {
  handleClick: () => void;
}

const ConfirmBtn = ({ handleClick }: BtnProps) => {
  return (
    <button type="button" className={style.btn} onClick={handleClick} aria-label="Confirm your choices">
      Confirm
    </button>
  );
};

export default ConfirmBtn;
