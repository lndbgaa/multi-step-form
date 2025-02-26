import { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/Sidebar.tsx";
import Step1 from "./components/Step1/Step1.tsx";
import Step2 from "./components/Step2/Step2.tsx";
import { PersonalInfo, Plan, Step } from "./types.ts";

function App() {
  const [currentStep, setCurrentStep] = useState<Step>(2);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({ name: "", email: "", phone: "" });
  const [selectedPlan, setSelectedPlan] = useState<Plan>("arcade");

  return (
    <main>
      <SideBar currentStep={currentStep} />

      {currentStep === 1 ? (
        <Step1 setCurrentStep={setCurrentStep} personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      ) : currentStep === 2 ? (
        <Step2 setCurrentStep={setCurrentStep} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      ) : null}
    </main>
  );
}

export default App;
