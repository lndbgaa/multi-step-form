import "./Sidebar.css";

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
    <aside className="sidebar">
      {STEPS.map((step) => {
        return (
          <div className={`sidebar__step ${currentStep === step.id ? "sidebar__step--active" : ""}`} key={step.id}>
            <div className="sidebar__step__number">{step.id}</div>
            <div className="sidebar__step__info">
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
