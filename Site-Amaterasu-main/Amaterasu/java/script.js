const darkmode = document.getElementById("darkmode");
darkmode.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);

});


//   all ------------------
function initParadoxWay() {
    "use strict";
   
    if ($(".testimonials-carousel").length > 0) {
        var j2 = new Swiper(".testimonials-carousel .swiper-container", {
            preloadImages: false,
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            grabCursor: true,
            mousewheel: false,
            centeredSlides: true,
            pagination: {
                el: '.tc-pagination',
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.listing-carousel-button-next',
                prevEl: '.listing-carousel-button-prev',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 3,
                },
                
            }
        });
    }
    
// bubbles -----------------
    
    
    setInterval(function () {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 4000, function () {
            $(this).remove()
        });
    }, 350);
    
}

//   Init All ------------------
$(document).ready(function () {
    initParadoxWay();
});

/* ==== ANIMAÇÃO DE REVELAÇÃO DE ROLAGEM - SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.col-lg-6, .text-uppercase, .row2`, {origin:'left', interval:100})
sr.reveal(`.box-information`, {origin:'bottom', interval:100})
sr.reveal(`.col-lg`, {origin:'right'})
sr.reveal(`.container-banner, .pray, .amaterasu__id, .section-title`, {origin:'top', interval:100})




/*==================== TEMA ESCURO ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme' 
const iconTheme = 'fa-sun'

//  Tópico selecionado anteriormente (se o usuário selecionou)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class - Obtemos o tema atual da interface validando a classe dark-theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously chose a topic - Nós validamos se o usuário escolheu previamente um tópico
if (selectedTheme) {
  // Se a validação for cumprida, perguntamos qual era o problema para saber se ativamos ou desativamos o escuro
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Ative / desative o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme - Adicionar ou remover o tema escuro / ícone
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose - Salva o tema e o ícone atual que o usuário escolheu
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
