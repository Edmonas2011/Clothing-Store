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

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const footer = document.querySelector('footer');
    const buttons = document.querySelectorAll('button');
    const modals = document.querySelectorAll('.modal');
    const modalContents = document.querySelectorAll('.modal-content');
    const closeBtns = document.querySelectorAll('.close-btn');
    const nav = document.querySelectorAll('.nav');

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        sections.forEach(section => section.classList.add('dark-mode'));
        footer.classList.add('dark-mode');
        buttons.forEach(button => button.classList.add('dark-mode'));
        modals.forEach(modal => modal.classList.add('dark-mode'));
        modalContents.forEach(content => content.classList.add('dark-mode'));
        closeBtns.forEach(btn => btn.classList.add('dark-mode'));
        toggleButton.classList.add('fa-sun');
        toggleButton.classList.remove('fa-moon');
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        sections.forEach(section => section.classList.toggle('dark-mode'));
        footer.classList.toggle('dark-mode');
        buttons.forEach(button => button.classList.toggle('dark-mode'));
        modals.forEach(modal => modal.classList.toggle('dark-mode'));
        modalContents.forEach(content => content.classList.toggle('dark-mode'));
        closeBtns.forEach(btn => btn.classList.toggle('dark-mode'));

        if (body.classList.contains('dark-mode')) {
            toggleButton.classList.add('fa-sun');
            toggleButton.classList.remove('fa-moon');
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.classList.add('fa-moon');
            toggleButton.classList.remove('fa-sun');
            localStorage.removeItem('theme');
        }
    });
});

const preloader = document.getElementById('preloader');

preloader.style.display = 'flex';

setTimeout(() => {
    preloader.style.display = 'none';
}, 1500);


AOS.init({
    disable: 'mobile',
    delay: 300,
    duration: 700
})

jQuery(document).ready(function($){
    $.iMissYou({
        title: "Go back to site!",
        favicon: {
            enabled: true,
            src:'./images/iMissYouFavicon.ico'
        }
    });
});
