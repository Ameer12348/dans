  let currentIndex = 0;
  const totalItems = document.querySelectorAll('.carousel-item').length;
  const intervalTime = 3000; // Time between automatic slides in milliseconds
  let intervalId;

  function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(${-currentIndex * 100}%)`;

    updateIndicators();
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
    resetInterval();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
    resetInterval();
  }

  function updateIndicators() {
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    indicatorsContainer.innerHTML = '';

    for (let i = 0; i < totalItems; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicator.addEventListener('click', () => goToSlide(i));
      if (i === currentIndex) {
        indicator.classList.add('active');
      }
      indicatorsContainer.appendChild(indicator);
    }
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
    resetInterval();
  }

  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, intervalTime);
  }

  // Pause on hover
  const carouselContainer = document.querySelector('.carousel-container');
  carouselContainer.addEventListener('mouseenter', () => clearInterval(intervalId));
  carouselContainer.addEventListener('mouseleave', resetInterval);

  // Initial setup
  updateIndicators();
  resetInterval();
