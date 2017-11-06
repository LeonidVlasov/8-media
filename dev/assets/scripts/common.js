document.addEventListener("DOMContentLoaded", function (e) {

	document.addEventListener('click', function(e) {
		if (e.target.classList.contains('js-nav__link')) {
			
			let pressedButton = e.target;
		
			let buttons = document.querySelectorAll('.js-nav__link');
			let images = document.querySelectorAll('.js-header__image');
			let descript = document.querySelectorAll('.js-descript__container');

			let pressedButtonIndex;

			buttons.forEach(function(element, i) {
				element.classList.remove('nav__link--active');
				images[i].classList.remove('header__image--active');
				descript[i].classList.remove('descript__container--active');
			});

			for (let i = 0; i < buttons.length; i++) {
				if (pressedButton === buttons[i]) {
					pressedButtonIndex = i;
				}
			}

			buttons[pressedButtonIndex].classList.add('nav__link--active');
			images[pressedButtonIndex].classList.add('header__image--active');
			descript[pressedButtonIndex].classList.add('descript__container--active');
		}
	});

		$('.gallery').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
			slide: 'figure'
			// responsive: [{
			// 		breakpoint: 1200,
			// 		settings: {
			// 			slidesToShow: 3,
			// 			slidesToScroll: 2,
			// 			infinite: true
			// 		}
			// 	},
			// 	{
			// 		breakpoint: 620,
			// 		settings: {
			// 			slidesToShow: 1,
			// 			slidesToScroll: 1
			// 		}
			// 	}
			// ]
		});
});