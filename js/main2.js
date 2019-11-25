/*-------------ScrollReveal-------------*/
ScrollReveal({ reset: true });

window.sr = ScrollReveal();
sr.reveal('h1',
{
    duration:2000,
    origin:'bottom',
    
});
sr.reveal('.r1',
{
    duration:1000,
    origin:'bottom',
    distance:'200px'
});

sr.reveal('.img-fluid',
{
    duration:1000,
    origin:'bottom',
    distance:'100px'
});

sr.reveal('p',
{
    duration:2000,
    origin:'bottom',
    
});
sr.reveal('h2',
{
    duration:1000,
    origin:'top',
    distance:'200px'
});
sr.reveal('h3',
{
    duration:1500,
    origin:'top',
    
});
sr.reveal('iframe',
{
    duration:1000,
    origin:'bottom',
    distance:'200px'
});

$(window).scroll(function() {

    if ($(window).scrollTop() > 40) {
        $('nav').removeClass('bg-tran');
        $('nav').removeClass('navbar-dark');
        $('nav').removeClass('bg-dark');
        $('nav').addClass('navbar-light');
        $('nav').addClass('bg-light');
        
        
    } else {
        $('nav').addClass('bg-tran');
        $('nav').addClass('bg-dark');
        $('nav').addClass('navbar-dark');
        $('nav').removeClass('navbar-light');
        $('nav').removeClass('bg-light');
        
    }
});
$('.navbar-toggler').click(function() {
    if ($('.navbar-collapse').hasClass('show')) 
    {
        $('nav').addClass('bg-tran');
        $('nav').addClass('bg-dark');
        $('nav').addClass('navbar-dark');
        $('nav').removeClass('navbar-light');
        $('nav').removeClass('bg-light');

    } else {
        $('nav').removeClass('bg-tran');
        $('nav').removeClass('navbar-dark');
        $('nav').removeClass('bg-dark');
        $('nav').addClass('navbar-light');
        $('nav').addClass('bg-light');
    }
});
$('.main_h li a').click(function() {
    if ($('.navbar-collapse').hasClass('show')) {
        $('.navbar-collapse').removeClass('show');
       
    }
    
});
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});