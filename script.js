Joueurs = [
    { id: 1, nom: 'Bono', numéro: 1, poste: "GK", position: "Gardien" },
    { id: 2, nom: 'Ramos', numéro: 4, poste: "MG", position: "Milieu" }
]
const posts = [
    "Sur le banc",
    "GB - Gardien",
    "DG - Défenseur gauche",
    "DC - Défenseur central 1",
    "DC - Défenseur central 2",
    "DD - Défenseur droit",
    "MG - Milieu gauche",
    "MC - Milieu central 1",
    "MC - Milieu central 2",
    "MD - Milieu droit",
    "BU - Buteur 1",
    "BU - Buteur 2"
];
const btn = document.querySelector("#Btn-add");
const modaljoueur = document.querySelector("#modaljoueur")
const JoueursDispo = document.querySelector("#joueur")
const CardJoueur = document.querySelector("#CardJoueur")
const save_btn = document.querySelector("#save-btn")
const btnColose = document.querySelector("#btnClose");
const annulerbtn = document.querySelector("#Annuler-btn")




function DeleteJoueur(btnDelete, cardj, player) {
    btnDelete.addEventListener("click", () => {
        const index = Joueurs.findIndex(j => j.id === player.id);
        if (index !== -1) Joueurs.splice(index, 1);
        cardj.remove();
    });
}

function AfficheJoueur(player) {
    const cardj = document.createElement("div");
    cardj.classList.add("CardJoueur");
    cardj.dataset.id = player.id;

    const playertop = document.createElement("div");
    playertop.classList.add("player-top");

    const playernum = document.createElement("div");
    playernum.classList.add("player-num");
    playernum.textContent = player.numéro;

    const playerinfo = document.createElement("div");
    playerinfo.classList.add("player-info");

    const span1 = document.createElement("span");
    span1.classList.add("player-name");
    span1.textContent = player.nom;

    const span2 = document.createElement("span");
    span2.classList.add("player-post");
    span2.textContent = player.position;

    playerinfo.append(span1, span2);

    const btnEdit = document.createElement("button");
    btnEdit.classList.add("icon-btn", "edit");
    const imgEdit = document.createElement("img");
    imgEdit.src = "icons/pen-to-square-regular.svg";
    imgEdit.alt = "Modifier";
    btnEdit.append(imgEdit);

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("icon-btn", "delete");
    const imgDelete = document.createElement("img");
    imgDelete.src = "icons/trash-can.png";
    imgDelete.alt = "Supprimer";
    btnDelete.append(imgDelete);

    playertop.append(playernum, playerinfo, btnEdit, btnDelete);

    const playerselect = document.createElement("select");
    playerselect.classList.add("player-select");

    posts.forEach(texte => {
        const option = document.createElement("option");
        option.textContent = texte;
  
        playerselect.append(option);
    });

    playerselect.value = player.poste;

    playerselect.addEventListener("change", () => {
        player.poste = playerselect.value;
    });
    cardj.append(playertop, playerselect);
    DeleteJoueur(btnDelete , cardj, player)
    modifierJouer(btnEdit , player)
    return cardj;
}

function afficherJoueurs() {
    JoueursDispo.textContent = "";
    Joueurs.forEach(joueur => {
        JoueursDispo.append(AfficheJoueur(joueur));
    });
}

function modifierJouer(btnEdit, player) {
    btnEdit.addEventListener("click", () => {
        const title = document.querySelector("#title");
        title.textContent = "Modifier le Joueur";

        modaljoueur.classList.add("openclose");

        const index = Joueurs.findIndex(j => j.id === player.id);

        let name = document.querySelector("#nomplayer");
        name.value = Joueurs[index].nom;

        let number = document.querySelector("#numplayer");
        number.value = Joueurs[index].numéro;

        const radio = document.querySelector(
            `input.post[value="${Joueurs[index].position}"]`
        );
        radio.checked = true;

        save_btn.removeEventListener("click", AjouterJoueur);

        save_btn.onclick = () => {
            let newName = name.value.trim();
            let newNumber = number.value;
            let newPost = document.querySelector('input[name="post"]:checked').value;

            Joueurs[index].nom = newName;
            Joueurs[index].numéro = newNumber;
            Joueurs[index].position = newPost;

            afficherJoueurs();

            modaljoueur.classList.remove("openclose");

            save_btn.onclick = null;
            save_btn.addEventListener("click", AjouterJoueur);
        };
    });
}

function AjouterJoueur() {
    let name = document.querySelector("#nomplayer").value.trim()
    let number = document.querySelector("#numplayer").value.trim()
    let selectedPost = document.querySelector('input[name="post"]:checked').value;
    Joueurs.push(
        {
            id: Joueurs.length + 1,
            nom: name,
            numéro: number,
            poste: "Sur le banc",
            position : selectedPost
        }
    )
    modaljoueur.classList.remove("openclose");
    afficherJoueurs();
}





afficherJoueurs();
save_btn.addEventListener("click", AjouterJoueur)

btn.addEventListener("click", () => {
    const title = document.querySelector("#title")
    title.textContent = "Ajouter le Joueur"
    modaljoueur.classList.toggle("openclose");
})

btnColose.addEventListener("click", () => {
    modaljoueur.classList.toggle("openclose");
})
annulerbtn.addEventListener("click", () => {
    modaljoueur.classList.remove("openclose")
})





// function validate() {
//     const input = document.querySelector("#nomplayer").value.trim();

//     if (input === "") {

//     }
//     else if (!/^(?=.*\d)(?=.*[@#]).{8,}$/.test(pass))
//     {
//         error.innerText = "this password is not strong";
//     }
//     else {
//     }

// }