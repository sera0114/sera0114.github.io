
// 메뉴
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#menu img");

    function checkIfInView() {
        images.forEach((img, index) => {
            const rect = img.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;

            if (isInView && img.style.opacity === '0') {
                setTimeout(() => {
                    img.style.opacity = 1; 
                    img.style.transform = "translateX(0)"; 
                    img.style.transition = "transform 2s ease, opacity 1s ease"; 
                }, index * 300); 
            }
        });
    }

    window.addEventListener("scroll", checkIfInView);

    images.forEach((img, index) => {
        img.style.opacity = 0; 
        img.style.transition = "transform 2s ease, opacity 1s ease"; 

        // 이미지가 처음 화면에 보일 때, 각 이미지가 다르게 이동하도록 설정
        if (index % 2 === 0) {
            img.style.transform = "translateX(-100%)";
        } else {
            img.style.transform = "translateX(100%)"; 
        }
    });

    checkIfInView();
});




// 인스타그램
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("#instagram > div > div > img");
    let imageQueue = Array.from(images);
    let revealedImages = new Set();

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]; 
        }
    }

    function revealImage(img, delay) {
        setTimeout(() => {
            img.style.opacity = 1; 
            img.style.transform = "scale(1)";
        }, delay);
    }

    function checkIfInView() {
        let delay = 0;
        imageQueue.forEach((img) => {
            const rect = img.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

            if (isInView && !revealedImages.has(img)) {
                img.style.opacity = 0; 
                img.style.transition = "transform 1s ease, opacity 1s ease"; 
                img.style.transform = "scale(0)"; 
                
                revealImage(img, delay); 
                revealedImages.add(img); 
                delay += 400; 
            }
        });
    }

    window.addEventListener("scroll", checkIfInView);

    shuffleArray(imageQueue);  

    imageQueue.forEach((img) => {
        img.style.opacity = 0; 
        img.style.transform = "scale(0)"; 
    });

    checkIfInView();
});


