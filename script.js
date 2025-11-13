let currentPage = 0;
const totalPages = 3;
const book = document.getElementById('book');

function showPage(pageIndex) {
    const rotateY = pageIndex * -180; // cada página vira 180°
    book.style.transform = `rotateY(${rotateY}deg)`;
}

// Inicializa a página
showPage(currentPage);

document.getElementById('nextBtn').addEventListener('click', () => {
    currentPage++;
    if (currentPage >= totalPages) currentPage = 0;
    showPage(currentPage);
    addFloating(document.getElementById('page' + (currentPage + 1)));
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentPage--;
    if (currentPage < 0) currentPage = totalPages - 1;
    showPage(currentPage);
    addFloating(document.getElementById('page' + (currentPage + 1)));
});

// Adiciona corações e flores aleatórios
function addFloating(page) {
    // Remove antigos
    const old = page.querySelectorAll('.floating');
    old.forEach(f => f.remove());

    const emojis = ['💖','🌸','🌼','💛','🌟','🌷','❤️'];
    for(let i=0;i<10;i++){
        const span = document.createElement('span');
        span.className = 'floating';
        span.textContent = emojis[Math.floor(Math.random()*emojis.length)];
        span.style.left = Math.random()*90 + '%';
        span.style.top = Math.random()*80 + '%';
        span.style.fontSize = (15 + Math.random()*25) + 'px';
        span.style.animationDuration = (3 + Math.random()*4) + 's';
        page.appendChild(span);
    }
}

// Inicializa emojis na primeira página
addFloating(document.getElementById('page1'));
