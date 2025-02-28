import style from "./Sidebar.module.css";

interface SidebarProps {
  currentStep: 1 | 2 | 3 | 4 | 5;
}

const STEPS = [
  { id: 1, label: "Your Info" },
  { id: 2, label: "Select Plan" },
  { id: 3, label: "Add-ons" },
  { id: 4, label: "Summary" },
];

const Sidebar = ({ currentStep }: SidebarProps) => {
  return (
    <aside className={style.container} aria-label="Form progress">
      {STEPS.map((step) => {
        const isCurrent = currentStep === step.id;
        return (
          <div
            key={step.id}
            className={`${style.step} ${isCurrent ? style.active : ""}`}
            aria-current={isCurrent ? "step" : undefined}
            aria-label={`Step ${step.id}: ${step.label}`}
          >
            <div className={style.step_number}>{step.id}</div>
            <div className={style.step_info}>
              <span>{`Step ${step.id}`}</span>
              <span>{step.label}</span>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
