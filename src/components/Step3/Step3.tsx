import { ADDONS } from "../../constants";
import { AddOn, AddOnId, Billing, StepId } from "../../types";
import BackBtn from "../BackBtn/BackBtn";
import NextBtn from "../NextBtn/NextBtn";
import style from "./Step3.module.css";

interface Step3Props {
  selectedBilling: Billing;
  selectedAddOns: AddOn[];
  setSelectedAddOns: React.Dispatch<React.SetStateAction<AddOn[]>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<StepId>>;
}

const Step3 = ({ selectedBilling, selectedAddOns, setCurrentStep, setSelectedAddOns }: Step3Props) => {
  //
  const handleToggleAddOn = (id: AddOnId) => {
    const isAddonInList = selectedAddOns.some((a: AddOn) => a.id === id);

    // If the addon is already in the list, remove it; otherwise, add it
    const newAddOns = isAddonInList
      ? selectedAddOns.filter((a: AddOn) => a.id !== id)
      : [...selectedAddOns, ADDONS.find((a: AddOn) => a.id === id)].filter(Boolean);
    setSelectedAddOns(newAddOns as AddOn[]);
  };

  return (
    <div className={style.container}>
      <div className={style.content}>
        <h1 className={style.title}>Pick add-ons</h1>

        <p className={style.description}>Add-ons help enhance your gaming experience.</p>

        <form noValidate className={style.form}>
          {ADDONS.map((addon: AddOn) => {
            const { id, label, description, prices } = addon;
            const price: string = selectedBilling === "yearly" ? `+$${prices.year}/yr` : `+$${prices.month}/mo`;
            const isSelected: boolean = selectedAddOns.some((a: AddOn) => a.id === id);
            return (
              <div
                key={id}
                role="checkbox"
                tabIndex={0}
                className={`${style.addon} ${isSelected ? style.active : ""}`}
                aria-checked={isSelected}
                onClick={() => handleToggleAddOn(id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleToggleAddOn(id);
                }}
              >
                <label htmlFor={`addon-${id}`} className={style.checkbox} onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    id={`addon-${id}`}
                    name="addon"
                    value={id}
                    checked={isSelected}
                    aria-checked={isSelected}
                    onChange={() => handleToggleAddOn(id)}
                  />
                  <span className={style.checkmark}></span>
                </label>

                <div className={style.info}>
                  <h3>{label}</h3>
                  <p>{description}</p>
                </div>

                <p className={style.price}>{price}</p>
              </div>
            );
          })}
        </form>
      </div>

      <div className={style.controls}>
        <BackBtn handleClick={() => setCurrentStep(2)} />
        <NextBtn handleClick={() => setCurrentStep(4)} />
      </div>
    </div>
  );
};

export default Step3;
