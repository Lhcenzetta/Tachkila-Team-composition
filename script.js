const btn = document.querySelector("#Btn-add");
modaljoueur = document.querySelector("#modaljoueur")
btn.addEventListener("click", () => {
    modaljoueur.classList.toggle("openclose");
})


const btnColose = document.querySelector("#btnClose");
btnColose.addEventListener("click", () => {
    modaljoueur.classList.toggle("openclose");
})

