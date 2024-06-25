//Toggle Navbar
const body = document.querySelector('body');
const darkDropdown = document.querySelector('[data-bs-theme="dark"]');
const buttonToggle = document.querySelector('#toggleMode');
const toggleIcon = document.querySelector('.bi-toggle-off');
const eyeIcon = document.querySelector('.bi-eye');

buttonToggle.addEventListener('click', () => {
  //Cambia la clase para cambiar el tema del body
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  //Pregunta si el body tiene la clase dark-mode para cambiar el tema del navbar
  let theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
  darkDropdown.setAttribute('data-bs-theme', theme);

  //Pregunta si el body tiene la clase dark-mode para cambiar el texto del dropdown
  buttonToggle.textContent = body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';

  //Cambia los iconos de los botones (toggle y eye)
  toggleIcon.classList.toggle('bi-toggle-off');
  toggleIcon.classList.toggle('bi-toggle-on');

  eyeIcon.classList.toggle('bi-eye-fill');
  eyeIcon.classList.toggle('bi-eye');
});