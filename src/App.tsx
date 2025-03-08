import { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/Sidebar.tsx";
import Step1 from "./components/Step1/Step1.tsx";
import Step2 from "./components/Step2/Step2.tsx";
import Step3 from "./components/Step3/Step3.tsx";
import Step4 from "./components/Step4/Step4.tsx";
import Step5 from "./components/Step5/Step5.tsx";
import { ADDONS, PLANS } from "./constants.ts";
import { AddOn, Billing, PersonalInfo, Plan, StepId } from "./types.ts";

function App() {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[0]);
  const [selectedBilling, setSelectedBilling] = useState<Billing>("monthly");
  const [selectedAddOns, setSelectedAddOns] = useState<AddOn[]>([ADDONS[0], ADDONS[1]]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
  });

  let stepContent;

  switch (currentStep) {
    case 1:
      stepContent = (
        <Step1
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          setCurrentStep={setCurrentStep}
        />
      );
      break;
    case 2:
      stepContent = (
        <Step2
          selectedPlan={selectedPlan}
          selectedBilling={selectedBilling}
          setSelectedPlan={setSelectedPlan}
          setSelectedBilling={setSelectedBilling}
          setCurrentStep={setCurrentStep}
        />
      );
      break;
    case 3:
      stepContent = (
        <Step3
          selectedBilling={selectedBilling}
          selectedAddOns={selectedAddOns}
          setSelectedAddOns={setSelectedAddOns}
          setCurrentStep={setCurrentStep}
        />
      );
      break;
    case 4:
      stepContent = (
        <Step4
          selectedPlan={selectedPlan}
          selectedBilling={selectedBilling}
          selectedAddOns={selectedAddOns}
          setCurrentStep={setCurrentStep}
        />
      );
      break;
    case 5:
      stepContent = <Step5 />;
      break;
    default:
      stepContent = null;
  }

  return (
    <main>
      <SideBar currentStep={currentStep} />

      {stepContent}
    </main>
  );
}

export default App;
