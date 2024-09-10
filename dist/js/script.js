// Navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};

// nav samping
const navkanan = document.querySelector('#navkanan');
const navMenu = document.querySelector('#nav-menu');

navkanan.addEventListener('click', function () {
    navkanan.classList.toggle('navkanan-active');
    navMenu.classList.toggle('hidden');
});