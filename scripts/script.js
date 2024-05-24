const img = document.querySelector('.current_image');
const controls = document.querySelector('.controls');

// EVENT LISTENERES
document.addEventListener('DOMContentLoaded', onLoadDocument);
controls.addEventListener('click', handlerControls);

// FUNCTIONS
function onLoadDocument() {
    slider.forEach((elem, index) => {
        const img = document.createElement('img');
        img.src = elem.slide;
        img.id = elem.id;

        if (index === 0) {
            img.className = 'active';
        }

        controls.appendChild(img);
    })
}

function handlerControls(event) {
    slider.forEach((elem, index) => {
        if (Number(event.target.id) === elem.id) {
            img.src = elem.slide;
            document.querySelector('.controls .active').classList.remove('active');
            controls.children[index].className = 'active';
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("size-guide-modal");
    const btn = document.getElementById("size-guide-btn");
    const span = document.getElementsByClassName("close-btn")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

let modal = document.getElementById("loginModal");
let btn = document.getElementById("login-icon");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

AOS.init({
    disable: 'mobile',
    delay:300,
    duration:700
})

jQuery(document).ready(function($){
    $.iMissYou({
        title: "Het ari site!",
        favicon: {
            enabled: true,
            src:'./images/iMissYouFavicon.ico'
        }
    });
});