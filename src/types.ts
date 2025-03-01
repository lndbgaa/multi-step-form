export type StepId = 1 | 2 | 3 | 4 | 5;
export type StepLabel = "Your Info" | "Select Plan" | "Add-ons" | "Summary";

export interface Step {
  id: StepId;
  label: StepLabel;
}

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

export type Billing = "yearly" | "monthly";

export type PlanId = "arcade" | "advanced" | "pro";
export type PlanLabel = "Arcade" | "Advanced" | "Pro";

export interface Plan {
  id: PlanId;
  label: PlanLabel;
  prices: {
    month: number;
    year: number;
  };
  icon: string;
}

export type AddOnId = "online" | "storage" | "profile";
export type AddOnLabel = "Online service" | "Larger storage" | "Customizable profile";

export interface AddOn {
  id: AddOnId;
  label: AddOnLabel;
  description: string;
  prices: {
    month: number;
    year: number;
  };
}
