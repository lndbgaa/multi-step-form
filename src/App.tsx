import { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/Sidebar.tsx";
import Step1 from "./components/Step1/Step1.tsx";
import Step2 from "./components/Step2/Step2.tsx";
import Step3 from "./components/Step3/Step3.tsx";
import { AddOns, Billing, PersonalInfo, Plan, Step } from "./types.ts";

function App() {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({ name: "", email: "", phone: "" });
  const [selectedPlan, setSelectedPlan] = useState<Plan>("arcade");
  const [billing, setBilling] = useState<Billing>("yearly");
  const [addOns, setAddOns] = useState<AddOns>([]);

  return (
    <main>
      <SideBar currentStep={currentStep} />

      {currentStep === 1 ? (
        <Step1
          setCurrentStep={setCurrentStep}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      ) : currentStep === 2 ? (
        <Step2
          setCurrentStep={setCurrentStep}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          billing={billing}
          setBilling={setBilling}
        />
      ) : currentStep === 3 ? (
        <Step3 setCurrentStep={setCurrentStep} billing={billing} addOns={addOns} setAddOns={setAddOns} />
      ) : null}
    </main>
  );
}

export default App;
