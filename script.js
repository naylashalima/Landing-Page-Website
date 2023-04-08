function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

function isNumber(input) {
  return !isNaN(input);
}

function checkboxIsChecked() {
  const checkbox = document.getElementById("status");
  return checkbox.checked;
}

function validateFormData(formData) {
  if (formData != null && !isNaN(formData.zipCode) && checkboxIsChecked()) {
    return true;
  } else {
    return false;
  }
}
