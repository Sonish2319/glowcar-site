// Simple interactive bits: color switcher, form handler
const carBody = document.getElementById('carBody');
const colorSelect = document.getElementById('colorSelect');
const thumbs = document.querySelectorAll('.thumb');
const testDriveBtn = document.getElementById('testDriveBtn');
const contactForm = document.getElementById('contactForm');


function setCarColor(color){
if(!carBody) return;
carBody.setAttribute('fill', color);
}


colorSelect?.addEventListener('change', e => setCarColor(e.target.value));


thumbs.forEach(t => t.addEventListener('click', () => setCarColor(t.dataset.color)));


testDriveBtn?.addEventListener('click', () => alert('Thanks — we will contact you to arrange a test drive.'));


contactForm?.addEventListener('submit', e => {
e.preventDefault();
// simple client-side submission demo
alert('Thanks for contacting GlowCar! (Demo only)');
contactForm.reset();
});


// Initialize default color
setCarColor(colorSelect?.value || '#3498db');