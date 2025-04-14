export const contactValidationPatterns = {
  name: {
    pattern: /^[a-zA-Z][a-zA-Z\-'. ]*[a-zA-Z]$/,
    message: "Name must be at least 2 real characters",
  },
  phone: {
    // (123) 456-7890 / 123-456-7890 / 123.456.7890 / 1234567890 / 1-123-456-7890
    pattern: /^1?[-. ]?(\(\d{3}\)|\d{3})[-. ]?\d{3}[-. ]?\d{4}$/,
    message: "Phone number must be 10 digits",
  },
  subject: {
    pattern: /^[a-zA-Z][a-zA-Z\-'. ]+[a-zA-Z]$/,
    message: "Subject must be at least 3 real characters",
  },
  message: {
    pattern: /^[a-zA-Z][a-zA-Z\-'. ]{8,498}[a-zA-Z]$/,
    message: "Message must be between 10 to 500 characters",
  },
  email: {
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Invalid email address",
  },
};
