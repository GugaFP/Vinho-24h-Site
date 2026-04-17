const frases = [
  "Atendimento personalizado para cada ocasião.",
  "Escolha o vinho ideal com mais praticidade.",
  "Uma experiência mais simples, elegante e acessível.",
  "Rótulos selecionados para momentos especiais."
];

let indiceFrase = 0;
const fraseTopo = document.getElementById("fraseTopo");

setInterval(() => {
  indiceFrase = (indiceFrase + 1) % frases.length;
  fraseTopo.textContent = frases[indiceFrase];
}, 3000);

const ageGate = document.getElementById("ageGate");
const btnMaior = document.getElementById("btnMaior");
const btnMenor = document.getElementById("btnMenor");

btnMaior.addEventListener("click", () => {
  ageGate.classList.add("hidden");
});

btnMenor.addEventListener("click", () => {
  alert("Você precisa ter mais de 18 anos para acessar este site.");
});

const perguntas = document.querySelectorAll(".faq-question");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const resposta = pergunta.nextElementSibling;

    if (resposta.style.display === "block") {
      resposta.style.display = "none";
    } else {
      resposta.style.display = "block";
    }
  });
});