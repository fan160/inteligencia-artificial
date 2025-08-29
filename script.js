const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual motor de moto e mais resistente para fuça?",
        alternativas: [
            {
                texto: "motor de 150",
                afirmacao: "Você é uma pessoa que gosta de conforto e marcha automática."
            },
            {
                texto:  "motor de XRE 300",
                afirmacao: "Você é uma pessoa com bom gosto, gosta do clássico atemporal."
            }    
           
        ]
    },
    {
       
            enunciado: "Oque você busca em um carro?",
            alternativas: [
                {
                    texto: "Velocidade, conforto e estética.",
                    afirmacao: "Você tem estilo e adora uma corrida."
                },
                {
                    texto:  "Modernidade, conforto e simplicidade.",
                    afirmacao: "Você não tem estilo e odeia manter seu carro em bom estado."
                }    
               
            ]
        },
        {
            enunciado: "Qual desses é um piloto de carros de corrida?",

            alternativas: [
                {
                    texto: "Brad Pitt.",
                    afirmacao: "Você não tem cultura, ele é ator, apenas protagonizou o filme Fórmula 1."
                },
                {
                    texto:    "Niki Lauda.",
               
                    afirmacao: "Parabéns, você tem cultura."
                }    
               
            ]
        },
]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();
