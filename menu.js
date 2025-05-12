document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.querySelector('#btnMenu');
    const menu = document.querySelector('.menu');

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('show');

        if (menu.classList.contains('show')) {
            btnMenu.setAttribute('class', 'fa-solid fa-xmark'); // Ícone de fechar
        } else {
            btnMenu.setAttribute('class', 'fa-solid fa-bars'); // Ícone de abrir
        }
    });
}); 

const btnAbrirCampoSearch = document.querySelector('#btnAbrirCampoSearch')

btnAbrirCampoSearch.addEventListener('click',()=>{
    const overlay = document.querySelector('.overlay')

    overlay.style.display = 'block';
})

function fecharCampo(){
    const overlay = document.querySelector('.overlay');

    overlay.style.display = 'none';
}