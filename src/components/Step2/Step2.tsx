import { PLANS } from "../../constants";
import { Billing, Plan, StepId } from "../../types";
import BackBtn from "../BackBtn/BackBtn";
import NextBtn from "../NextBtn/NextBtn";
import styles from "./Step2.module.css";

interface Step2Props {
  selectedPlan: Plan;
  selectedBilling: Billing;
  setSelectedPlan: React.Dispatch<React.SetStateAction<Plan>>;
  setSelectedBilling: React.Dispatch<React.SetStateAction<Billing>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<StepId>>;
}

const Step2 = ({
  selectedPlan,
  selectedBilling,
  setSelectedPlan,
  setSelectedBilling,
  setCurrentStep,
}: Step2Props) => {
  const handlePlanChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const selected = PLANS.find((plan: Plan) => plan.id === value) as Plan;
    if (selected) {
      setSelectedPlan(selected);
    }
  };

  const handleBillingChange = ({
    target: { checked },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newBilling: Billing = checked ? "yearly" : "monthly";
    setSelectedBilling(newBilling);
  };

  const isYearly = selectedBilling === "yearly";

  return (
    <div className={`${styles.container} ${isYearly ? styles.yearlyContainer : ""}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>Select your plan</h1>

        <p className={styles.description}>
          You have the option of monthly or yearly billing.
        </p>

        <form noValidate>
          <div className={styles.plans}>
            {PLANS.map((plan: Plan) => {
              const { id, label, prices, icon } = plan;
              const price: string = isYearly
                ? `$${prices.year}/yr`
                : `$${prices.month}/mo`;
              const isSelected: boolean = selectedPlan.id === id;
              return (
                <label
                  htmlFor={`plan-${id}`}
                  key={id}
                  className={`${styles.plan} ${isSelected ? styles.active : ""}`}
                >
                  <img src={icon} alt="" aria-hidden="true" />

                  <input
                    type="radio"
                    id={`plan-${id}`}
                    name="plan"
                    value={id}
                    checked={isSelected}
                    onChange={handlePlanChange}
                    aria-checked={isSelected ? "true" : "false"}
                  />

                  <div className={styles.info}>
                    <span>{label}</span>
                    <span>{price}</span>
                    {isYearly && <span>2 months free</span>}
                  </div>
                </label>
              );
            })}
          </div>

          <div className={styles.billing}>
            <span className={`${styles.label} ${!isYearly ? styles.active : ""}`}>
              Monthly
            </span>
            <label htmlFor="billing" className={styles.switch}>
              <input
                type="checkbox"
                id="billing"
                value={selectedBilling}
                checked={isYearly}
                onChange={handleBillingChange}
              />
              <span className={styles.slider}></span>
            </label>
            <span className={`${styles.label} ${isYearly ? styles.active : ""}`}>
              Yearly
            </span>
          </div>
        </form>
      </div>

      <div className={styles.controls}>
        <BackBtn handleClick={() => setCurrentStep(1)} />
        <NextBtn handleClick={() => setCurrentStep(3)} />
      </div>
    </div>
  );
};

export default Step2;
