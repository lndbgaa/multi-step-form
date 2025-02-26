import { Plan, Step } from "../../types";
import advancedIcon from "./../../assets/images/icon-advanced.svg";
import arcadeIcon from "./../../assets/images/icon-arcade.svg";
import proIcon from "./../../assets/images/icon-pro.svg";
import "./Step2.css";

interface Step2Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<Step>>;
  selectedPlan: Plan;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
}

const PLANS = [
  { id: "arcade", label: "Arcade", price: 9, icon: arcadeIcon },
  { id: "advanced", label: "Advanced", price: 12, icon: advancedIcon },
  { id: "pro", label: "Pro", price: 15, icon: proIcon },
];

const Step2 = ({ selectedPlan, setSelectedPlan }: Step2Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as Plan;
    setSelectedPlan(value);
  };

  return (
    <div className="step2">
      <h1>Select your plan</h1>

      <p>You have the option of monthly or yearly billing.</p>

      <form className="step2__form">
        <div className="step2__form__plans">
          {PLANS.map((plan) => {
            const { id, label, price, icon } = plan;
            return (
              <label
                key={id}
                htmlFor={id}
                className={`step2__form__plan ${selectedPlan === id ? "step2__form__plan--active" : ""}`}
              >
                <img src={icon} alt="" aria-hidden="true" />

                <input
                  id={id}
                  type="radio"
                  name="plan"
                  value={id}
                  checked={selectedPlan === id}
                  onChange={handleChange}
                  aria-checked={selectedPlan === id ? "true" : "false"}
                />

                <div className={"step2__form__plan__info"}>
                  <span>{label}</span>
                  <span>{`$${price}/mo`}</span>
                </div>
              </label>
            );
          })}
        </div>

        <div className="step2__form__billing"></div>
      </form>
    </div>
  );
};

export default Step2;
