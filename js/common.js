// 검색창을 클릭했을 때 창 크기 변경
const searchEl = document.querySelector('.search');
  // 클래스가 'search'인 요소(index.html line:87)를 검색하여 변수(searchEl)에 할당 -> (document.querySelector())
  // document는 html 전체를 뜻함
const searchInputEl = searchEl.querySelector('input');
  // 클래스가 .search 인 요소(searchEl에 할당되어 있음) 안의 input 태그(index.html line:88)를 찾아 변수(searchInputEl)에 할당 -> (searchEl.querySelector())     
  
searchEl.addEventListener('click', function () { // search 부분을 클릭하면 function () {} 이벤트 발생,
  searchInputEl.focus();
    // searchEl에 이벤트를 적용 시켰기 때문에, input 영역 뿐만 아니라 search에 해당하는 부분을 클릭하면 input(searchInputEl)에 해당하는 부분에 focus를 준다.
}); 

searchInputEl.addEventListener('focus', function() {// input 부분에 focus가 되면,
  searchEl.classList.add('focused');
  // 'focused' 라는 클래스를 추가
  // classList.add('') -> ''라는 클래스를 추가
  searchInputEl.setAttribute('placeholder','통합검색');
    //'focused' 라는 클래스를 추가 후, html의 속성을 지정
    // .setAttribute('속성, 속성에 할당할 값'); 지정된 요소의 속성 값을 설정, 이미 속성이 있는 경우 값이 업데이트
    // placeholder -> input 에 입력할 때, 미리 힌트를 주는 속성
});

searchInputEl.addEventListener('blur', function() {// input 부분에 focus 되었던 것이 해지(blur) 되면,
  searchEl.classList.remove('focused');
  // 'focused' 라는 클래스를 제거
  // classList.remove('') -> ''라는 클래스를 제거
  searchInputEl.setAttribute('placeholder','');
   //'focused' 라는 클래스를 제거 후, html의 속성을 지정
   // placeholder -> input 에 입력할 때, 미리 힌트를 주는 속성, '' 빈칸으로 둔다.
   // ''빈칸으로 두지 않으면, 이전에 '통합검색' 이라고 떴던 글자가 사라지지 않는다.
});


// 올해 년도 출력
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021
