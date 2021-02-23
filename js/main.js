$(function() {

	// typing animation
	const texts = ['eat helthy food', 'help keep the wild', 'live in cleanliness'];
	let count = 0;
	let index = 0;
	let currentText = '';
	let letter = '';

	function type() {
		currentText = texts[count];
		letter = currentText.slice(0, ++index);
		document.querySelector('.typing').textContent = letter;
		if (letter.length === currentText.length) {
			count++;
			index = 0;
		}
		if (texts.length === count) {
			count = 0;
		}
	}
	setInterval(type, 200);


	// burger menu
		const burger = document.querySelector('.burger');
		const navLinks = document.querySelectorAll('.nav-links li');
		const nav = document.querySelector('.nav');

		burger.addEventListener('click', function(){
			nav.classList.toggle('nav-active');
			burger.classList.toggle('transform-burger');
			navLinks.forEach( function(link, index) {
				if (link.style.animation) {
					link.style.animation = '';
				} else {
					link.style.animation = `fadeInLinks 1s ease forwards ${index / 4}s`;
				}
			});
		});

		const headerHeight = document.querySelector('header').clientHeight;
		const section1Height = document.querySelector('.section-1').clientHeight;
		const section2Height = document.querySelector('.section-2').clientHeight;
		const section3Height = document.querySelector('.section-3').clientHeight;
		const section4Height = document.querySelector('.section-4').clientHeight;
		const section5Height = document.querySelector('.section-5').clientHeight;



	// modals

	const modal = document.querySelector('.modal');
	const previews = document.querySelectorAll('.gallery img');
	const fullImage = document.querySelector('.full-image');
	const imgText = document.querySelector('.caption');

	previews.forEach(preview => {
		preview.addEventListener('click', () => {
			modal.classList.add('modal-open');
			fullImage.classList.add('full-image-open');

			// change img and text
			const originalSrc = preview.getAttribute('data-original');
			const originalText = preview.getAttribute('alt');
			fullImage.src = `./img/${originalSrc}`;
			imgText.textContent = originalText;
		});
	});

	modal.addEventListener('click', (e) => {
		if(e.target.classList.contains('modal')){
			modal.classList.remove('modal-open');
		}
		if(e.target.classList.contains('modal')){
			fullImage.classList.remove('full-image-open');
		}

	});

	// animation 
	let titleS2 = document.querySelector('.title-section-2');
	let titleS1 = document.querySelector('.title-section-1');
	let titleS4 = document.querySelector('.title-section-4');
	const reason1 = document.querySelector('.reason_1');
	const reason2 = document.querySelector('.reason_2');
	const reason3 = document.querySelector('.reason_3');
	let anim = [titleS2, titleS1, titleS4, reason1, reason2, reason3]
	function scrollApear(array) {
		for (let element of array) {
			let position = element.getBoundingClientRect().top;
			let screenPosition = window.innerHeight / 1.3;
			if (position < screenPosition) {
				element.classList.add('appear');
			}
		}
	}
	titleS1.classList.add('appear');


	// parallax eff with pos fixed
	const bgReasons = document.querySelector('.bg-reasons');
	const titleReason = document.querySelector('.title-reason');
	const bgTitleReason = document.querySelector('.bg-title-reason');
	const bgTitleReasonHeight = bgTitleReason.clientHeight;
	let screenPositionParallax = window.innerHeight;
	const numb = document.querySelector('.bg-numb');
	const diffnumb = document.querySelector('.diffnumb');
	const wrapperTextNumb = document.querySelector('.wrapper-text-numb');
	const footer = document.querySelector('.footer');
	const footerContent = document.querySelector('.footer-content');



	// anim flower
	const flower = document.querySelector('.flower');


	// Scroll func events

	window.addEventListener('scroll', function(){

		// anim text
		scrollApear(anim);



		let offsetScreen = window.pageYOffset;
		// Fixed parallax section 3
		const postitle = document.querySelector('.section-3').getBoundingClientRect().top;
		const reason1height = reason1.getBoundingClientRect().top;
		const reason2height = reason2.getBoundingClientRect().top;
		const reason3height = reason3.getBoundingClientRect().top;

		if (offsetScreen > section1Height + headerHeight + section2Height - screenPositionParallax && offsetScreen < section1Height + headerHeight + section2Height + section3Height - screenPositionParallax) {
			bgTitleReason.style.removeProperty('bottom');
			bgTitleReason.style.top = '0';
			bgTitleReason.style.left = '0';
		}

		if (offsetScreen > section1Height + headerHeight + section2Height + section3Height - screenPositionParallax) {
			bgTitleReason.style.removeProperty('top');
			bgTitleReason.style.bottom = '0';
		}

		if (offsetScreen < section1Height + headerHeight + section2Height / 2) {
			bgReasons.style.background = '#E0E0E0';
		}

		if (offsetScreen > section1Height + headerHeight + section2Height / 2) {
			bgReasons.style.background = '#6DCECD';
		}

		if (offsetScreen > section1Height + headerHeight + section2Height + section3Height / 3 - 1 / 3 * screenPositionParallax) {
			bgReasons.style.background = '#F3C97D';
		}

		if (offsetScreen > section1Height + headerHeight + section2Height + section3Height / 3 * 2 - 1 / 3 * screenPositionParallax) {
			bgReasons.style.background = '#FF6584';
		}

		if (offsetScreen > section1Height + headerHeight + section2Height + section3Height - screenPositionParallax / 2) {
			bgReasons.style.background = '#E0E0E0';
		}


		if (offsetScreen >= section1Height + headerHeight + section2Height && offsetScreen <= section1Height + headerHeight + section2Height + section3Height - screenPositionParallax) {
			bgTitleReason.style.position = 'fixed';
		} else {
			bgTitleReason.style.position = 'absolute';
		}

		// anim flower 
		flower.style.transform = `rotate(${offsetScreen / 6}deg)`


		// fixed parallax section 5 
		if (offsetScreen >= section1Height + headerHeight + section2Height + section3Height + section4Height && offsetScreen <= section1Height + headerHeight + section2Height + section3Height + section4Height + section5Height - screenPositionParallax) {
			numb.style.position = 'fixed';

		} else {
			numb.style.position = 'absolute';
		}

		if (offsetScreen >= section1Height + headerHeight + section2Height + section3Height + section4Height && offsetScreen <= section1Height + headerHeight + section2Height + section3Height + section4Height + section5Height - screenPositionParallax) {
			numb.style.removeProperty('bottom');
			numb.style.top = '0';
			numb.style.left = '0';
		}

		if (offsetScreen >= section1Height + headerHeight + section2Height + section3Height + section4Height + section5Height - screenPositionParallax) {
			numb.style.removeProperty('top');
			numb.style.bottom = '0';
			numb.style.left = '0';
		}

		if (offsetScreen < section1Height + headerHeight + section2Height + section3Height + section4Height) {
			diffnumb.textContent = 1;
			diffnumb.style.color = '#FF6584'
			wrapperTextNumb.style.color = '#FF6584'
		}

		if (offsetScreen > section1Height + headerHeight + section2Height + section3Height + section4Height) {
			diffnumb.textContent = 1;
			diffnumb.style.color = '#FF6584'
			wrapperTextNumb.style.color = '#FF6584'
		}

		if (offsetScreen > section1Height + headerHeight + section2Height + section3Height + section4Height + section5Height / 3 - 1 / 3 * screenPositionParallax) {
			diffnumb.textContent = 2;
			diffnumb.style.color = '#F3C97D'
			wrapperTextNumb.style.color = '#F3C97D'
		}

		if (offsetScreen > section1Height + headerHeight + section2Height + section3Height + section4Height + section5Height / 3 * 2 - 1 / 3 * screenPositionParallax) {
			diffnumb.textContent = 3;
			diffnumb.style.color = '#6DCECD'
			wrapperTextNumb.style.color = '#6DCECD'
		}




		// Media fixed parallax section-3
		if(window.innerWidth < 1120) {
			numb.style.transform = 'translateY(100%)'
			if (offsetScreen >= section1Height + headerHeight + section2Height && offsetScreen <= section1Height + headerHeight + section2Height + section3Height - 1 / 2 * screenPositionParallax) {
				bgTitleReason.style.position = 'fixed';
			} else {
				bgTitleReason.style.position = 'absolute';
			}

			if (offsetScreen > section1Height + headerHeight + section2Height - screenPositionParallax && offsetScreen < section1Height + headerHeight + section2Height + section3Height - 1 / 2 * screenPositionParallax) {
				bgTitleReason.style.removeProperty('bottom');
				bgTitleReason.style.top = '0';
				bgTitleReason.style.left = '0';
			}

			if (offsetScreen > section1Height + headerHeight + section2Height + section3Height - 1 / 2 * screenPositionParallax) {
				bgTitleReason.style.removeProperty('top');
				bgTitleReason.style.bottom = '0';
			}


			if (offsetScreen >= section1Height + headerHeight + section2Height + section3Height + section4Height && offsetScreen <= section1Height + headerHeight + section2Height + section3Height + section4Height + section5Height -  screenPositionParallax) {
				numb.style.position = 'fixed';

			} else {
				numb.style.position = 'absolute';
			}

			if (offsetScreen >= section1Height + headerHeight + section2Height + section3Height + section4Height && offsetScreen <= section1Height + headerHeight + section2Height + section3Height + section4Height + section5Height -  screenPositionParallax) {
				numb.style.removeProperty('bottom');
				numb.style.top = '0';
				numb.style.left = '0';
			}

			if (offsetScreen >= section1Height + headerHeight + section2Height + section3Height + section4Height + section5Height - screenPositionParallax) {
				numb.style.removeProperty('transform')
				numb.style.removeProperty('top');
				numb.style.bottom = '0';
				numb.style.left = '0';

			}

			if (offsetScreen < section1Height + headerHeight + section2Height + section3Height + section4Height) {
				diffnumb.textContent = 1;
				diffnumb.style.color = '#FF6584'
				wrapperTextNumb.style.color = '#FF6584'
			}

			if (offsetScreen > section1Height + headerHeight + section2Height + section3Height + section4Height) {
				diffnumb.textContent = 1;
				diffnumb.style.color = '#FF6584'
				wrapperTextNumb.style.color = '#FF6584'
			}

			if (offsetScreen > section1Height + headerHeight + section2Height + section3Height + section4Height + section5Height / 3 - 1 / 3 * screenPositionParallax) {
				diffnumb.textContent = 2;
				diffnumb.style.color = '#F3C97D'
				wrapperTextNumb.style.color = '#F3C97D'
			}

			if (offsetScreen > section1Height + headerHeight + section2Height + section3Height + section4Height + section5Height / 3 * 1.5 - 1 / 3 * screenPositionParallax) {
				diffnumb.textContent = 3;
				diffnumb.style.color = '#6DCECD'
				wrapperTextNumb.style.color = '#6DCECD'
			}

		}

		

		
	});

	const widthFooter = footerContent.clientWidth;
	const heightFooter = footerContent.clientHeight;



		
});