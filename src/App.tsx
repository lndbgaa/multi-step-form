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
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    name: "",
    email: "",
    phone: "",
  });
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[0]);
  const [selectedBilling, setSelectedBilling] = useState<Billing>("yearly");
  const [selectedAddons, setSelectedAddOns] = useState<AddOn[]>([ADDONS[0], ADDONS[1]]);

  const steps = {
    1: <Step1 personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} setCurrentStep={setCurrentStep} />,
    2: (
      <Step2
        selectedPlan={selectedPlan}
        selectedBilling={selectedBilling}
        setSelectedPlan={setSelectedPlan}
        setSelectedBilling={setSelectedBilling}
        setCurrentStep={setCurrentStep}
      />
    ),
    3: (
      <Step3
        selectedBilling={selectedBilling}
        selectedAddons={selectedAddons}
        setSelectedAddons={setSelectedAddOns}
        setCurrentStep={setCurrentStep}
      />
    ),
    4: (
      <Step4
        selectedPlan={selectedPlan}
        selectedBilling={selectedBilling}
        selectedAddons={selectedAddons}
        setCurrentStep={setCurrentStep}
      />
    ),
    5: <Step5 />,
  };

  return (
    <main>
      <SideBar currentStep={currentStep} />
      {steps[currentStep]}
    </main>
  );
}

export default App;
