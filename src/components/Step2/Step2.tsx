import { PLANS } from "../../constants";
import { Billing, Plan, StepId } from "../../types";
import BackBtn from "../BackBtn/BackBtn";
import NextBtn from "../NextBtn/NextBtn";
import style from "./Step2.module.css";

interface Step2Props {
  selectedPlan: Plan;
  selectedBilling: Billing;
  setCurrentStep: React.Dispatch<React.SetStateAction<StepId>>;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  setSelectedBilling: React.Dispatch<React.SetStateAction<Billing>>;
}

const Step2 = ({ selectedPlan, selectedBilling, setSelectedPlan, setSelectedBilling, setCurrentStep }: Step2Props) => {
  const handlePlanChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    const selected = PLANS.find((plan: Plan) => plan.id === value) as Plan;
    if (selected) {
      setSelectedPlan(selected);
    }
  };

  const handleBillingChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => {
    const newBilling: Billing = checked ? "yearly" : "monthly";
    setSelectedBilling(newBilling);
  };

  const isYearly = selectedBilling === "yearly";

  return (
    <div className={style.container}>
      <h1 className={style.title}>Select your plan</h1>

      <p className={style.description}>You have the option of monthly or yearly billing.</p>

      <form noValidate className={style.form}>
        <div className={style.plansWrapper}>
          {PLANS.map((plan: Plan) => {
            const { id, label, prices, icon } = plan;
            const price: string = isYearly ? `$${prices.year}/yr` : `$${prices.month}/mo`;
            const isSelected: boolean = selectedPlan.id === id;
            return (
              <label htmlFor={id} key={id} className={`${style.plan} ${isSelected ? style.active : ""}`}>
                <img src={icon} aria-hidden="true" />

                <input
                  type="radio"
                  id={id}
                  name="plan"
                  value={id}
                  checked={isSelected}
                  onChange={handlePlanChange}
                  aria-checked={isSelected ? "true" : "false"}
                />

                <div className={style.info}>
                  <span>{label}</span>
                  <span>{price}</span>
                  {isYearly && <span>2 months free</span>}
                </div>
              </label>
            );
          })}
        </div>

        <div className={style.billing}>
          <span className={`${style.label} ${!isYearly ? style.active : ""}`}>Monthly</span>
          <label htmlFor="billing" className={style.switch}>
            <input
              type="checkbox"
              id="billing"
              value={selectedBilling}
              checked={isYearly}
              onChange={handleBillingChange}
            />
            <span className={style.slider}></span>
          </label>
          <span className={`${style.label} ${isYearly ? style.active : ""}`}>Yearly</span>
        </div>
      </form>

      <div className={style.btnGroup}>
        <BackBtn handleClick={() => setCurrentStep(1)} />

        <NextBtn content="Next Step" handleClick={() => setCurrentStep(3)} />
      </div>
    </div>
  );
};

export default Step2;
