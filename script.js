Joueurs = [
    { id: 1, nom: 'Bono', numéro: 1, poste: "GK", position: "Gardien" },
    { id: 2, nom: 'Ramos', numéro: 4, poste: "MG", position: "Milieu Gouche" }
]

const btn = document.querySelector("#Btn-add");
const modaljoueur = document.querySelector("#modaljoueur")
const JoueursDispo = document.querySelector("#joueur")
const CardJoueur = document.querySelector("#CardJoueur")

btn.addEventListener("click", () => {
    modaljoueur.classList.toggle("openclose");
})


const btnColose = document.querySelector("#btnClose");
btnColose.addEventListener("click", () => {
    modaljoueur.classList.toggle("openclose");
})



function AddJoueur() {
    const cardj = document.createElement("div")
    cardj.classList.add("CardJoueur");
    
    const playertop = document.createElement("div")
    playertop.classList.add("player-top");

    const playernum = document.createElement("div")
    playernum.classList.add("player-num");

    const playerinfo= document.createElement("div")
    playerinfo.classList.add("player-info");

    const span1 = document.createElement("span")
    span1.classList.add("player-name");
    
    const span2 = document.createElement("span")
    span2.classList.add("player-post");

    playerinfo.append(span1, span2)
    playertop.append(playerinfo, playernum)

    const playerselect = document.createElement("select")
    playerselect.classList.add("player-select");

    const option1 = document.createElement("option")
    option1.textContent("Sur le banc")
    const option2 = document.createElement("option")
    option2.textContent("GB - Gardien")

    playerselect.append(option1, option2)
    

    cardj.append(playertop, playerselect)
    
}