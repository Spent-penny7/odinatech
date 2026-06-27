function animate(id,target){let n=0;let e=document.getElementById(id);let i=setInterval(()=>{n+=Math.ceil(target/50);if(n>=target){n=target;clearInterval(i)}e.innerText=n;},40)}animate('c1',500);animate('c2',120);animate('c3',15);
// Select elements
const slides = document.querySelectorAll('.slide img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close-btn');

// Open lightbox when an image is clicked
slides.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  });
});

// Close lightbox when clicking the X button
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// Close lightbox when clicking anywhere outside the image
lightbox.addEventListener('click', (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove('active');
  }
});
