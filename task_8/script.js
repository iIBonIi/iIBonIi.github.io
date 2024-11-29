document.getElementById('openFormBtn').addEventListener('click', function() {
    const popup = document.getElementById('popup');
    popup.style.display = 'flex';
    history.pushState({ formOpen: true }, '', '#form');
});

window.onpopstate = function(event) {
    const popup = document.getElementById('popup');
    if (event.state && event.state.formOpen) {
    } else {
        popup.style.display = 'none';
    }
};

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formMessage = document.getElementById('formMessage');
    const contactForm = document.getElementById('contactForm');
    
    const data = {
        fio: document.getElementById('fio').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        organization: document.getElementById('organization').value,
        message: document.getElementById('message').value,
        consent: document.getElementById('consent').checked
    };

    contactForm.reset();

    fetch('https://formcarry.com/s/0otYRqTEX8C', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => {
        if (response.status === 'success') {
            formMessage.textContent = 'Форма успешно отправлена!';
            formMessage.style.color = 'green';
            localStorage.removeItem('contactFormData');
            setTimeout(() => {
                popup.style.display = 'none';
                history.pushState({}, '', window.location.pathname);
            }, 2000);
        }
    })
    .catch(error => {
        console.error('Ошибка отправки:', error);
    });
});
