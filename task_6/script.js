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
      totalPrice = prices.type1 * quantity; // Тип 1 только базовая цена
      break;
    case '2':
      totalPrice = prices.type2 * quantity; // Тип 2 базовая цена + выбранная опция
      const selectedOption = document.getElementById("options").value;
      totalPrice += optionsPrice[selectedOption] * quantity;
      break;
    case '3':
      totalPrice = prices.type3 * quantity; // Тип 3 базовая цена + выбранное свойство
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

  // Показать/скрыть элементы формы в зависимости от типа товара
  if (serviceType === '1') {
    document.getElementById("type2-options").classList.add('hidden');
    document.getElementById("type3-properties").classList.add('hidden');
  } else if (serviceType === '2') {
    document.getElementById("type2-options").classList.remove('hidden');
    document.getElementById("type3-properties").classList.add('hidden');
  } else if (serviceType === '3') {
    document.getElementById("type2-options").classList.add('hidden');
    document.getElementById("type3-properties").classList.remove('hidden');
  }

  calculatePrice();
}

// Слушатели событий
document.getElementById("quantity").addEventListener("input", calculatePrice);
document.querySelectorAll('input[name="service-type"]').forEach(radio => {
  radio.addEventListener("change", () => {
    updateFormFields();
    calculatePrice();
  });
});
document.getElementById("options").addEventListener("change", calculatePrice);
document.getElementById("property").addEventListener("change", calculatePrice);

// Инициализация формы при загрузке страницы
window.onload = updateFormFields;
