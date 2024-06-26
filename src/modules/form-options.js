import {validateCreditCard,
  validateExpiryDate,
  validateCVC,
  validateEmail} from "./helpers/validate.js"

export const options = {
  id: "credit-card-form",
  className: "form d-flex flex-column",
  type: "submit",
  schema: [
    {
      id: "card-number",
      type: "text",
      label: "Credit card number:",
      required: true,
      placeholder: 'XXXX XXXX XXXX XXXX',
      pattern: "[0-9]*",
      validation: validateCreditCard,
    },
    {
      id: "card-expiry-date",
      type: "text",
      label: "Credit card expiry date:",
      required: true,
      placeholder: "MM/YY",
      pattern: "(0[1-9]|1[0-2])/([0-9]{2})",
      validation: validateExpiryDate,
    },
    {
      id: "card-cvc",
      type: "text",
      label: "Credit card CVC/CVV:",
      required: true,
      placeholder: "123",
      pattern: "[0-9]{3,4}",
      validation: validateCVC,
    },
    {
      id: "user-email",
      type: "email",
      label: "Enter your email address:",
      required: true,
      placeholder: 'yourname@example.com',
      validation: validateEmail,
    },
    {
      id: "submit-button",
      type: "button",
      buttonType: "submit",
      template: "To pay",
      className: "btn btn-dark btn-lg",
    }
  ],
}
