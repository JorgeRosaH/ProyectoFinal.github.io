/*-------------ScrollReveal-------------*/
/*ScrollReveal({ reset: true });*/

window.sr = ScrollReveal();

sr.reveal('.recetas h1',
{
    duration:1000,
    origin:'bottom',
    distance:'200px'
});
sr.reveal('.boton12',
{
    duration:1000,
    origin:'bottom',
    distance:'200px'
});
sr.reveal('.cardBox',
{
    duration:1000,
    origin:'bottom',
    
});
sr.reveal('.r1',
{
    duration:1000,
    origin:'top',
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
    duration:1000,
    origin:'bottom'
    ,
    distance:'100px'
    
});
sr.reveal('h1',
{
    duration:1000,
    origin:'top',
    
});
sr.reveal('h3',
{
    duration:1500,
    origin:'top'
    
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


function calcular()
{
    var altura=document.getElementById('altura').value
    var peso=document.getElementById('peso').value
    var IMC=(peso)/(altura*altura)
    if (IMC<16)
    {
    document.getElementById('resp').innerHTML=('Su indice de masa corporal es:'+' '+IMC+'<br>'+'Su estado es: Infra Peso')
    }
    if (IMC<25 && IMC>18)
    {
    document.getElementById('resp').innerHTML=('Su indice de masa corporal es:'+' '+IMC+'<br>'+'Su estado es: Peso Normal')
    }
    if (IMC<30 && IMC>25)
    {
    document.getElementById('resp').innerHTML=('Su indice de masa corporal es:'+' '+IMC+'<br>'+'Su estado es: Sobre Peso')
    }
    if (IMC<35 && IMC>30)
    {
    document.getElementById('resp').innerHTML=('Su indice de masa corporal es:'+' '+IMC+'<br>'+'Su estado es: Obesidad Leve')
    }
    if (IMC<40 && IMC>35)
    {
    document.getElementById('resp').innerHTML=('Su indice de masa corporal es:'+' '+IMC+'<br>'+'Su estado es: Obesidad Media')
    }
    if ( IMC>40)
    {
    document.getElementById('resp').innerHTML=('Su indice de masa corporal es:'+' '+IMC+'<br>'+'Su estado es: Obesidad Morbida')
    }

}