const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLocaleLowerCase());
};

const form = document.querySelector("form");
const nameInput = document.querySelector('input[name="name"]');
const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="phone"]');

const inputs = [nameInput, emailInput, phoneInput];

let isFormValid = false;
let isValidationOn = false

const resetInput = (elm) => {
  elm.classList.remove("invalid");
  elm.nextElementSibling.classList.add("hidden");
};

const invalidateElm = (elm) => {
  elm.classList.add("invalid");
  elm.nextElementSibling.classList.remove("hidden");
};

const validateInputs = () => {
    if (!isValidationOn) return;
  isFormValid = true;
  inputs.forEach(resetInput);
  if (!nameInput.value) {
    isFormValid = false;
    invalidateElm(nameInput);
  }
  if (!isValidEmail(emailInput.value)) {
    isFormValid = false;
    invalidateElm(emailInput);
  }
    if (!isValidPhone(phoneInput.value)) {
      isFormValid = false;
      invalidateElm(phoneInput);
    }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  isValidationOn = true;
  validateInputs();
  if (isFormValid) {
  }
});

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInputs();
  });
});
