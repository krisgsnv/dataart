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

const dropDown = document.querySelector('.dropdown__inner');
const dropDownMobile = document.querySelector('.dropdown__mobile');
const xIcon = document.querySelector('.dropdown__x-icon');


dropDown.addEventListener('click', () => {
	dropDown.classList.toggle('sidebar-hide');
	dropDown.classList.toggle('dropdown__inner');
	dropDownMobile.classList.toggle('sidebar-hide');
	
 });

 xIcon.addEventListener('click', () => {
	dropDown.classList.toggle('sidebar-hide');
	dropDown.classList.toggle('dropdown__inner');
	dropDownMobile.classList.toggle('sidebar-hide');
	
 });



