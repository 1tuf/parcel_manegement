let profile=document.getElementById("profile");

profile.addEventListener("change",(event)=>{
    if(event.target.value==="manage"){
        window.location.href="../profile/profile.html";
    }
    else if(event.target.value==="logout"){
        window.location.href="../../register/login/login.html";
    }
});