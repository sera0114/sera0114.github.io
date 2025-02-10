document.addEventListener("DOMContentLoaded",function(){
    const best1 = document.querySelectorAll(".best1");
    const best7 = document.querySelectorAll(".best7");

    const recommended1 = document.querySelectorAll(".recommended1");
    const recommended7 = document.querySelectorAll(".recommended7");

    const bullet1 = document.querySelector("#class > div:nth-of-type(1) > button:nth-of-type(1)");
    const bullet2 = document.querySelector("#class > div:nth-of-type(1) > button:nth-of-type(2)");
    const bullet3 = document.querySelector("#class > div:nth-of-type(2) > button:nth-of-type(1)");
    const bullet4 = document.querySelector("#class > div:nth-of-type(2) > button:nth-of-type(2)");

    bullet1.addEventListener("click",function(){
        bullet1.style.backgroundColor = "#f5da52";
        bullet1.style.width = "65px";
        bullet1.style.transitionDuration = "400ms";
        bullet2.style.backgroundColor = "#5f5a57";
        bullet2.style.width = "20px";

        best1.forEach(function(item){
            item.classList.remove("hidden");
        });
        best7.forEach(function(item){
            item.classList.add("hidden");
        });
    });

    bullet2.addEventListener("click",function(){
        bullet2.style.backgroundColor = "#f5da52";
        bullet2.style.width = "65px";
        bullet2.style.borderRadius = "50px";
        bullet2.style.transitionDuration = "400ms";
        bullet1.style.backgroundColor = "#5f5a57";
        bullet1.style.width = "20px";

        best7.forEach(function(item){
            item.classList.remove("hidden");
        });
        best1.forEach(function(item){
            item.classList.add("hidden");
        });
    });

    bullet3.addEventListener("click",function(){
        bullet3.style.backgroundColor = "#f5da52";
        bullet3.style.width = "65px";
        bullet3.style.transitionDuration = "400ms";
        bullet4.style.backgroundColor = "#5f5a57";
        bullet4.style.width = "20px";

        recommended1.forEach(function(item){
            item.classList.remove("hidden");
        });
        recommended7.forEach(function(item){
            item.classList.add("hidden");
        });
    });

    bullet4.addEventListener("click",function(){
        bullet4.style.backgroundColor = "#f5da52";
        bullet4.style.width = "65px";
        bullet4.style.borderRadius = "50px";
        bullet4.style.transitionDuration = "400ms";
        bullet3.style.backgroundColor = "#5f5a57";
        bullet3.style.width = "20px";

        recommended7.forEach(function(item){
            item.classList.remove("hidden");
        });
        recommended1.forEach(function(item){
            item.classList.add("hidden");
        });
    });
});