const header = document.querySelector("header");
console.log(header);

let posY = 0;

window.addEventListener("scroll",(e)=>{
    if(posY < window.scrollY){
        // 헤더숨기기
    }else{
        // 헤더보이기
    }
    posY = window.scrollY;
});