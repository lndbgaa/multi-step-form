import { useState } from "react";
import { isValidEmail, isValidPhone } from "../../utils/validators.ts";
import { PersonalInfo, Step } from "./../../types.ts";
import "./Step1.css";

interface Step1Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<Step>>;
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
}

const Step1 = ({ setCurrentStep, personalInfo, setPersonalInfo }: Step1Props) => {
  const [error, setError] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [id]: value.trim() }));
  };

  const handleBtnClick = () => {
    if (validateForm()) {
      setCurrentStep(2);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    let isValid = true;

    if (!personalInfo.name) {
      newErrors.name = "This field is required";
      isValid = false;
    }

    if (!personalInfo.email) {
      newErrors.email = "This field is required";
      isValid = false;
    } else if (!isValidEmail(personalInfo.email)) {
      newErrors.email = "Invalid format";
      isValid = false;
    }

    if (!personalInfo.phone) {
      newErrors.phone = "This field is required";
      isValid = false;
    } else if (!isValidPhone(personalInfo.phone)) {
      newErrors.phone = "Invalid format";
      isValid = false;
    }

    setError(newErrors);
    return isValid;
  };

  return (
    <div className="step1">
      <h1>Personal info</h1>

      <p>Please provide your name, email address, and phone number.</p>

      <form noValidate className="step1__form">
        <div className="step1__form__name">
          {error.name && (
            <span className="error-message" aria-live="polite">
              {error.name}
            </span>
          )}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className={error.name ? "hasError" : ""}
            value={personalInfo.name}
            placeholder="e.g. Stephen King"
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </div>
        <div className="step1__form__email">
          {error.email && (
            <span className="error-message" aria-live="polite">
              {error.email}
            </span>
          )}
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className={error.email ? "hasError" : ""}
            value={personalInfo.email}
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleChange}
          ></input>
        </div>
        <div className="step1__form__phone">
          {error.phone && (
            <span className="error-message" aria-live="polite">
              {error.phone}
            </span>
          )}
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className={error.phone ? "hasError" : ""}
            value={personalInfo.phone}
            placeholder="e.g. +1 234 567 890"
            onChange={handleChange}
          ></input>
        </div>
      </form>

      <button type="button" className="step1__form__btn" onClick={handleBtnClick}>
        Next Step
      </button>
    </div>
  );
};

export default Step1;
