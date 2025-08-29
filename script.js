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
                afirmacao: "Você é uma pessoa que gosta de motor fuçadão."
            },
            {
                texto:  "motor de XRE 300",
                afirmacao: "Você é uma pessoa que nãotem bom gosto."
            }    
           
        ]
    },
    {
       
            enunciado: "Oque você busca em uma moto fuçada?",
            alternativas: [
                {
                    texto: "Velocidade.",
                    afirmacao: "Você tem estilo e adora uma corrida."
                },
                {
                    texto:  "estilo.",
                    afirmacao: "Você não tem estilo e odeia manter sua moto em bom estado."
                }    
               
            ]
        },
        {
            enunciado: "Qual desses é um piloto de racha ?",

            alternativas: [
                {
                    texto: "carlin do barrulho.",
                    afirmacao: "Você não tem cultura, ele é ator, apenas protagonizou o filme Fórmula 1."
                },
                {
                    texto:    "carlin trink.",
               
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
