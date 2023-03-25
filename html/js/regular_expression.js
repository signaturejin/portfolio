const inputTag = document.querySelectorAll(".input_wrap .input");
const repassTag = document.querySelector(".input_wrap .repass");
const msg = document.querySelectorAll(".input_wrap .msg_box");
const reMsg = document.querySelector(".input_wrap .re_msg_box");
const joinBtn = document.querySelector("#join_btn");

let dataList = [
    {
        //아이디
        validation: /^(?=.*[a-zA-z])(?=.*[0-9]).{5,10}$/,
        okmsg: "ok!",
        nomsg: "영어 대소문자 및 숫자 0~9를 혼합하여 작성해주세요. 글자수 5~10까지 입력가능합니다.",
        check: false
    },
    {
        //비밀번호
        validation: /^(?=.*[a-zA-z])(?=.*[!$_])(?=.*[0-9]).{5,15}$/,
        okmsg: "ok!",
        nomsg: "영어 대소문자 및 특수문자 !,$,_, 숫자 0~9를 혼합하여 작성해주세요.\n글자수 5~15까지 입력가능합니다.",
        check: false
    },
    {
        //이름
        validation: /^[ㄱ-힣]{2,4}$/,
        okmsg: "ok!",
        nomsg: "올바르게 작성했는지 다시 확인해주세요.",
        check: false
    },
    {
        //이메일
        validation: /^[\w\!\@\$]+\@+[a-z]+\.+[a-z]{2,3}$/,
        okmsg: "ok!",
        nomsg: "이메일 형식에 맞게 작성하였는지 다시 확인해주세요.",
        check: false
    },
    {
        //전화번호
        validation: /^(010)\-\d{3,4}\-\d{3,4}$/,
        okmsg: "ok!",
        nomsg: "010-0000-0000 형식으로 입력해주세요.",
        check: false
    }
];

//인풋태그에 키보드를 누를때마다 형식에 맞는 값인지 확인
inputTag.forEach(function(item,index){
    item.addEventListener("keyup",function(){

        let inputValue = item.value;
        let inputCheck = dataList[index].validation.test(inputValue);

        if(inputCheck){
            item.style.border = "2px solid green";
            msg[index].innerHTML = dataList[index].okmsg;
            msg[index].style.color = "green";
            dataList[index].check = true;
        }
        else {
            item.style.border = "2px solid red";
            msg[index].innerHTML = dataList[index].nomsg;
            msg[index].style.color = "red";
            dataList[index].check = false;
        }
    });
});

//비밀번호값과 비밀번호 재확인값이 같은지 확인
repassTag.addEventListener("focus",function(){
    repassTag.addEventListener("keyup",function(){

        //비밀번호재확인을 위한 변수
        let repassCheck = false;

        let repassValue = repassTag.value;
        let passvalue = inputTag[1].value;

        if(repassValue == passvalue){
            repassTag.style.border = "2px solid green";
            reMsg.innerHTML = "위 비밀번호와 일치합니다.";
            reMsg.style.color = "green";
            repassCheck = true;
        }
        else {
            repassTag.style.border = "2px solid red";
            reMsg.innerHTML = "위 비밀번호와 일치하지않습니다.";
            reMsg.style.color = "red";
            repassCheck = false;
        }
    });
});

joinBtn.addEventListener("click",function(e){
    
    let finalCheck = dataList.every(element => element.check == true);

    if(finalCheck){
        if(repassCheck){
            
        }
        else {
            e.preventDefault();
            alert("형식에 맞게 작성해주세요.");
        }
    }
    else {
        e.preventDefault();
        alert("형식에 맞게 작성해주세요.");
    }
});