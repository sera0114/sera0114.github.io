// 한 페이지씩 스크롤
document.addEventListener("DOMContentLoaded", function () {
    const contents = document.getElementsByClassName('page');
    let isScrolling = false;
    let currentSectionIndex = 0;
    const pageHeight = window.innerHeight;

    window.addEventListener('wheel', function (event) {
        if (isScrolling) return; 

        isScrolling = true;
        let direction = event.deltaY > 0 ? 1 : -1;

        currentSectionIndex = Math.max(0, Math.min(contents.length - 1, currentSectionIndex + direction));

        scrollToSection(currentSectionIndex);

        setTimeout(() => {
            isScrolling = false;
        }, 600);
    });

    function scrollToSection(index) {
        const targetSection = contents[index];
        
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
});

// 1. 로딩 페이지

document.addEventListener("DOMContentLoaded",function(){
    const loading = document.querySelector("#loading > div > img");

    loading.style.transition = "none";
    loading.style.position = "absolute";
    loading.style.top = "100%";
    loading.style.left = "-100%";

    setTimeout(function(){
        loading.style.top = "0";
        loading.style.left = "0";
        loading.style.transition = "top 800ms, left 800ms";   
    }, 800);

    const text1 = document.querySelector("#loading > div > p:nth-of-type(1)");
    const text2 = document.querySelector("#loading > div > p:nth-of-type(2)");

    text1.style.opacity = 0;
    text2.style.opacity = 0;

    setTimeout(function(){
        text1.style.transition = "opacity 800ms";
        text1.style.opacity = 1;
    },2000);

    setTimeout(function(){
        text2.style.transition = "opacity 800ms";
        text2.style.opacity = 1;
    },3000);
});



// 3. 프로필 페이지

document.addEventListener("DOMContentLoaded", function(){
    const sections = document.querySelectorAll("#profile, #character, #favorite, #career");

    sections.forEach(function (section1) {
        section1.style.opacity = 0;
        section1.style.transition = "opacity 2.3s ease";
    });

    document.addEventListener("scroll", function () {
        sections.forEach(function (section1) {
            const rect1 = section1.getBoundingClientRect();
            if (rect1.top < window.innerHeight * 0.6) {
                section1.style.opacity = 1;
            }
        });
    });
});


// 4.스킬세트 페이지

// - 스킬

document.addEventListener("DOMContentLoaded", function() {
    const skillItems = document.querySelectorAll("#skill > ul > li > ul");

    function fillCircles(ul) {
        const circles = ul.querySelectorAll(".circle");
        const maxCircles = circles.length;
        let index = 0;

        const interval = setInterval(function () {
            if (index < maxCircles) {
                for (let i = 0; i <= index; i++) {
                    circles[i].style.backgroundColor = '#bbcee3';
                }
                index++;
            } else {
                clearInterval(interval);
            }
        }, 300);
    }

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const ul = entry.target;
                fillCircles(ul); 
                observer.unobserve(ul); 
            }
        });
    }, { threshold: 0.5 }); 

    skillItems.forEach(function(ul) {
        observer.observe(ul);
    });
});


// 5. 작업물 페이지

// tab
document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll("#tab-buttons > li > a");
    const tabContents = document.querySelectorAll(".tab-content");

    tabContents.forEach(function(content) {
        content.style.display = "none";
    });
    document.querySelector(".tab-content.on").style.display = "flex";

    tabButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            tabButtons.forEach(function(btn) {
                btn.classList.remove("on");
            });
            button.classList.add("on");

            tabContents.forEach(function(content) {
                content.style.display = "none";
                content.classList.remove("on");
            });

            const targetId = button.getAttribute("data-target");
            const targetContent = document.querySelector(targetId);

            targetContent.style.display = "flex"; 
            targetContent.classList.add("on"); 
        });
    });
});

// - all

