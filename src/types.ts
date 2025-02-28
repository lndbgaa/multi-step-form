export type Step = 1 | 2 | 3 | 4 | 5;

export type Plan = "arcade" | "advanced" | "pro";

export type Billing = "yearly" | "monthly";

export type AddOnsOption = "online" | "storage" | "profile";

export type AddOns = AddOnsOption[];

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}
