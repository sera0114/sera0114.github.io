// svg 애니메이션

document.addEventListener('DOMContentLoaded', function () {
    const path = document.querySelector('#path');
    const circle = document.querySelector('#circle');
    const pathLength = path.getTotalLength();
    const svg = document.querySelector('svg');
  
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;
    circle.style.opacity = 0;
  
    function checkScroll() {
      const svgTop = svg.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (svgTop <= windowHeight / 1.8) {
        path.animate([
          { strokeDashoffset: pathLength }, 
          { strokeDashoffset: 0 }            
        ], {
          duration: 3000,  
          easing: 'ease-in-out', 
          fill: 'forwards'
        });
  
        circle.animate([
          { opacity: 0 },  
          { opacity: 1 }  
        ], {
          duration: 400,  
          easing: 'ease-in-out',  
          fill: 'forwards'  
        });
  
        window.removeEventListener('scroll', checkScroll);
      }
    }
  
    window.addEventListener('scroll', checkScroll);
  });

  // 층별 안내 클릭시 사진 변경

  document.addEventListener('DOMContentLoaded', function () {
    const guideItems = document.querySelectorAll('#guide li'); 
    const photos = document.querySelectorAll('#photo li'); 
  
    photos[0].style.display = 'block'; 
    guideItems[1].classList.add('active'); 
  
    guideItems.forEach(function (item, index) {
      item.addEventListener('click', function() {
        photos.forEach(function (photo) {
          photo.style.display = 'none';
        });
  
        if (index > 0) { 
          photos[index - 1].style.display = 'block'; 
        }
  
        guideItems.forEach(function (item) {
          item.classList.remove('active');
        });
        item.classList.add('active');
      });
    });
  });
  
  