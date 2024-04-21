function mobileNav() {
	// Mobile nav button
	const navBtn = document.querySelector('.mobile-nav-btn');
	const nav = document.querySelector('.mobile-nav');
	const menuIcon = document.querySelector('.nav-icon');
	const callModalBtn = document.querySelector('.cta__btn--mobile');
	const mobileNavList = document.querySelectorAll('.mobile-nav__list li');

	navBtn.onclick = function () {
		nav.classList.toggle('mobile-nav--open');
		menuIcon.classList.toggle('nav-icon--active');
		document.body.classList.toggle('no-scroll');

		mobileNavList.forEach(item => {
			item.addEventListener('click', () => {
				nav.classList.toggle('mobile-nav--open');
				menuIcon.classList.toggle('nav-icon--active');
				document.body.classList.toggle('no-scroll');
			});
		});
	};
}
// 
export default mobileNav;