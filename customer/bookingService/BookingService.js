let weightOfParcel=document.getElementById("size");
let parcelSpeed=document.getElementById("speed");
let packagingPrefence=document.getElementById("packaging");
let paymentButton=document.querySelector(".submit-btn");

let totalCost=0;

document.getElementById("details").addEventListener("submit",(event)=>{
    event.preventDefault();
});

totalCost=totalCost+(weightOfParcel*10);

parcelSpeed.addEventListener("change",()=>{
    if(this.value==="standard"){
        totalCost+=50;
    }
    else{
        totalCost+=100;
    }
});

packagingPrefence.addEventListener("change",()=>{
    if(this.value==="standard"){
        totalCost+=5;
    }
});

paymentButton.addEventListener("click",()=>{
    console.log("somen kumar singh");
    window.location.href="./payment/payment.html";
});

