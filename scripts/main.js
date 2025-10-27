$(document).ready(function() {
    const burgerBtn = document.querySelector('.burger-btn');
    const nav = document.querySelector('.nav');

    burgerBtn.addEventListener('click', function() {
        burgerBtn.classList.toggle('active');
        nav.classList.toggle('active');
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.burger-btn, .nav').length) {
            burgerBtn.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});