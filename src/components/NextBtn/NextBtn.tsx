import style from "./NextBtn.module.css";

interface NextBtnProps {
  content: string;
  backgroundColor?: string;
  handleClick: () => void;
}

const NextBtn = ({ content, backgroundColor, handleClick }: NextBtnProps) => {
  return (
    <button
      type="button"
      className={style.nextBtn}
      style={{ backgroundColor }}
      onClick={handleClick}
      aria-label="Go to the next step"
    >
      {content}
    </button>
  );
};

export default NextBtn;
