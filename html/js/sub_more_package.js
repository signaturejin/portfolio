// 필요한 태그 생성
const best_list = document.querySelectorAll(".best_wrap > .list");
const more_btn = document.querySelector(".more_btn");

// 시작 변수
let list_start = 4;

more_btn.addEventListener("click",(e)=>{
    // 페이지 이동 방지
    e.preventDefault();

    for(let i=list_start; i < list_start + 4; i++){
        best_list[i].style.display = "block";
    }
    
    list_start += 4;

    if(list_start >= best_list.length){
        more_btn.style.display = "none";
    }
});