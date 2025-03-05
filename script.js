const mobile = document.querySelector('.menu-toggle');
const mobilelink = document.querySelector('.sidebar')

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobilelink.classList.toggle("active")
})