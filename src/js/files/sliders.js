/* Документация слайдера: https://swiperjs.com/ */

import Swiper from 'swiper';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay
*/

function initSliders() {
	if (window.innerWidth < 992) {
		if (document.querySelector('.about__slider')) {
			new Swiper('.about__slider', {
				slidesPerView: 'auto',
				spaceBetween: 0,
				speed: 800,
			})
		}
		if (document.querySelector('.licenses__slider')) {
			new Swiper('.licenses__slider', {
				slidesPerView: 'auto',
				spaceBetween: 0,
				speed: 800,
			})
		}
		if (document.querySelector('.students__slider')) {
			new Swiper('.students__slider', {
				slidesPerView: 'auto',
				spaceBetween: 0,
				speed: 800,
			})
		}
	}
	if (document.querySelector('.hero-docs')) {
		new Swiper('.hero-docs', {
			modules: [Pagination],
			slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 800,
			pagination: {
				el: '.hero-docs__pagination',
				clickable: true,
			},
		})
	}
	if (document.querySelector('.hero-images')) {
		new Swiper('.hero-images', {
			modules: [Pagination],
			slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 800,
			pagination: {
				el: '.hero-images__pagination',
				clickable: true,
			},
		})
	}
	if (document.querySelector('.hero-reviews')) {
		new Swiper('.hero-reviews', {
			modules: [Pagination],
			slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 800,
			pagination: {
				el: '.hero-reviews__pagination',
				clickable: true,
			},
		})
	}
	if (document.querySelector('.service-gallery__thumbs') || document.querySelector('.service-gallery__main')) {
		const serviceSliderThumbs = new Swiper('.service-gallery__thumbs', {
			slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 800,
		})
		const serviceSliderMain = new Swiper('.service-gallery__main', {
			modules: [Thumbs],
			slidesPerView: 'auto',
			spaceBetween: 0,
			speed: 800,
			thumbs: {
				swiper: serviceSliderThumbs,
			}
		})
	}
}

window.addEventListener("load", () => initSliders())