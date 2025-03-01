import { STEPS } from "../../constants";
import { Step, StepId } from "../../types";
import style from "./Sidebar.module.css";

interface SidebarProps {
  currentStep: StepId;
}

const Sidebar = ({ currentStep }: SidebarProps) => {
  return (
    <aside className={style.container}>
      {STEPS.map((step: Step) => {
        const { id, label } = step;
        const isCurrent: boolean = currentStep === id;
        return (
          <div
            key={id}
            className={`${style.step} ${isCurrent ? style.active : ""}`}
            aria-current={isCurrent ? "step" : undefined}
            aria-label={`Step ${id}: ${label}`}
          >
            <div className={style.number}>{id}</div>
            <div className={style.info}>
              <span>{`Step ${id}`}</span>
              <span>{label}</span>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
