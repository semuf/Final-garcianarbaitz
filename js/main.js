document.addEventListener('DOMContentLoaded', function () {
  const gliderElement = document.querySelector('.glider');
  const modal = document.getElementById("modal-img");
  const modalImage = document.getElementById("modal-image");
  const closeModal = document.querySelector(".modal-close");

  // Si el ancho es >= 768, inicializamos Glider
  if (window.innerWidth >= 768 && gliderElement) {
    new Glider(gliderElement, {
      slidesToShow: 1,
      dots: '.dots',
      arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
      },
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  } else {
    // Si es mobile: eliminamos la clase .glider
    if (gliderElement) {
      gliderElement.classList.remove('glider');
    }
  }

  // Lightbox (funciona igual para mobile o desktop)
  const images = document.querySelectorAll(".galeria-slider img");

  images.forEach((img) => {
    img.addEventListener("click", () => {
      modalImage.src = img.src;
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
