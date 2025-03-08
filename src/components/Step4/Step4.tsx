import { AddOn, Billing, Plan, StepId } from "../../types";
import BackBtn from "../BackBtn/BackBtn";
import ConfirmBtn from "../ConfirmBtn/ConfirmBtn";
import styles from "./Step4.module.css";

interface Step4Props {
  selectedPlan: Plan;
  selectedBilling: Billing;
  selectedAddOns: AddOn[];
  setCurrentStep: React.Dispatch<React.SetStateAction<StepId>>;
}

const Step4 = ({
  selectedPlan,
  selectedBilling,
  selectedAddOns,
  setCurrentStep,
}: Step4Props) => {
  const isYearly: boolean = selectedBilling === "yearly";
  const planPrice: number = isYearly
    ? selectedPlan.prices.year
    : selectedPlan.prices.month;
  const addonsTotal: number = selectedAddOns.reduce((total, a: AddOn) => {
    const addonPrice: number = isYearly ? a.prices.year : a.prices.month;
    return total + addonPrice;
  }, 0);
  const finalTotal: number = planPrice + addonsTotal;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Finishing up</h1>

        <p className={styles.description}>
          Double-check everything looks OK before confirming.
        </p>

        <div>
          <div className={styles.recap}>
            <div className={styles.plan}>
              <div>
                <p className={styles.label}>{`${selectedPlan.label} (${
                  isYearly ? "Yearly" : "Monthly"
                })`}</p>
                <button
                  type="button"
                  className={styles.changeBtn}
                  onClick={() => setCurrentStep(2)}
                  aria-label="Change plan"
                >
                  Change
                </button>
              </div>

              <p className={styles.price}>
                {isYearly
                  ? `$${selectedPlan.prices.year}/yr`
                  : `$${selectedPlan.prices.month}/mo`}
              </p>
            </div>
            {selectedAddOns.length === 0 ? (
              <p className={styles.noAddons}>No add-ons selected</p>
            ) : (
              <div className={styles.addons}>
                {selectedAddOns.map((a: AddOn) => {
                  const { id, label, prices } = a;
                  return (
                    <div key={id} className={styles.addon}>
                      <span>{label}</span>
                      <span>
                        {isYearly ? `+$${prices.year}/yr` : `+$${prices.month}/mo`}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className={styles.total}>
            <span>{`Total (per ${isYearly ? "year" : "month"})`}</span>
            <span>{isYearly ? `$${finalTotal}/year` : `$${finalTotal}/mo`}</span>
          </div>
        </div>
      </div>

      <div className={styles.controls}>
        <BackBtn handleClick={() => setCurrentStep(3)} />
        <ConfirmBtn handleClick={() => setCurrentStep(5)} />
      </div>
    </div>
  );
};

export default Step4;
