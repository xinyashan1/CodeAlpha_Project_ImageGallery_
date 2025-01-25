const galleryImage = document.getElementById('gallery-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Array of image URLs
const images = [
  'imgage1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image4.jpg'
];

// Update the main image
function updateGallery(index) {
  currentIndex = index;
  galleryImage.src = images[currentIndex];
  thumbnails.forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === currentIndex);
  });
}

// Navigation buttons
prevBtn.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + images.length) % images.length;
  updateGallery(newIndex);
});

nextBtn.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % images.length;
  updateGallery(newIndex);
});

// Thumbnail click event
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    updateGallery(index);
  });
});

// Initialize
updateGallery(0);
