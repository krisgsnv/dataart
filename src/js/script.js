window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;


		document.querySelectorAll('.card').forEach((el, i) => {
			if ((el.offsetTop) <= scrollDistance) {
                
				document.querySelectorAll('.sidebar__link').forEach((el) => {
					if (el.classList.contains('sidebar__link--active')) {
						el.classList.remove('sidebar__link--active');
					}
				});
				document.querySelectorAll('.sidebar__item')[i].querySelector('a').classList.add('sidebar__link--active');
			}
		});
	
});

const dropDownButton = document.querySelector('.dropdown__outer');
const sideBar = document.querySelector('.sidebar__outer');
const xIcon = document.querySelector('.sidebar__x-icon');

if (window.innerWidth < 930) {
	sideBar.classList.add('sidebar-hide');
}
dropDownButton.addEventListener('click', () => {
	sideBar.classList.toggle('sidebar-hide');
	dropDownButton.classList.toggle('sidebar-hide');
	
 });

 xIcon.addEventListener('click', () => {
	sideBar.classList.toggle('sidebar-hide');
	dropDownButton.classList.toggle('sidebar-hide');
	
 });



