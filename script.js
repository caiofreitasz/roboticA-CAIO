
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let historiaFinal = "";

const perguntas = [
    {
        enunciado: "Se a Inteligência Artificial pudesse fazer todas as tarefas por você, o que faria?",
        alternativas: [
            {
                texto: "Usaria a IA para facilitar minha vida.",
                afirmacao: "Você decidiu aproveitar a tecnologia para ganhar tempo e aprender coisas novas.",
                proxima: 1
            },
            {
                texto: "Preferiria fazer as coisas sozinho.",
                afirmacao: "Você acredita que a criatividade e o esforço humano devem continuar importantes.",
                proxima: 1
            }
        ]
    },
    {
        enunciado: "Uma IA começa a tomar decisões importantes na sociedade. O que você faria?",
        alternativas: [
            {
                texto: "Confiaria na tecnologia.",
                afirmacao: "Você acredita que a IA pode ajudar a construir uma sociedade mais eficiente.",
                proxima: 2
            },
            {
                texto: "Defenderia a supervisão humana.",
                afirmacao: "Você percebeu que as decisões importantes precisam de responsabilidade humana.",
                proxima: 2
            }
        ]
    },
    {
        enunciado: "No futuro, os robôs poderão substituir muitos empregos. Qual seria sua reação?",
        alternativas: [
            {
                texto: "Aprenderia novas habilidades.",
                afirmacao: "Você decidiu se preparar para as profissões do futuro.",
                proxima: undefined
            },
            {
                texto: "Defenderia limites para a automação.",
                afirmacao: "Você acredita que o desenvolvimento tecnológico deve proteger os trabalhadores.",
                proxima: undefined
            }
        ]
    }
];

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");

        botao.textContent = alternativa.texto;

        botao.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";

    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        mostraResultado();
        return;
    }

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O futuro está em suas mãos!";
    caixaAlternativas.textContent = "";
    textoResultado.textContent = historiaFinal;

    caixaResultado.classList.add("mostrar");
}

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";

    telaInicial.classList.add("escondida");
    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}

botaoIniciar.addEventListener("click", iniciaJogo);
botaoNovamente.addEventListener("click", jogaNovamente);
