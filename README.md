# Tachkila-Team-composition
Develop an interactive application for assembling a 4-4-2 football team, using HTML, CSS (Tailwind CSS and CSS Grid), and JavaScript (DOM). The application must be responsive and provide a fluid, clear, and intuitive interface.


# overvieu sur the project
l'application est divisée en plusieurs parties ,l'en-tête affiche le nom Tachkila, les différentes catégories de joueurs et le schéma 4-4-2. La partie gauche contient l'effectif, le nombre de joueurs et un bouton permettant d'ouvrir le formulaire d'ajou la partie principale représente le terrain et les positions disponibles. le formulaire demande le nom complet du joueur, son poste et son numéro. Les joueurs de l'effectif possèdent également une liste qui permet de choisir leur emplacement sur le terrain.

je suis utilise HTML pour organiser le contenu de la page, CSS et Tailwind CSS pour construire l'interface, et que JavaScript pour gérer les interactions. CSS Grid est utilisé pour placer précisément les différents postes sur le terrain.

## la sitution actuel
la structure visuelle du terrain et du formulaire est déjà présente,le bouton d'ajout permet d'ouvrir et de fermer la fenêtre du formulaire une première fonction JavaScript prépare aussi la création d'une carte de joueur.certaines fonctionnalités doivent encore être terminées, notamment l'enregistrement réel d'un joueur, la modification et la suppression, la mise à jour automatique du compteur et le placement dynamique des joueurs sur le terrain.

## Suivi de projet

Le projet a ete termine. le projet contient toutes les fonctionnalites necessaires, inclu l'insertion des joueurs dans un tableau, puis l'affichage de ces joueurs dans le DOM, carte par carte.
j'ai utilisé JavaScript pour créer ces cartes dynamiquement avec `document.createElement("div")`. on a une autre fonction `afficherJoueurs()` qui va parcourir tous les elements du tableau avec `forEach()` pour afficher chaque joueur dans l'interface.

j'ai aussi ajoute les fonctionnalites de modification et suppression des joueurs, en utilisant `findIndex()` pour trouver le joueur dans le tableau et `splice()` pour le supprimer.

pour l'affectation des joueurs sur le terrain, j'ai utilise les conditions `if / else if` pour verifier la position de chaque joueur. j'ai aussi utilise la methode `some()` pour vérifier si un poste est déjà occupe par un autre joueur, afin d'eviter que deux joueurs prennent le meme poste. au niveau du formulaire, j'ai ajouté une validation pour vérifier le nom, le numéro et la position du joueur. J'ai utilisé les expressions régulières (Regex) pour valider le nom et afficher des messages d'erreur si les informations sont incorrect.
j ai egalement utilise `addEventListener()` pour gerer les differents evenements comme `click`, `change` et `input`. pour la sauvegarde des donnees, j'ai utilise le `localStorage` avec `JSON.stringify()` et `JSON.parse()` pour garder les joueurs meme après l'actualisation de la page. enfin, j'ai travaille sur le responsive design avec CSS, Tailwind CSS, Flexbox, Grid et Media Queries pour adapter l'interface aux differentes tailles d'ecran.ce projet m'a permis de mieux comprendre la manipulation du DOM, les tableaux et objets JavaScript, la gestion des événements et l'organisation du code.


# les lien : 

## planification jira : 
https://lahcenaitzetta20.atlassian.net/jira/software/projects/SCRUM/boards/1?filter=&groupBy=none&atlOrigin=eyJpIjoiYTEzZjU1NGNhMGQ4NDc2MGFiN2U1OThkZjliOWU1OWEiLCJwIjoiaiJ9

## presentaion  : 
https://canva.link/3df0fgdydc8rdj4