import validator from "validator";

export function isValidPhone(phone: string) {
  return validator.isMobilePhone(phone, "any", { strictMode: false });
}

export function isValidEmail(email: string) {
  return validator.isEmail(email);
}
