const dob=document.querySelector("#date-of-birth");
const btncheck=document.querySelector("#checkButton");
const outputArea=document.querySelector("#output");

function onClickCheckButton(){
    console.log("Click is working");
    const birthdate=dob.value;
    var dobAsNumber=birthdate.replaceAll("-","");
    var dobReversed=dobAsNumber.split("").reverse().join("");
    if(dobAsNumber==dobReversed){
        outputArea.innerText="Wohhh !! Your Birth Day is Palindrome";
    }
    else{
        outputArea.innerText="Opps !! Your Birth Day is not Palindrome";
    }
}


btncheck.addEventListener("click",onClickCheckButton);