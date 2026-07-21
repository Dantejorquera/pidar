window.addEventListener("scroll", function(){

    const nav = document.getElementById("nav");

    if(window.scrollY > 80){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});
// Sincronizar dots del carrusel de pilares con scroll
(function(){
    const track = document.querySelector('.metodologia-cards');
    const dots = document.querySelectorAll('.metodologia-dots .dot');
    if(!track || dots.length === 0) return;

    function updateDots(){
        const slide = track.querySelector('.col-md-6');
        if(!slide) return;
        const slideWidth = slide.offsetWidth;
        const gap = parseFloat(getComputedStyle(track).gap) || 16;
        const index = Math.round(track.scrollLeft / (slideWidth + gap));
        dots.forEach((dot, i)=>{
            dot.classList.toggle('is-active', i === Math.min(index, dots.length - 1));
        });
    }

    track.addEventListener('scroll', () => {
        clearTimeout(track._dotTimer);
        track._dotTimer = setTimeout(updateDots, 80);
    });

    // Click en dot → scrollear a esa card
    dots.forEach((dot)=>{
        dot.addEventListener('click', ()=>{
            const i = parseInt(dot.dataset.index, 10);
            const slides = track.querySelectorAll('.col-md-6');
            if(slides[i]){
                slides[i].scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
            }
        });
    });

    // Init
    updateDots();
})();
