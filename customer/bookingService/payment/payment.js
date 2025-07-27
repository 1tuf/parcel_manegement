document.getElementById("payment-form").addEventListener("submit",(event)=>{
    event.preventDefault();
});

document.getElementById("pay-amount").addEventListener("click",()=>{
    //get the details from the booking service details page and the ppayment form and reflect in the invoice;
    console.log("go for payment");
    window.location.href="../invoice/invoice.html";
});