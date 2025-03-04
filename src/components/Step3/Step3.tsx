import { ADDONS } from "../../constants";
import { AddOn, AddOnId, Billing, StepId } from "../../types";
import BackBtn from "../BackBtn/BackBtn";
import NextBtn from "../NextBtn/NextBtn";
import style from "./Step3.module.css";

interface Step3Props {
  selectedBilling: Billing;
  selectedAddons: AddOn[];
  setSelectedAddons: React.Dispatch<React.SetStateAction<AddOn[]>>;
  setCurrentStep: React.Dispatch<React.SetStateAction<StepId>>;
}

const Step3 = ({ selectedBilling, selectedAddons, setCurrentStep, setSelectedAddons }: Step3Props) => {
  //
  const handleDivClick = (id: AddOnId) => {
    const isAddonInList = selectedAddons.some((a: AddOn) => a.id === id);

    // If the addon is already in the list, remove it; otherwise, add it
    const newAddOns = isAddonInList
      ? selectedAddons.filter((a: AddOn) => a.id !== id)
      : [...selectedAddons, ADDONS.find((a: AddOn) => a.id === id)].filter(Boolean);
    setSelectedAddons(newAddOns as AddOn[]);
  };

  const handleCheckboxChange = ({ target: { checked, value } }: React.ChangeEvent<HTMLInputElement>) => {
    // If the checkbox is checked, add the addon; otherwise, remove it
    const newAddOns = checked
      ? [...selectedAddons, ADDONS.find((a: AddOn) => a.id === value)]
      : selectedAddons.filter((a: AddOn) => a.id !== value);
    setSelectedAddons(newAddOns as AddOn[]);
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
            const isSelected: boolean = selectedAddons.some((a: AddOn) => a.id === id);
            return (
              <div
                key={id}
                className={`${style.addon} ${isSelected ? style.active : ""}`}
                onClick={() => handleDivClick(id)}
              >
                <label className={style.checkbox} onClick={(e) => e.stopPropagation()}>
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
