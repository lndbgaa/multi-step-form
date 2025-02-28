import { AddOns, AddOnsOption, Billing, Step } from "../../types";
import style from "./Step3.module.css";

interface Step3Props {
  billing: Billing;
  addOns: AddOns;
  setCurrentStep: React.Dispatch<React.SetStateAction<Step>>;
  setAddOns: React.Dispatch<React.SetStateAction<AddOns>>;
}

const ADDONS = [
  {
    id: "online",
    label: "Online service",
    description: "Access to multiplayer games",
    prices: {
      month: 1,
      year: 10,
    },
  },
  {
    id: "storage",
    label: "Larger storage",
    description: "Extra 1TB opf cloud save",
    prices: {
      month: 2,
      year: 20,
    },
  },
  {
    id: "profile",
    label: "Customizable profile",
    description: "Custom theme on your profile",
    prices: {
      month: 2,
      year: 20,
    },
  },
];

const Step3 = ({ billing, addOns, setCurrentStep, setAddOns }: Step3Props) => {
  const handleDivClick = (addonId: string) => {
    const isAddonInList = addOns.includes(addonId as AddOnsOption);

    // If the addon is already in the list, remove it; otherwise, add it
    const newAddOns = isAddonInList ? addOns.filter((addon) => addon !== addonId) : [...addOns, addonId];
    setAddOns(newAddOns as AddOns);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    const value = e.target.value as AddOnsOption;

    // If the checkbox is checked, add the addon; otherwise, remove it
    const newAddOns = checked ? [...addOns, value] : addOns.filter((addon) => addon !== value);
    setAddOns(newAddOns);
  };

  return (
    <div className={style.container}>
      <h1 className={style.title}>Pick add-ons</h1>

      <p className={style.description}>Add-ons help enhance your gaming experience.</p>

      <form className={style.form}>
        {ADDONS.map((addon) => {
          const { id, label, description, prices } = addon;
          const price = billing === "monthly" ? `+$${prices.month}/mo` : `+$${prices.year}/yr`;
          const isSelected = addOns.includes(id as AddOnsOption);
          return (
            <div
              key={id}
              className={`${style.addon} ${isSelected ? style.active : ""}`}
              onClick={() => handleDivClick(id)}
            >
              <label className={style.addon_check} onClick={(e) => e.stopPropagation()}>
                <input
                  type="checkbox"
                  name="addon"
                  value={id}
                  checked={isSelected}
                  onChange={handleCheckboxChange}
                  aria-checked={isSelected}
                />
                <div className={style.checkmark}></div>
              </label>

              <div className={style.addon_info}>
                <h2>{label}</h2>
                <p>{description}</p>
              </div>

              <div className={style.addon_price}>
                <span>{price}</span>
              </div>
            </div>
          );
        })}
      </form>

      <div className={style.btn_group}>
        <button type="button" className={style.back_btn} onClick={() => setCurrentStep(2)}>
          Go Back
        </button>

        <button type="button" className={style.next_btn} onClick={() => setCurrentStep(4)}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step3;
