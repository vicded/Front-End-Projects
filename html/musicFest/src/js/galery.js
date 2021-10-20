//import imageminGifsicle = require("imagemin-gifsicle");


document.addEventListener('DOMContentLoaded',function(){
    initApp();
});

function initApp() {
    stickyNav();
    createGalery();
    scrollNav();
}


function stickyNav() {
    const navigation = document.querySelector('.header');
    const preview = document.querySelector('.preview');
    const body = document.querySelector('body');

    window.addEventListener('scroll', function(){
       

        if(preview.getBoundingClientRect().top < 0) {
            navigation.classList.add('sticky');
            body.classList.add('body-scroll');
        } else {
            navigation.classList.remove('sticky');
            body.classList.remove('body-scroll');
        }
    });

}

function scrollNav() {
    const links = document.querySelectorAll('.navegation-main a');
    console.log(links);

    links.forEach(links => {
        links.addEventListener('click', function(e) {
            e.preventDefault();

            const sectionScroll = e.target.attributes.href.value;
            const section = document.querySelector(sectionScroll);

            section.scrollIntoView({behavior: "smooth"});
            
        });
    });
}

function createGalery() {
    const galery = document.querySelector('.galery-images');
    //console.log(galery);
    for (let index = 1; index <= 12; index++) {
        const image = document.createElement('picture');
        image.innerHTML = `
        <img loading=lazy  src="../src/img/thumb/${index}.jpg" alt="festival image" >`;
        
        //console.log(image);
        image.onclick = function() {
            showImage(index);
        }

        galery.appendChild(image);
    }   
}

function showImage(id) {
    console.log('Mostrando ', id);
    const image = document.createElement('picture');
        image.innerHTML = `
        <img loading=lazy  src="../src/img/grande/${id}.jpg" alt="festival image" >
    `;
    

    //Creates overlay
    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');

    overlay.onclick = function() {
        const body = document.querySelector('body'); 
        body.classList.remove('fix-body');
        ///
        const bigImage = document.querySelector('.galery img');
        bigImage.classList.remove('big-img');

        overlay.remove();
    }

    // button to close modal window
    const closeModal = document.createElement('P');
    closeModal.textContent = 'x';
    closeModal.classList.add('bttn-close');
    closeModal.onclick = function() {
        const body = document.querySelector('body');
        body.classList.remove('fix-body');
        overlay.remove();
    }

    overlay.appendChild(closeModal)

    //injects overlay
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fix-body');

    const bigImage = document.querySelector('.galery img');
    bigImage.classList.add('big-img');

}

