const dropdownMenu = document.querySelector('.dropdownMenu'); // Находим меню
const burger = document.querySelector('.burger'); //

function toggleMenu(){
  dropdownMenu.classList.toggle('hidden');

}

burger.addEventListener('click', toggleMenu);
