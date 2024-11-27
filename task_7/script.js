document.addEventListener('DOMContentLoaded', function() {

    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');
    const currentPageElem = document.querySelector('.current-page');
    const totalPagesElem = document.querySelector('.total-pages');
    
    const totalItems = items.length;
    const itemsPerPage = 1;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
  
    let currentPage = 1;
  
    function updatePager() {
        currentPageElem.textContent = currentPage;
        totalPagesElem.textContent = totalPages;
    }
  
    function updateGallery() {
        const offset = (currentPage - 1) * itemsPerPage;
        gallery.style.transform = `translateX(-${offset * (100 / itemsPerPage)}%)`;
        updatePager();
        
        if (currentPage === 1) {
            leftArrow.disabled = true;
        } else {
            leftArrow.disabled = false;
        }
        
        if (currentPage === totalPages) {
            rightArrow.disabled = true;
        } else {
            rightArrow.disabled = false;
        }
    }
  
    leftArrow.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            updateGallery();
        }
    });
  
    rightArrow.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            updateGallery();
        }
    });
  
    updateGallery();
  });
  
