 
$(document).ready(function(){
	$(".nav__list, .footer__btn-box, .footer__nav-list").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

const formInput = document.querySelectorAll('.registration__input'),
      formTextArea = document.querySelector('.registration__textarea'),
      formLabel = document.querySelectorAll('.registration__label');

formInput.forEach(el=>el.addEventListener('focus', (e)=>{
  el.previousElementSibling.classList.add('active');
}))

formInput.forEach(el=>el.addEventListener('blur', (e)=>{
  if(e.currentTarget.value===''){
    el.previousElementSibling.classList.remove('active');
  }
}))

formTextArea.addEventListener('focus', (e)=>{
  formTextArea.previousElementSibling.classList.add('active');
})

formTextArea.addEventListener('blur', (e)=>{
  if(e.currentTarget.value===''){
    formTextArea.previousElementSibling.classList.remove('active');
  }
})

formLabel.forEach(el=>el.addEventListener('click', (e)=>{
  el.classList.add('active');
  el.nextElementSibling.focus()
}))

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

gsap.fromTo('.header__img', 3, {
  opacity: '0'
},
{
  opacity: '1'
})

gsap.fromTo('.header__top', 1, {
  opacity: '0',
  y: '-100'
},
{
  opacity: '1',
  y: '0'
}, 1)

gsap.fromTo('.header__subtitle', 1, {
  opacity: '0',
  y: '80'
},
{
  opacity: '1',
  y: '0'
}, 2)

if(ScrollTrigger.isTouch !== 1){
  ScrollSmoother.create({
    wrapper: '.scroll-wrapper',
    content: '.scroll-content',
    smooth: 1.5,
    effects: true
  })

gsap.fromTo('.header__content', {
  opacity: '1'
},
{
  opacity: '0',
  scrollTrigger:{
    trigger: '.header__content',
    start: '100',
    end: '700',
    scrub: true
  }
})

gsap.from('.about__title', {
  x: '400',
  scrollTrigger:{
    trigger: '.about__title',
    start: '-700',
    end: '-50',
    scrub: true

  }
})

gsap.from('.about__text-item--left', {
  x: '-100',
  opacity: '0',
  scrollTrigger:{
    trigger: '.about__text-item-left',
    start: '200',
    end: '1000',
    scrub: true

  }
})

gsap.from('.about__text-item--right', {
  x: '100',
  opacity: '0',
  scrollTrigger:{
    trigger: '.about__text-item-right',
    start: '200',
    end: '1000',
    scrub: true
  }
})

gsap.to('.about', {
  opacity: '0',
  scrollTrigger:{
    trigger: '.about',
    start: '0',
    end: '300',
    scrub: true
  }
})

gsap.from('.registration__title', {
  x: '400',
  scrollTrigger:{
    trigger: '.registration__title',
    start: '-700',
    end: '-50',
    scrub: true
  }
})

gsap.from('.registration__subtitle', {
  x: '400',
  opacity: '0',
  scrollTrigger:{
    trigger: '.registration__subtitle',
    start: '-700',
    end: '-200',
    scrub: true
  }
})

gsap.from('.registration__form-wrapper', {
  opacity: '0',
  scrollTrigger:{
    trigger: '.registration__form-wrapper',
    start: '-300',
    end: '-150',
    scrub: true
  }
})

gsap.from('.contact__title', {
  x: '400',
  scrollTrigger:{
    trigger: '.contact__title',
    start: '-700',
    end: '-50',
    scrub: true
  }
})


let contactItemInc = 0
document.querySelectorAll('.contact__item--left').forEach(el=>{
  gsap.from(el, {
    x: '-150',
    y: '150',
    opacity: '0',
    scrollTrigger:{
      trigger: el,
      start: '-700',
      end: '-360',
      scrub: true
    }
  })
})
document.querySelectorAll('.contact__item--right').forEach(el=>{
  gsap.from(el, {
    x: '150',
    y: '150',
    opacity: '0',
    scrollTrigger:{
      trigger: el,
      start: '-700',
      end: '-360',
      scrub: true
    }
  })
})

gsap.from('.footer', {
  y: '400',
  opacity: '0',
  scrollTrigger:{
    trigger: '.footer',
    start: '-3000',
    end: '-2500',
    scrub: true
  }
})

}
