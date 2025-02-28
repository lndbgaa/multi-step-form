import { useState } from "react";
import { isValidEmail, isValidPhone } from "../../utils/validators.ts";
import { PersonalInfo, Step } from "./../../types.ts";
import style from "./Step1.module.css";

interface Step1Props {
  setCurrentStep: React.Dispatch<React.SetStateAction<Step>>;
  personalInfo: PersonalInfo;
  setPersonalInfo: React.Dispatch<React.SetStateAction<PersonalInfo>>;
}

const Step1 = ({ setCurrentStep, personalInfo, setPersonalInfo }: Step1Props) => {
  const [error, setError] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError((prev) => ({ ...prev, [id]: "" }));

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
    <div className={style.container}>
      <h1 className={style.title}>Personal info</h1>

      <p className={style.description}>Please provide your name, email address, and phone number.</p>

      <form noValidate className={style.form}>
        <div className={style.form_name}>
          {error.name && (
            <span className={style.error_message} aria-live="polite">
              {error.name}
            </span>
          )}
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className={error.name ? style.hasError : ""}
            value={personalInfo.name}
            placeholder="e.g. Stephen King"
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </div>
        <div className={style.form_email}>
          {error.email && (
            <span className={style.error_message} aria-live="polite">
              {error.email}
            </span>
          )}
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className={error.email ? style.hasError : ""}
            value={personalInfo.email}
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </div>
        <div className={style.form_phone}>
          {error.phone && (
            <span className={style.error_message} aria-live="polite">
              {error.phone}
            </span>
          )}
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            className={error.phone ? style.hasError : ""}
            value={personalInfo.phone}
            placeholder="e.g. +1 234 567 890"
            onChange={handleChange}
            onBlur={handleBlur}
          ></input>
        </div>
      </form>

      <button type="button" className={style.next_btn} onClick={handleBtnClick}>
        Next Step
      </button>
    </div>
  );
};

export default Step1;
