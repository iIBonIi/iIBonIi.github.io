const prices = {
  type1: 100,
  type2: 200,
  type3: 300
};

const optionsPrice = {
  option1: 50,
  option2: 75,
  option3: 100
};

const propertyPrice = 30;

function calculatePrice() {
  const quantity = parseInt(document.getElementById("quantity").value) || 1;
  const serviceType = document.querySelector('input[name="service-type"]:checked').value;
  let totalPrice = 0;

  switch (serviceType) {
      case '1':
          totalPrice = prices.type1 * quantity;
          break;
      case '2':
          totalPrice = prices.type2 * quantity;
          const selectedOption = document.getElementById("options").value;
          totalPrice += optionsPrice[selectedOption] * quantity;
          break;
      case '3':
          totalPrice = prices.type3 * quantity;
          const isPropertyChecked = document.getElementById("property").checked;
          if (isPropertyChecked) {
              totalPrice += propertyPrice * quantity;
          }
          break;
  }

  document.getElementById("total-price").textContent = totalPrice;
}

function updateFormFields() {
  const serviceType = document.querySelector('input[name="service-type"]:checked').value;

  if (serviceType === '1') {
      document.getElementById("options-group").classList.add('hidden');
      document.getElementById("properties-group").classList.add('hidden');
  } else if (serviceType === '2') {
      document.getElementById("options-group").classList.remove('hidden');
      document.getElementById("properties-group").classList.add('hidden');
  } else if (serviceType === '3') {
      document.getElementById("options-group").classList.add('hidden');
      document.getElementById("properties-group").classList.remove('hidden');
  }

  calculatePrice();
}

document.getElementById("quantity").addEventListener("input", calculatePrice);
document.querySelectorAll('input[name="service-type"]').forEach(radio => {
  radio.addEventListener("change", () => {
      updateFormFields();
      calculatePrice();
  });
});
document.getElementById("options").addEventListener("change", calculatePrice);
document.getElementById("property").addEventListener("change", calculatePrice);

window.onload = updateFormFields;
