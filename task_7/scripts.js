let currentIndex = 0;
const totalImages = 8;
const imagesPerPagePC = 3;
const imagesPerPageMobile = 1;

const gallery = document.querySelector('.gallery');
const currentPageSpan = document.getElementById('currentPage');

function updateGalleryPosition() {
  const isMobile = window.innerWidth <= 768;
  const imagesPerPage = isMobile ? imagesPerPageMobile : imagesPerPagePC;
  const offset = -currentIndex * (100 / imagesPerPage);
  gallery.style.transition = 'transform 0.5s ease-in-out';
  gallery.style.transform = `translateX(${offset}%)`;
}

function updatePagerMobile() {
  const currentPage = currentIndex + 1;
  currentPageSpan.textContent = `Картинка ${currentPage} из ${totalImages}`;
}

function updatePagerDesktop() {
  const currentPage = Math.floor(currentIndex / imagesPerPagePC) + 1;
  const totalPages = Math.ceil(totalImages / imagesPerPagePC);
  currentPageSpan.textContent = `Страница ${currentPage} из ${totalPages}`;
}

document.querySelector('.arrow.left').addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
    updatePagerMobile();
  } else {
    currentIndex = (currentIndex === 0) ? totalImages - imagesPerPagePC : currentIndex - imagesPerPagePC;
    updatePagerDesktop();
  }
  updateGalleryPosition();
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
    updatePagerMobile();
  } else {
    currentIndex = (currentIndex + imagesPerPagePC >= totalImages) ? 0 : currentIndex + imagesPerPagePC;
    updatePagerDesktop();
  }
  updateGalleryPosition();
});

updateGalleryPosition();
if (window.innerWidth <= 768) {
  updatePagerMobile();
} else {
  updatePagerDesktop();
}
