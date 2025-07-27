const submitBtn=document.getElementById("submit");
const registerForm=document.querySelector(".register")
const successMsg=document.querySelector(".success");
const registrationDone=document.querySelector(".registerDone");
const regex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;


// let arr=[
//     {
//         name:"somen singh",
//         email:"singhsomen2401@gmail.com",
//         mob:"6299327220",
//     },
//     {
//         name:"somen",
//         email:"singhsomen2401@gmail.com",
//         mob:"6299327220",
//     },
//     {
//         name:"somen kumar singh",
//         email:"singhsomen2401@gmail.com",
//         mob:"6299327220",
//     },
// ];

function generateUsername(name){
    for(let i=0;i<3;i++){
        name=name+Math.floor(Math.random()*10);
    }
    return name;
}

function screenForSuccessRegistration(name,username,email){
    const displayName=document.getElementById("displayName");
    const displayUsername=document.getElementById("displayUsername");
    const displayEmail=document.getElementById("displayEmail");
    const okButton=document.getElementById("okButton");

    registerForm.style.display="none";
    registrationDone.style.display="block";
    displayName.innerText=name;
    displayUsername.innerText=username;
    displayEmail.innerText=email;

    okButton.addEventListener("click",()=>{
        window.location.href="../login/login.html";
    });

}

function storeDataToLocalStorage(name,username,email,countryCode,number,password){
    const customerData={
        name:name,
        username:username,
        email:email,
        mobile:countryCode+number,
        password:password,
    };

    let existingData = JSON.parse(localStorage.getItem("allUser")) || [];
    existingData.push(customerData);

    localStorage.setItem("allUser", JSON.stringify(existingData));

}

submitBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let countryCode=document.getElementById("countryCode").value;
    let number=document.getElementById("number").value;

    let password=document.getElementById("password").value;
    let confrimPassowrd=document.getElementById("confirmPassword").value;
    if(!name || !email || !number || !password || !confrimPassowrd){
        alert("fill all fields");
        return;
    }


    if(!regex.test(password)){
        alert("password is weak! password shpuld contain one uppercase one lowercase one special cahreter.");
        return;
    }

    if(password!==confrimPassowrd){
        alert("password not matched");
        return;
    }
    registerForm.style.display="none";

    const username=generateUsername(name);
    // console.log("hii somen");
    // console.log(username);


    screenForSuccessRegistration(name,username,email);
    storeDataToLocalStorage(name,username,email,countryCode,number,password);

});