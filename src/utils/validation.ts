// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Password validation
export function isValidPassword(password: string): boolean {
  // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// Phone number validation (Indonesian format)
export function isValidPhoneNumber(phone: string): boolean {
  const phoneRegex = /^(?:\+62|62|0)[2-9]\d{7,11}$/;
  return phoneRegex.test(phone);
}

// URL validation
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Required field validation
export function isRequired(value: any): boolean {
  if (value === null || value === undefined || value === "") return false;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") return Object.keys(value).length > 0;
  return true;
}

// Minimum length validation
export function minLength(value: string, min: number): boolean {
  return value.length >= min;
}

// Maximum length validation
export function maxLength(value: string, max: number): boolean {
  return value.length <= max;
}

// Number range validation
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

// File size validation (in bytes)
export function isValidFileSize(file: File, maxSize: number): boolean {
  return file.size <= maxSize;
}

// File type validation
export function isValidFileType(file: File, allowedTypes: string[]): boolean {
  return allowedTypes.includes(file.type);
}
