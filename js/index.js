'use strict';


///section1
const gallery = document.querySelector('.gallery');
const galleryUl = gallery.querySelector('ul');
const galleryUlLi = galleryUl.querySelectorAll('li');

const arrowLeft = document.querySelector('.sec1-btn>span.arrow.left');
const arrowRgith = document.querySelector('.sec1-btn>span.arrow.right');

const gap = galleryUlLi[1].offsetLeft - galleryUlLi[0].offsetLeft;

const arrBg = [];

for (let i = 0; i < galleryUlLi.length; i++) {
  arrBg.push(`url(img/g${i}.jpg) no-repeat 50%/cover`);
  galleryUlLi[i].style.background = arrBg[i];

}



arrowLeft.addEventListener('click', () => {
  const first = galleryUl.firstElementChild;
  galleryUl.appendChild(first);
})
arrowRgith.addEventListener('click', () => {
  const last = galleryUl.lastElementChild;
  galleryUl.prepend(last);
})


//section2
const sec2Btn = document.querySelector('.sec2-btn');
const sec2BtnArrowLeft = document.querySelector('span.sec2-arrow.left');
const sec2BtnArrowRight = document.querySelector('span.sec2-arrow.right');

const newItems = document.querySelector('.new-items');
const newItemsUl = newItems.querySelector('ul')
const newItemsUlLi = newItemsUl.querySelectorAll('li')

const sec2Gap = newItemsUlLi[5].offsetLeft - newItemsUlLi[0].offsetLeft;

let i = 0;

sec2BtnArrowLeft.addEventListener('click', () => {
  if (i >= 2) i = -1;

  i++;
console.log(i)


  const sec2Goto = (-i * sec2Gap) + 'px';
  newItems.style.left = sec2Goto;
  newItems.style.transition = 'all 0.3s';
})
sec2BtnArrowRight.addEventListener('click', () => {
  if (i < 1) i = 3;

  i--;
  const sec2Goto = (-i * sec2Gap) + 'px';
  newItems.style.left = sec2Goto;
  newItems.style.transition = 'all 0.3s';
})




//section4
const thumItems = document.querySelector('.thum-items');
const thumItemsUl = thumItems.querySelector('ul')
const thumItemsUlLi = thumItems.querySelectorAll('li')
const thumItemsUlLiImg = thumItems.querySelectorAll('li>img');

const thumTitle = thumItems.querySelectorAll('p.title')

const sec4ArrowLeft = document.querySelector('span.sec4-arrow.left');
const sec4ArrowRight = document.querySelector('span.sec4-arrow.right');

const sec4Bottom = document.querySelector('.sec4-bottom');
const sec4BottomPoster = sec4Bottom.querySelector('.poster');
const sec4BottomPosterImg = sec4Bottom.querySelector('img');

const sec4RightTitleImg = document.querySelector('.title-con>h3.title>img');

const titleText = document.querySelector('.title-text');

const title = ['내과박원장', '여고추리반', 'DTCU', '술꾼도시여자들', 'EMERGENCY', '유미의 세포들', '환승연애', '미드나이트', '아이돌받아쓰기대회', '샤크'];
const subTitle = [
  '초짜 개원의의 웃픈 메디컬 코미디!',
  '티빙이 준비한 첫번째 오리지널',
  '국내 유일 어드벤처 버라이어티 [대탈출] 유니버스',
  '세 여자의 일상을 그린 본격 기승전술 드라마',
  '새로운 시작을 꿈꾸는 래퍼들을 위한 힙합 솔루션',
  '세포들과 함께 성장하는 평범한 유미의 세포 자극 공감 로맨스',
  '이별한 커플들이 새로운 사랑을 찾아나가는 연애 리얼리티',
  '극강의 음소거 추격 스릴러',
  '놀라운 토요일의 아이돌 버전 스핀오프 프로그램',
  '영화로 재탄생한 레전드 액션 웹툰'
];


thumItemsUlLiImg.forEach((el, idx) => {
  el.setAttribute('alt', title[idx]);
  el.setAttribute('src', `img/thum${idx}.png`)
})

thumTitle.forEach((el, idx) => {
  el.innerText = title[idx];
})

sec4ArrowLeft.addEventListener('click', () => {
  const first = thumItemsUl.firstElementChild;
  thumItemsUl.appendChild(first);
});
sec4ArrowRight.addEventListener('click', () => {
  const last = thumItemsUl.lastElementChild;
  thumItemsUl.prepend(last);
});

thumItemsUl.addEventListener('click', (e) => {
  const eTarget = e.target;
  const eTargetParent = eTarget.parentElement;

  thumItemsUlLi.forEach((el, idx) => {
    if (eTargetParent === el) {
      const imgAlt = el.children[0].getAttribute('alt');
      // console.log(eTargetParent);
      console.log(imgAlt);

      sec4BottomPosterImg.setAttribute('src', `img/poster${idx}.jpg`);
      sec4BottomPosterImg.setAttribute('alt', imgAlt);

      sec4RightTitleImg.setAttribute('src', `img/thum${idx}.png`);
      sec4RightTitleImg.setAttribute('alt', imgAlt);

      titleText.children[0].innerText = imgAlt
      titleText.children[1].innerText = subTitle[idx];
    }

  })
})