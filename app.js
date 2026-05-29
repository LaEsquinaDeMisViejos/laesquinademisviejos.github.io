const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const menuItems = document.querySelectorAll('.menu-item');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    menuItems.forEach(item => {
      if (category === 'todo' || item.dataset.category === category) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
});

const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

const revealOnScroll = () => {
  revealElements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 80) {
      element.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
