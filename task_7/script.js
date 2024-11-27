document.addEventListener('DOMContentLoaded', function() {
    // Переменные
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const currentPageElem = document.querySelector('.current-page');
    const totalPagesElem = document.querySelector('.total-pages');
    
    const totalItems = items.length;
    const itemsPerPage = 4; // 3 изображения на странице
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    let currentPage = 1;
  
    // Обновление пейджера
    function updatePager() {
        currentPageElem.textContent = currentPage;
        totalPagesElem.textContent = totalPages;
    }
  
    // Функция для обновления слайдера
    function updateGallery() {
        const offset = (currentPage - 1) * itemsPerPage;
        gallery.style.transform = `translateX(-${offset * (100 / itemsPerPage)}%)`;
        updatePager();
        
        // Отключаем стрелку влево, если на первой странице
        if (currentPage === 1) {
            leftArrow.disabled = true;
        } else {
            leftArrow.disabled = false;
        }
        
        // Отключаем стрелку вправо, если на последней странице
        if (currentPage === totalPages) {
            rightArrow.disabled = true;
        } else {
            rightArrow.disabled = false;
        }
    }
  
    // Стрелки влево
    leftArrow.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updateGallery();
        }
    });
  
    // Стрелки вправо
    rightArrow.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            updateGallery();
        }
    });
  
    // Инициализация галереи
    updateGallery();
  });
  