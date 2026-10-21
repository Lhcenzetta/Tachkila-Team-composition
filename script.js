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



// function AddJoueur() {
//     const 
// }

