import { useState } from "react";
import "./App.css";
import SideBar from "./components/Sidebar/Sidebar.tsx";

function App() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);

  return (
    <main>
      <SideBar currentStep={currentStep} />
    </main>
  );
}

export default App;
