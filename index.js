/* criar uma variavel para armazenar o nome e a experiencia do herói */
let nomeHeroi = "Capitão Chicória";
let experienciaHeroi = 10001;
let nivelHeroi;

/* utilizar uma estrutura de decisão para apresentar o nivel do herói de acordo com sua experiência */
if (experienciaHeroi <= 1000) {
    nivelHeroi = "Ferro";
} else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (experienciaHeroi >= 5001 && experienciaHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (experienciaHeroi >= 7001 && experienciaHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
    nivelHeroi = "Ascendente";
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else if (experienciaHeroi >= 10001) {
    nivelHeroi = "Radiante";
}

/* apresentar o nome e o nivel do herói */
console.log ("O herói de nome: " + nomeHeroi + " está no nível: " + nivelHeroi);
