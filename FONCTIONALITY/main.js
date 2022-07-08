// Modal script
let modal = document.getElementById('contact-modal'),
    openModal = document.getElementById('modal-open'),
    closeModal = document.querySelector ('.close-modal');

openModal.addEventListener('click', function (){
    modal.style.display = 'block';
})

closeModal.addEventListener('click', function (){
    modal.style.display = 'none'
})
window.addEventListener('click', function(e){
    if(e.target == modal){
        modal.style.display= 'none';
    }
});
// nav bar script
window.addEventListener("scroll", function(){
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0)
});
//icon annim
window.addEventListener("click", annIcon)
function annIcon(){
    var icon = document.querySelectorAll("p")
    icon[0].innerHTML = "+243975051133";
    icon[1].innerHTML = "+257621757"
    icon[2].innerHTML = "ilungavictorien@gmail.com";

    icon.style.color = "#FFF"
    console.log("hello world");
}