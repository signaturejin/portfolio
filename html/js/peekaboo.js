// 필요한 태그 생성
const section = document.querySelectorAll(".section");
let secTop = [];
// console.log(section);


// 스크롤 이벤트
window.addEventListener("scroll",()=>{
    
    //스크롤바의 위치값 변수에 대입
    let scTop = window.scrollY;

    //각 구역의 시작위치값 반복문을 사용하여 배열에 담기
    
    section.forEach((item,index)=>{
        secTop[index] = item.offsetTop - 340;

        //조건문을 사용하여 해당 구간에서 요소들이 나타남 0 - 6
        if(scTop >= secTop[index] && scTop < secTop[index + 1]){
            section[index].classList.add("on");
        }
        // else if(scTop >= section[6]){

        // }
    });
    

    //만약 화면이 430px 이하라면 그냥 on 붙여놓기
    //현재 화면크기값 가져옴
    let ViewWidth = document.body.offsetWidth;

    //반복문으로 모든 구간에 클래스 on 붙이기
    section.forEach((item,index)=>{
        //430 <= 화면크기
        if(ViewWidth <= 430){
            item.classList.add("on");
        }
        // else {
        //     item.classList.remove("on");
        // }
    });
});