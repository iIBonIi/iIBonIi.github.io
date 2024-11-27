
// Калькулятор
let pricePerUnit = 100;  // Базовая цена за единицу товара

// Функция для пересчета цены
function calculatePrice() {
    const quantity = document.getElementById('quantity').value;
    const productType = document.querySelector('input[name="productType"]:checked');
    const options = document.getElementById('options');
    const checkbox = document.getElementById('checkbox');

    if (!productType) return;  // Если тип товара не выбран

    let price = pricePerUnit * quantity;

    // В зависимости от типа товара применяем дополнительные условия
    if (productType.value === 'type2') {
        if (options.value === 'option1') {
            price += 50; // Дополнительная опция 1
        } else if (options.value === 'option2') {
            price += 100; // Дополнительная опция 2
        }
    } else if (productType.value === 'type3') {
        if (checkbox.checked) {
            price += 200; // Дополнительное свойство
        }
    }

    // Отображаем результат на странице
    document.getElementById('price').textContent = price;
}

// Обработчики событий для динамического изменения цены
document.getElementById('quantity').addEventListener('input', calculatePrice);
document.querySelectorAll('input[name="productType"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        const selectedType = event.target.value;

        // Скрываем/показываем элементы в зависимости от выбранного типа товара
        if (selectedType === 'type2') {
            document.getElementById('options-container').classList.remove('hidden');
            document.getElementById('checkbox-container').classList.add('hidden');
        } else if (selectedType === 'type3') {
            document.getElementById('options-container').classList.add('hidden');
            document.getElementById('checkbox-container').classList.remove('hidden');
        } else {
            document.getElementById('options-container').classList.add('hidden');
            document.getElementById('checkbox-container').classList.add('hidden');
        }

        calculatePrice(); // Пересчитываем цену после изменения типа товара
    });
});

document.getElementById('options').addEventListener('change', calculatePrice);
document.getElementById('checkbox').addEventListener('change', calculatePrice);

// Инициализация начальной цены
calculatePrice();
