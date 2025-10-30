const header = document.querySelector("header");
console.log(header);

let posY = 0;

window.addEventListener("scroll",(e)=>{
    if(posY < window.scrollY){
        headerHide()
    }else{
        headershow()
    }
    posY = window.scrollY;
});

/* 
헤더 숨기는 함수 만들어서 header에 hide라는 클래스 붙이기
헤더 보이는 함수 만들어서 header에 hide라는 클래스 떼기
*/

function headerHide(){
    header.classList.add("hide");
}

function headershow(){
    header.classList.remove("hide");
}

// 스크롤페이드인인터랙션
const content = document.getElementsByClassName("content");
console.log(content);
window.addEventListener("scroll",()=>{
    const winH = window.innerHeight;
    for(let i = 0; i < content.length; i++){
        const contentTop = content[i].getBoundingClientRect().top;
        if(contentTop - winH < 0){
            content[i].classList.add("in");
        }else {
            content[i].classList.remove("in");
        }
    }
})


