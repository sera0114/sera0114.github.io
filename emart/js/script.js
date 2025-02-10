// banner
document.addEventListener("DOMContentLoaded", function () {
    const image1 = document.querySelector("#banner > ul > li:first-child");
    const image2 = document.querySelector("#banner > ul > li:last-child");

    const button1 = document.querySelector("#banner > button:first-child");
    const button2 = document.querySelector("#banner > button:nth-of-type(2)");

    const bullet1 = document.querySelector("#banner > div > button:nth-of-type(1)");
    const bullet2 = document.querySelector("#banner > div > button:nth-of-type(2)");

    image1.classList.add("active");
    
    button1.addEventListener("click", function () {
        image1.classList.add("active");
        image2.classList.remove("active");

        bullet1.style.backgroundColor = "#f5da52";
        bullet1.style.width = "65px";
        bullet1.style.transitionDuration = "400ms";
        bullet2.style.backgroundColor = "#5f5a57";
        bullet2.style.width = "20px";
    });

    button2.addEventListener("click", function () {
        image2.classList.add("active");
        image1.classList.remove("active");

        bullet2.style.backgroundColor = "#f5da52";
        bullet2.style.width = "65px";
        bullet2.style.borderRadius = "50px";
        bullet2.style.transitionDuration = "400ms";
        bullet1.style.backgroundColor = "#5f5a57";
        bullet1.style.width = "20px";
    });

    bullet1.addEventListener("click", function () {
        bullet1.style.backgroundColor = "#f5da52";
        bullet1.style.width = "65px";
        bullet1.style.transitionDuration = "400ms";
        bullet2.style.backgroundColor = "#5f5a57";
        bullet2.style.width = "20px";

        image1.classList.add("active");
        image2.classList.remove("active");
    });

    bullet2.addEventListener("click", function () {
        bullet2.style.backgroundColor = "#f5da52";
        bullet2.style.width = "65px";
        bullet2.style.borderRadius = "50px";
        bullet2.style.transitionDuration = "400ms";
        bullet1.style.backgroundColor = "#5f5a57";
        bullet1.style.width = "20px";

        image2.classList.add("active");
        image1.classList.remove("active");
    });
});


// 카드 혜택
document.addEventListener("DOMContentLoaded",function(){
    const card = document.querySelectorAll("#container .slide .card");
    const info = document.querySelectorAll("#container .slide .info");

    const left = document.querySelector("#cardevent > button:nth-of-type(1)");
    const right = document.querySelector("#cardevent > button:nth-of-type(2)");

});








