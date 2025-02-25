import "./Sidebar.css";

interface SidebarProps {
  currentStep: 1 | 2 | 3 | 4 | 5;
}

const Sidebar = ({ currentStep }: SidebarProps) => {
  const steps = [
    { id: 1, label: "Your Info" },
    { id: 2, label: "Select Plan" },
    { id: 3, label: "Add-ons" },
    { id: 4, label: "Summary" },
  ];

  return (
    <aside className="sidebar">
      {steps.map((step) => {
        return (
          <div
            className={`sidebar__step ${
              currentStep === step.id ? "active" : ""
            }`}
            key={step.id}
          >
            <div className="sidebar__step-number">{step.id}</div>
            <div className="sidebar__step-info">
              <p>{`Step ${step.id}`}</p>
              <p>{step.label}</p>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default Sidebar;
