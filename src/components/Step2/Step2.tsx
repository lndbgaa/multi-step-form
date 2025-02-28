import { Billing, Plan, Step } from "../../types";
import advancedIcon from "./../../assets/images/icon-advanced.svg";
import arcadeIcon from "./../../assets/images/icon-arcade.svg";
import proIcon from "./../../assets/images/icon-pro.svg";
import style from "./Step2.module.css";

interface Step2Props {
  selectedPlan: Plan;
  billing: Billing;
  setCurrentStep: React.Dispatch<React.SetStateAction<Step>>;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  setBilling: React.Dispatch<React.SetStateAction<Billing>>;
}

const PLANS = [
  { id: "arcade", label: "Arcade", prices: { month: 9, year: 90 }, icon: arcadeIcon },
  { id: "advanced", label: "Advanced", prices: { month: 12, year: 120 }, icon: advancedIcon },
  { id: "pro", label: "Pro", prices: { month: 15, year: 150 }, icon: proIcon },
];

const Step2 = ({ selectedPlan, billing, setSelectedPlan, setBilling, setCurrentStep }: Step2Props) => {
  const handlePlanChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as Plan;
    setSelectedPlan(value);
  };

  const handleBillingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBilling: Billing = e.target.checked ? "yearly" : "monthly";
    setBilling(newBilling);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleNext = () => {
    setCurrentStep(3);
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Select your plan</h1>

      <p className={style.description}>You have the option of monthly or yearly billing.</p>

      <form noValidate className={style.form}>
        <div className={style.plans}>
          {PLANS.map((plan) => {
            const { id, label, prices, icon } = plan;
            const price = billing === "monthly" ? `$${prices.month}/mo` : `$${prices.year}/yr`;
            const isSelected = selectedPlan === id;
            return (
              <label key={id} className={`${style.plan} ${isSelected ? style.active : ""}`}>
                <img src={icon} alt="" className={style.plan_icon} aria-hidden="true" />

                <input
                  type="radio"
                  name="plan"
                  value={id}
                  className={style.plan_input}
                  checked={isSelected}
                  onChange={handlePlanChange}
                  aria-checked={isSelected ? "true" : "false"}
                />

                <div className={style.plan_info}>
                  <span>{label}</span>
                  <span>{price}</span>
                </div>
              </label>
            );
          })}
        </div>

        <div className={style.billing}>
          <span className={`${style.label} ${billing == "monthly" ? style.active : ""}`}>Monthly</span>
          <label className={style.switch}>
            <input
              type="checkbox"
              value={billing}
              className={style.switch_input}
              checked={billing === "yearly"}
              onChange={handleBillingChange}
            />
            <span className={style.switch_slider}></span>
          </label>
          <span className={`${style.label} ${billing == "yearly" ? style.active : ""}`}>Yearly</span>
        </div>
      </form>

      <div className={style.btn_group}>
        <button type="button" className={style.back_btn} onClick={handleBack}>
          Go Back
        </button>

        <button type="button" className={style.next_btn} onClick={handleNext}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;
