const loginBtn=document.getElementById("login");
const username=document.getElementById("username");
const password=document.getElementById("password");
loginBtn.addEventListener('click',(event)=>{
    event.preventDefault();
    // need to validate the data from the rigister array need to use local storage
    const customerData=JSON.parse(window.localStorage.getItem("allUser"));
    console.log(customerData);
    const data=customerData.find((element)=>{
        if(element.username===username.value){
            if(element.password===password.value){
                console.log("hello somen singh");
                window.location.href="../../customer/home/home.html";
                return element;
            }
            else{
                alert("wrong password!");
            }
        }
    });
    if(!data){
        alert("Register now!");
    }
});