const zones = document.querySelectorAll(".zone");

zones.forEach(zone=>{
    zone.addEventListener("click",()=>{
        alert("You selected zone: " + zone.innerText);
    });
});




function login(){
    window.location.href = "home.html";
}

