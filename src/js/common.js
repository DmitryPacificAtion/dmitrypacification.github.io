// var sliderContentItems = document.querySelectorAll('.slider__content_item');
// var sliderDotsItems = document.querySelectorAll('.slider__dots_item');
// function slider() {
// 	var i = 0, len = sliderDotsItems.length - 1;
// 	function findActive() {
// 		for (; i < len + 1; i++) {
// 			if ( sliderDotsItems[i].classList.contains('active') ) break;
// 			else continue;
// 		}
// 	}
// 	function removeActive() {
// 		sliderContentItems[i].classList.remove('active');
// 		sliderDotsItems[i].classList.remove('active');
// 	}
// 	function addActive() {
// 		sliderContentItems[i].classList.add('active');
// 		sliderDotsItems[i].classList.add('active');
// 	}
// 	function startSider() {
// 		removeActive();
// 		// Проверка на последний активный элемент в слайдере
// 		if (i === len) {
// 			i = 0;
// 		}
// 		else {
// 			++i;
// 		}
// 		addActive();
// 	}
// 	function setEventsOnSlider() {
// 		var sliderDots = document.querySelector('.slider__dots');
// 		sliderDots.addEventListener('click', function(event) {
// 			if (event.target.parentElement.hasAttribute('data-slider-dot')){
// 				removeActive();
// 				// С помощью дата атрибутов вычисляем елемент на котором произошел клик
// 				i = event.target.parentElement.getAttribute('data-slider-dot') - 1;
// 				addActive();
// 			}
// 		});
// 	}
// 	setEventsOnSlider();
// 	setInterval( startSider, 4500 );
// 	clearInterval( startSider );
// }
// slider();

var overlay = $('.overlay');
var modal = $('.modal');
var close = $('#close-modal');
var shareTo = $('.aside__share-to');

var butns = document.querySelectorAll('.product__card.active .card_body_right .btn-outline-info');
for (var i = 0; i < butns.length; i++) {
	butns[i].addEventListener('click', function(){
		toggleModal();
		window.scrollTo(0,0);
	});
}

close.on('click', toggleModal);

function toggleModal(){
	overlay.toggle();
	modal.toggle();
}

