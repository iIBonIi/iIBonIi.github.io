let pricePerUnit = 100;

function calculatePrice() {
    const quantity = document.getElementById('quantity').value;
    const productType = document.querySelector('input[name="productType"]:checked');
    const options = document.getElementById('options');
    const checkbox = document.getElementById('checkbox');

    if (!productType) return;

    let price = pricePerUnit * quantity;

    if (productType.value === 'type2') {
        if (options.value === 'option1') {
            price += 50;
        } else if (options.value === 'option2') {
            price += 100;
        }
    } else if (productType.value === 'type3') {
        if (checkbox.checked) {
            price += 200;
        }
    }

    document.getElementById('price').textContent = price;
}

document.getElementById('quantity').addEventListener('input', calculatePrice);
document.querySelectorAll('input[name="productType"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        const selectedType = event.target.value;

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

        calculatePrice();
    });
});

document.getElementById('options').addEventListener('change', calculatePrice);
document.getElementById('checkbox').addEventListener('change', calculatePrice);

calculatePrice();
