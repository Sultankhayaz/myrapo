function getName(){
    var myName = document.getElementById("userName").value;
    var myEmail = document.getElementById("userEmail").value;
    var myPass = document.getElementById("userPass").value;

    if(myName =="sultan" && myEmail =="sultanisonline1@gmail.com" && myPass =="0300"){
        alert("login succeful");
    }
    else{
        alert("try again");
    }

}

const signInBtn-link = document.querySelector('.signInBtn-link');

const signUpBtn-link = document.querySelector('.signUpBtn-link');

const wrapper = document.querySelector('.wrapper');

signUpBtnlink.addEventlistener('click',()=>{
    wrapper.classList.toggle('active');
})

signInBtnlink.addEventlistener('click',()=>{
    wrapper.classList.toggle('active');
})