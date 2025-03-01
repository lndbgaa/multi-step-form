import advancedIcon from "./assets/images/icon-advanced.svg";
import arcadeIcon from "./assets/images/icon-arcade.svg";
import proIcon from "./assets/images/icon-pro.svg";
import { AddOn, Plan, Step } from "./types";

export const STEPS: Step[] = [
  { id: 1, label: "Your Info" },
  { id: 2, label: "Select Plan" },
  { id: 3, label: "Add-ons" },
  { id: 4, label: "Summary" },
];

export const PLANS: Plan[] = [
  { id: "arcade", label: "Arcade", prices: { month: 9, year: 90 }, icon: arcadeIcon },
  {
    id: "advanced",
    label: "Advanced",
    prices: { month: 12, year: 120 },
    icon: advancedIcon,
  },
  { id: "pro", label: "Pro", prices: { month: 15, year: 150 }, icon: proIcon },
];

export const ADDONS: AddOn[] = [
  {
    id: "online",
    label: "Online service",
    description: "Access to multiplayer games",
    prices: {
      month: 1,
      year: 10,
    },
  },
  {
    id: "storage",
    label: "Larger storage",
    description: "Extra 1TB of cloud save",
    prices: {
      month: 2,
      year: 20,
    },
  },
  {
    id: "profile",
    label: "Customizable profile",
    description: "Custom theme on your profile",
    prices: {
      month: 2,
      year: 20,
    },
  },
];