document.addEventListener("DOMContentLoaded", function() {
    const image1 = document.querySelectorAll("#work > div > #all > ul > li:nth-of-type(1)");
    const image2 = document.querySelectorAll("#work > div > #all > ul > li:nth-of-type(2)");

    const bullet1 = document.querySelector("#work > div > #all > div:last-child > button:nth-child(1)");
    const bullet2 = document.querySelector("#work > div > #all > div:last-child > button:nth-child(2)");

    bullet1.addEventListener("click", function() {
        bullet1.style.backgroundColor = "#788fa6";
        bullet2.style.backgroundColor = "#bbcee3";
        image1.forEach(function(item){
            item.style.display = "block";
        });
        image2.forEach(function(item){
            item.style.display = "none";
        });
    });

    bullet2.addEventListener("click", function() {
        bullet1.style.backgroundColor = "#bbcee3";
        bullet2.style.backgroundColor = "#788fa6";
        image2.forEach(function(item){
            item.style.display = "block";
        });
        image1.forEach(function(item){
            item.style.display = "none";
        });
    });
});


// - all 슬라이드

document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector("#work > div > #all > div:nth-of-type(1)");
    const imageList = document.querySelector("#work > div > #all > div:nth-of-type(1) > #slide");
    const delay = 1500;
    const duration = 800;

    function nextImageSlide() {
        const firstChild = imageList.firstElementChild;
        firstChild.style.transitionDuration = duration + "ms";

        firstChild.style.top = "-100%";
        
        setTimeout(function() {
            firstChild.style.top = "";
            imageList.appendChild(firstChild);
        }, duration);
    }

    setInterval(nextImageSlide, delay + duration);
});

// - photoshop 슬라이드

document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector("#work > div > #photoshop > div");
    const imageList = document.querySelector("#work > div > #photoshop > div > #slide2");
    const delay = 1000;
    const duration = 800;

    function nextImageSlide() {
        const firstChild = imageList.firstElementChild;
        firstChild.style.transitionDuration = duration + "ms";

        firstChild.style.top = "-100%";
        
        setTimeout(function() {
            firstChild.style.top = "";
            imageList.appendChild(firstChild);
        }, duration);
    }

    setInterval(nextImageSlide, delay + duration);
});

// - illustrator 슬라이드

document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector("#work > div > #illustrator > div");
    const imageList = document.querySelector("#work > div > #illustrator > div > #slide3");
    const delay = 1000;
    const duration = 800;

    function nextImageSlide() {
        const firstChild = imageList.firstElementChild;
        firstChild.style.transitionDuration = duration + "ms";

        firstChild.style.top = "-100%";
        
        setTimeout(function() {
            firstChild.style.top = "";
            imageList.appendChild(firstChild);
        }, duration);
    }

    setInterval(nextImageSlide, delay + duration);
});



// 7. 리브랜딩1 : LCDC SEOUL

document.addEventListener("DOMContentLoaded", function(){
    const lcdc = document.querySelector("#lcdcseoul > div > a");
    const rebranding1 = document.querySelector("#lcdcseoul > div > div");
    
    lcdc.style.opacity = 0;
    rebranding1.style.opacity = 0;

    const lcdcSeoul = [lcdc, rebranding1];

    document.addEventListener("scroll",function(){
        lcdcSeoul.forEach(function(section2){
            const rect2 = section2.getBoundingClientRect();
            if (rect2.top < window.innerHeight * 0.8) {
                setTimeout(function(){
                    section2.style.transition = "opacity 600ms";
                    section2.style.opacity = 1;
                }, section2 === lcdc ? 800 : 1300);
            }
        });
    });
});


// 8. 리브랜딩2 : emart

document.addEventListener("DOMContentLoaded", function(){
    const mart = document.querySelector("#emart > div > a");
    const rebranding2 = document.querySelector("#emart > div > div");
    
    mart.style.opacity = 0;
    rebranding2.style.opacity = 0;

    const emart = [mart, rebranding2];

    document.addEventListener("scroll",function(){
        emart.forEach(function(section3){
            const rect3 = section3.getBoundingClientRect();
            if (rect3.top < window.innerHeight * 0.8) {
                setTimeout(function(){
                    section3.style.transition = "opacity 600ms";
                    section3.style.opacity = 1;
                }, section3 === mart ? 800 : 1300);
            }
        });
    });
});