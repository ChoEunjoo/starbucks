// 스크롤했을 때 이벤트 발생 .addEventListener('scroll', 함수)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  // _.throttle(함수, 시간(ms)) -> 시간(ms) 단위로 부하를 줌. 일정시간에 한 번씩 자동하도록 함
  // console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    gsap.to(badgeEl, 0.6, { //gsap 애니메이션 처리
      // gsap.to(요소, 지속시간(s), 옵션)
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to('toTopEl', 0.2, {
      x: 0
    });

  } else { 
    // window.scrollY <= 500 배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기
    gsap.to('toTopEl', 0.2, {
      x: 100
    });
  }
}, 300));
// window -> 브라우저의 하나의 창
// _.throttle(함수, 시간(ms)) -> 시간(ms) 단위로 부하를 줌. 일정시간에 한 번씩 자동하도록 함
// window.scrollY -> 스크롤의 위치
// gsap.to(요소, 지속시간(s), 옵션)
// 스크롤 위치에 따라(if>500) display 값을 설정해주지 않으면, opacity로 눈에서는 안보이게 해도 그 부분은 그대로 남아, 보이지 않아도 클릭이 가능해지기 때문에 보이지 않게 될 경우 none 값을 줌


// 클릭시 페이지의 가장 위로 가는 이벤트 발생
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});
// gsap.to(window, 움직이는 시간, {scrollTo: y}) -> 0.7초 동안 window(페이지)의 y축의 0 위치로 이동


// 각각 같은 작용을 하도록 함
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1)*0.7, //처음 반복되는 요소 0.7초 뒤 동작, 2번째는 1.4초 뒤 동작, 3번째는 2.1초 뒤 동작 -> 딜레이 시간을 따로 주어 순차적으로 나타나게 함
    opacity: 1,

  });
});


//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction: 'vertical', // 수직 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true // 반복 재생 여부
});
new Swiper('.promotion .swiper', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
});

new Swiper('.awards .swiper', {
  //direction: 'horizontal' -> horizontal은 자동으로 할당
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

// toggle-promotion 선택했을 때, .promotion 을 보이거나 숨김
const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false; // 숨겨져 있는지 여부 -> false (기본, 숨겨져있지 않는 상태)
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion 
                    // ! -> 반대값, 반대의 값을 반환한다.
                    // false 일 때, true가 다시 할당된다. 반대의 상황에도 마찬가지
  if (isHidePromotion) { //if 조건문에 true가 들어오면(위에서 반대값이 반환되었음)
    // true 일때 -> 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // false 일 때 -> 보임 처리
    promotionEl.classList.remove('hide');
  }
});


// 랜덤의 시간 동안 딜레이
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션));
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    { //옵션
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);


// 스크롤이 어디에 있는지에 따라 반응, 작동하게 함
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl, // 보여짐의 여부를 감시할 요소를 지정
    triggerHook: 0.8 // 뷰포트의 처음(0)과 끝부분(1) 사이의 0.8 정도의 구간에서 보여지기 시작할 때 작동
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

