const homebtn = document.querySelector("#homebtn");
const aboutbtn = document.querySelector("#aboutbtn");
const projectbtn = document.querySelector("#projectbtn");
const skill = document.querySelector("#skillbtn");
const contact = document.querySelector("#contactbtn");
const menu=document.querySelector("#menu");
const sidebar=document.querySelector('.sidebar');
const cross=document.querySelector('.cross');
let btns=document.querySelectorAll('.sidebtn button');
const sidehome = document.querySelector("#sidehome");
const sideabout = document.querySelector("#sideabout");
const sideproject = document.querySelector("#sideproject");
const sideskill = document.querySelector("#sideskill");
const sidecontact = document.querySelector("#sidecontact");

menu.addEventListener("click", function (){
        sidebar.classList.toggle('active');
});
cross.addEventListener("click", function (){
    sidebar.classList.remove('active');
});
btns.forEach(btn => {
    btn.addEventListener("click", closeSidebar);
});
function closeSidebar() {
    sidebar.classList.remove('active');
}
// 
const scroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
};

homebtn.addEventListener("click", () => scroll('home'));
aboutbtn.addEventListener("click", () => scroll('about'));
projectbtn.addEventListener("click", () => scroll('project'));
skillbtn.addEventListener("click", () => scroll('skill'));
contactbtn.addEventListener("click", () => scroll('contact'));
sidehome.addEventListener("click", () => scroll('home'));
sideabout.addEventListener("click", () => scroll('about'));
sideproject.addEventListener("click", () => scroll('project'));
sideskill.addEventListener("click", () => scroll('skill'));
sidecontact.addEventListener("click", () => scroll('contact'));
let firstname = document.getElementById('Fname').value;
let lastname = document.getElementById('Lname').value;
let Email = document.getElementById('email').value;
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
let valid=true;
if (firstname === '') {
    alert("first name is required");
    valid = false;
}
if (lastname === '') {
    alert("first name is required");
    valid = false;
}
if (Email === '' || !Email.includes('@') || !Email.includes('.')) {
    alert("invalid email");
    valid = false;
}
if(valid){
    alert('Registration successful!');
}
});