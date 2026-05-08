// ===== Mobile menu =====
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const mobileMenuLinks = document.querySelectorAll('.mobile-header-link');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  for (let index = 0; index < mobileMenuLinks.length; index++) {
    mobileMenuLinks[index].addEventListener('click', toggleMenu);
  }

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// ===== Modal rent popup =====
const refs = {
  form: document.querySelector('.form'),
  openModalBtn: document.querySelector('[data-modal-open]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('.backdrop'),
  modalTitle: document.querySelector('.modal__title'),
  inputUserName: document.querySelector('#username'),
};

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}

refs.form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (refs.form.checkValidity()) {
    refs.modalTitle.textContent = `${refs.inputUserName.value}, Thank you!`;
    toggleModal();
    refs.form.reset();
  }
});

refs.closeModalBtn.addEventListener('click', function () {
  toggleModal();
});

// ===== Swiper section Yachts =====
const swiperYachts = new Swiper('.my-swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// ===== Swiper section Reviews =====
const swiperReviews = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

// ===== Scroll Up =====
const scrollToTopButton = document.getElementById('scrollToTop');

scrollToTopButton.addEventListener('click', () => {
  anime({
    targets: document.documentElement,
    scrollTop: 0,
    duration: 100,
    easing: 'easeInOutQuad',
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});
