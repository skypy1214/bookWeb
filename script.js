//////////////////성진//////////////////
let footerScroll = document.querySelector('.footerScroll')
let header = document.querySelector('.header')
let newBook = document.querySelector('.newBook')
let genreBook = document.querySelector('.genreBook')
let reviewBook = document.querySelector('.reviewBook')
let loading = document.querySelector('.loadingImg')
let loginIcon = document.querySelector('.loginIcon')
let loginModal = document.querySelector('.loginModal')
let body = document.querySelector('body')
let lgModal = document.querySelector('.lgModal')
let xmark = document.querySelector('.fa-xmark')

window.onload = () => {
    loadingPage();
}

function loadingFadeout(){
    loading.classList.add('fadeOut')
}
function loadingPage(){
    setTimeout(loadingFadeout,50) // 테스트할 때 로딩화면 기다리기 싫어서 0.05초로 만들어 둠
}

loginIcon.addEventListener('click',function(){
    if(loginModal.style.display == 'none'){
        loginModal.style.display = 'flex'
    }
})

xmark.addEventListener('click',function(){
    loginModal.style.display = 'none'
})

loginModal.addEventListener('click', function(){
    if(event.target.className == 'loginModal'){
        loginModal.style.display = 'none'
    }
})


footerScroll.addEventListener('click',function(e){
    if(e.target.innerText=='HOME'){
        header.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '신간도서'){
        newBook.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '장르별 도서'){
        genreBook.scrollIntoView({
            behavior: "smooth"})
    } else if (e.target.innerText == '리뷰'){
        reviewBook.scrollIntoView({
            behavior: "smooth"})
    }
})
///////////////////////////////////////
//////////////////상호//////////////////
let btnR = document.querySelector("#btnR");
let btnL = document.querySelector("#btnL");
let item = document.querySelectorAll(".slideItem")
let slider = document.querySelector(".bestSeller-sell-move")


let itemlength =item.length
let move = 100
let itemIndex = 0
btnL.addEventListener("click",function(){
    //왼쪽으로 움직이는 기능만 구현 정확한 픽셀값 아직 안됨
    if(itemIndex <= item.length){
        slider.style.transform = "translate(" + 100 * (itemIndex + 1)+"px)"
    }
    console.log(itemIndex)
    item[++itemIndex]
    

})


///////////////////////////////////////
//////////////////수근//////////////////

///////////////////////////////////////
//////////////////진주//////////////////


///////////////////////////////////////
//////////////////양희//////////////////

///////////////////////////////////////