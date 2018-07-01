var slider = (function() {

	return {
		init: function() {
			let _this = this,
			sliderControls = document.querySelectorAll('.slider__controls');

			for(let i = 0; i < sliderControls.length; i++) {
				sliderControls[i].addEventListener('click', clickControl);
			}

			function clickControl(e) {
				e.preventDefault();
				let activeSlide = this.parentElement.querySelector('.active'),
					nextSlide = activeSlide.nextElementSibling,
					prevSlide = activeSlide.previousElementSibling,
					firstSlide = this.parentElement.querySelector('.slider__list').firstElementChild,
					lastSlide = this.parentElement.querySelector('.slider__list').lastElementChild;

				if(this.classList.contains('slider__next')) {
					if(nextSlide) {
						_this.moveSlider(nextSlide);
					} else {
						_this.moveSlider(firstSlide);
					}
				} else {
					if(prevSlide) {
						_this.moveSlider(prevSlide);
					} else {
						_this.moveSlider(lastSlide);
					}
				}
			}
		},
		moveSlider: function(slide) {
			let activeSlide = slide.parentElement.querySelector('.active');

			activeSlide.classList.remove('active');
			slide.classList.add('active');
		}
	}

})();

slider.init();