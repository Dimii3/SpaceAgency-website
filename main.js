const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-links__item');
const scrollTopBtn = document.querySelector('.back-to-top');
const footerYear = document.querySelector('.footer__year');
const currYear = new Date().getFullYear();
footerYear.textContent = currYear;

let menuOpen = false;
const toggleMenu = () => {
	if (!menuOpen) {
		navBtn.classList.add('active');
		nav.classList.add('active');
		menuOpen = true;
	} else if (menuOpen) {
		navBtn.classList.remove('active');
		nav.classList.remove('active');
		menuOpen = false;
	}
};

// LISTENERS 
window.addEventListener('scroll', () => {
	if (window.scrollY > 700) {
		scrollTopBtn.classList.add('show');
	} else {
		scrollTopBtn.classList.remove('show');
	}
});
navBtn.addEventListener('click', toggleMenu);
navLinks.forEach((link) => link.addEventListener('click', toggleMenu));
