let currentPage = 0;
const pages = document.querySelectorAll('.page');

function showPage(index) {
  pages.forEach((p, i) => {
    p.classList.remove('active', 'prev');
    if(i === index) p.classList.add('active');
    else if(i < index) p.classList.add('prev');
  });
  addFloating(pages[index]);
}

showPage(currentPage);

document.getElementById('nextBtn').addEventListener('click', () => {
  currentPage++;
  if(currentPage >= pages.length) currentPage = 0;
  showPage(currentPage);
});

document.getElementById('prevBtn').addEventListener('click', () => {
  currentPage--;
  if(currentPage < 0) currentPage = pages.length -1;
  showPage(currentPage);
});

function addFloating(page) {
  const old = page.querySelectorAll('.floating');
  old.forEach(f => f.remove());
  const emojis = ['💖','🌸','🌼','💛','🌟','🌷','❤️'];
  for(let i=0;i<15;i++){
    const span = document.createElement('span');
    span.className = 'floating';
    span.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    span.style.left = Math.random()*90 + '%';
    span.style.top = Math.random()*80 + '%';
    span.style.fontSize = (20 + Math.random()*25) + 'px';
    span.style.animationDuration = (3 + Math.random()*4) + 's';
    page.appendChild(span);
  }
        }
