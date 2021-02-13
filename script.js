window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0)

});

function menuToogle() {
    const menuToogle = document.querySelector(".menuToogle");
    menuToogle.classList.toggle('active');
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle('active');


}