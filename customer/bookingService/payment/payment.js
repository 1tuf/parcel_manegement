document.getElementById("payment-form").addEventListener("submit",(event)=>{
    event.preventDefault();
});

function getTrackingId(){
    let id="";
    for(let i=0;i<6;i++){
        id+=Math.floor(Math.random()*10);
    }
    return id;
}

document.getElementById("pay-amount").addEventListener("click",()=>{
    //get the details from the booking service details page and the ppayment form and reflect in the invoice;
    console.log("go for payment");
    let trackingId=getTrackingId();
    alert(`your booking id: ${trackingId}`);
    window.location.href="../invoice/invoice.html";
});