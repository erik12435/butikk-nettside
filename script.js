
/* Liste med produkter */
let produkter = [
    { navn: "Fotball", pris: 299 },
    { navn: "Fotballsko", pris: 899 },
    { navn: "Leggbeskyttere", pris: 149 },
    { navn: "Keeperhansker", pris: 399 }
];

/* Handlekurven starter tom */
let handlekurv = [];

/* Legger en vare i handlekurven */
function leggIKurv(navn, pris) {
    handlekurv.push({ navn: navn, pris: pris });
    visHandlekurv();
}

/* Viser handlekurven */
function visHandlekurv() {
    let liste = document.getElementById("kurvliste");
    let antall = document.getElementById("antall");
    let total = document.getElementById("total");

    liste.innerHTML = "";
    let sum = 0;

    /* Går gjennom alle varene */
    for (let i = 0; i < handlekurv.length; i++) {
        let vare = handlekurv[i];
        sum = sum + vare.pris;

        let punkt = document.createElement("li");
        punkt.textContent = vare.navn + " - " + vare.pris + " kr";

        liste.appendChild(punkt);
    }

    /* Viser melding hvis kurven er tom */
    if (handlekurv.length == 0) {
        liste.innerHTML = "<li>Handlekurven er tom.</li>";
    }

    antall.textContent = handlekurv.length;
    total.textContent = sum;
}

/* Tømmer handlekurven */
function tomKurv() {
    handlekurv = [];
    visHandlekurv();
}
