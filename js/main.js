document.addEventListener('DOMContentLoaded', function () {
  new Glider(document.querySelector('.glider'), {
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
});
document.addEventListener("DOMContentLoaded", function () {
  // Glider
  new Glider(document.querySelector(".glider"), {
    slidesToShow: 1,
    dots: ".dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next",
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  });

  // Lightbox personalizado
  const images = document.querySelectorAll(".glider img");
  const modal = document.getElementById("modal-img");
  const modalImage = document.getElementById("modal-image");
  const closeModal = document.querySelector(".modal-close");

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

