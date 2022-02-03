const burger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__menu');

if (burger) {
	burger.addEventListener('click', () => {
		document.body.classList.toggle('_lock');
		burger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
	});
}
