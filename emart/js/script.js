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
    const slides = document.querySelectorAll("#container .slide");
    const leftBtn = document.querySelector("#cardevent > button:nth-of-type(1)");
    const rightBtn = document.querySelector("#cardevent > button:nth-of-type(2)");
    
    let currentPosition = 0;
    
    function updateCardPositions() {
        slides.forEach((slide, index) => {
            const card = slide.querySelector('.card');
            const info = slide.querySelector('.info');
            
            const position = (index - currentPosition) % slides.length;
            const normalizedPosition = position < 0 ? position + slides.length : position;
            
            card.style.transition = 'all 0.5s ease';
            info.style.transition = 'all 0.5s ease';
            info.style.opacity = '0';
            
            if (normalizedPosition === 0) { // 중앙 카드
                card.style.transform = 'scale(1)';
                card.style.zIndex = '3';
                card.style.top = '110px';
                card.style.left = '280px';
                card.style.right = 'auto';
                info.style.opacity = '1';
                info.style.zIndex = '3';
            } else if (normalizedPosition === 1) { // 오른쪽 첫번째 카드
                card.style.transform = 'scale(0.8)';
                card.style.zIndex = '2';
                card.style.top = '50px';
                card.style.left = 'auto';
                card.style.right = '100px';
                info.style.zIndex = '2';
            } else if (normalizedPosition === 2) { // 오른쪽 두번째 카드
                card.style.transform = 'scale(0.7)';
                card.style.zIndex = '1';
                card.style.top = '0';
                card.style.left = 'auto';
                card.style.right = '0';
                info.style.zIndex = '1';
            } else if (normalizedPosition === slides.length - 1) { // 왼쪽 첫번째 카드
                card.style.transform = 'scale(0.8)';
                card.style.zIndex = '2';
                card.style.top = '50px';
                card.style.right = 'auto';
                card.style.left = '100px';
                info.style.zIndex = '2';
            } else if (normalizedPosition === slides.length - 2) { // 왼쪽 두번째 카드
                card.style.transform = 'scale(0.7)';
                card.style.zIndex = '1';
                card.style.top = '0';
                card.style.right = 'auto';
                card.style.left = '0';
                info.style.zIndex = '1';
            } else { // 화면 밖 카드
                card.style.transform = 'scale(0.5)';
                card.style.zIndex = '0';
                card.style.top = '0';
                
                // 왼쪽 또는 오른쪽에 배치
                if (normalizedPosition > slides.length / 2) {
                    card.style.left = '-100px';
                    card.style.right = 'auto';
                } else {
                    card.style.left = 'auto';
                    card.style.right = '-100px';
                }
                info.style.zIndex = '0';
            }
        });
    }
    
    updateCardPositions();
    
    leftBtn.addEventListener('click', function() {
        currentPosition = (currentPosition - 1 + slides.length) % slides.length;
        updateCardPositions();
    });
    
    rightBtn.addEventListener('click', function() {
        currentPosition = (currentPosition + 1) % slides.length;
        updateCardPositions();
    });
    
    let autoSlideInterval;
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(function() {
            currentPosition = (currentPosition + 1) % slides.length;
            updateCardPositions();
        }, 5000); 
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    const cardEventSection = document.querySelector('#cardevent');
    cardEventSection.addEventListener('mouseenter', stopAutoSlide);
    cardEventSection.addEventListener('mouseleave', startAutoSlide);
    
    startAutoSlide();
});









