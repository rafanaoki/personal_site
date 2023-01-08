
botao = document.querySelectorAll('.botao-progresso');

botao.forEach((element) => {
    element.addEventListener('click', (evento) => {
        let linhaTotal = evento.target.parentNode;
        let bloco = linhaTotal.parentNode
        let textoPorcentagem = bloco.querySelector('.porcentagem-progresso');
        let linhaProgresso = linhaTotal.querySelector('.linha-progresso');
        let largura = parseInt(linhaProgresso.clientWidth);

        if (evento.target.dataset.controle === '+' && largura <= 405) {
            largura += 45;
            textoPorcentagem.textContent = parseInt(textoPorcentagem.textContent) + 10 + '%';

        } else if (evento.target.dataset.controle === '-' && largura > 0){
            largura -= 45;
            textoPorcentagem.textContent = parseInt(textoPorcentagem.textContent) - 10 + '%';
        }

        linhaProgresso.style.width = largura + 'px';

    })
});
