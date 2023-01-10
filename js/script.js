
const botao = document.querySelectorAll('.botao-progresso');
const linhaProgresso = document.querySelectorAll('.linha-progresso');


botao.forEach((element) => {
    element.addEventListener('click', (evento) => {
        const linhaTotal = evento.target.parentNode;
        const bloco = linhaTotal.parentNode
        const textoPorcentagem = bloco.querySelector('.porcentagem-progresso');
        const linhaProgresso = linhaTotal.querySelector('.linha-progresso');

        let numero = parseInt(textoPorcentagem.textContent.slice(0, -1));

        if (evento.target.dataset.controle === '+' && numero < 100) {
            linhaProgresso.style.width = numero + 10 + '%';
            textoPorcentagem.textContent = parseInt(textoPorcentagem.textContent) + 10 + '%';

        } else if (evento.target.dataset.controle === '-' && numero > 0){
            linhaProgresso.style.width = numero - 10 + '%';
            textoPorcentagem.textContent = parseInt(textoPorcentagem.textContent) - 10 + '%';
        }

        
    })
});
