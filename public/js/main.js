// ## EXO1
// ## Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
// let reverseNumber = (number) =>{
//     console.log(typeof number);
//     let result = number.toString().split("").reverse().join("")
//     return result
// }
// console.log(reverseNumber(317));
//#########################################################################################################################################

// #### EXO2
// ## Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// ## Qui répond "Le num x est divisible par 2 x:2 = z"
// ## Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

// let divPar2 = number => {
//     switch(number%2 == 0) {
//         case true:{
//             return `Le nombre ${number} est divisible par 2 `
//         }
//         case false:{
//             return `Le nombre ${number} n'est pas divisible par 2`;
//         }
//     }
// }
// console.log(divPar2(7));

// #### EXO3
// ## Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

// EXERCICE 3 

// const logIn = () => {
//     let count = 3
//     let mdp = prompt("Entrez un mot de passe").toLowerCase();
    
//     while (count > 0) {
//         if (mdp === 'mdp') {
//             return "Vous êtes connectés"
            
//         } else {
//             alert(`Mauvais mot de passe, vous avez encore ${count} essaie`)
//             mdp = prompt("Entrez un mot de passe").toLowerCase();
//             count--
//         }
//     }
// }

// console.log(logIn());


// console.log("____4____");
// #### EXO4
// ## Créer une function qui permet d'ajouter et de faire sortir des stagiaires d'une classe en animant la function. C-a-d demander s'il veut a chaque fois rajouter une personne si oui qui si non lui dire ouki et afficher le tableau.
// ## Avec la capture d'écran reproduisez les entrées / sorties de la classe

// // EXERCICE 4 
// // v1
// // let tab = []
// let coding20 = [];
// let rentrer = (...nom) => {  //desctruring
//     // console.log();
//     nom.forEach(el => {
//         coding20.push(el)
//     })   
//     return (`${nom} est rentré dans la classe`);

// }


// let sortir = (nom) => {
//     coding20 = coding20.filter(el => el !== nom)
//     return(`${nom} est sorti de la classe`);

// }


// console.log("____4.levelUp____");

// let boucle = true;
// while (boucle && coding20.length < 11) {
//     let stagiaire = prompt('Personne à introduire dans la coding ?')
//     let rep = prompt("Veux tu faire une action avec l'étudiant ? (oui ou non) ").toLowerCase()
//     if (rep === "oui") {
//         let choix = prompt("Veux tu ajouter ou supprimer une personne? (ajou ou supp)")
//         if (choix === "supp") {
//             if (coding20.includes(stagiaire) == true) {
//                 sortir(stagiaire)
//             } else {
//                 console.log("La personne n'existe pas, impossible de la supp");
//             }
//             console.log(coding20);

//         } else if(choix === "ajou") {
//             rentrer(stagiaire);
//             console.log(coding20);
//         } else {
//             console.log(`Méthode non reconnu`)
//         }
//     } else if (rep === "non") {
//         console.log(`D'accord voici la classe ${coding20}`)
//         boucle = false;
//     } else {
//         console.log('ERROR, reponse non reconnu')
//     }
// }

// // let coding = () => {
// //     let boucle = true;
// //         let stagiaire = prompt('Personne à introduire dans la coding ?')
// //         let rep = prompt("Veux tu faire une action avec l'étudiant ? (oui ou non) ").toLowerCase()
// //         if (rep === "oui") {
// //             let choix = prompt("Veux tu ajouter ou supprimer une personne? (ajou ou supp)")
// //             if (choix === "supp") {
// //                 if (coding20.includes(stagiaire) == true) {
// //                     coding20 = coding20.filter(el => el !== stagiaire)
// //                     console.log(`${stagiaire} est sorti de la classe`);
// //                 } else {
// //                     console.log("La personne n'existe pas, impossible de la supp");
// //                 }
// //                 console.log(coding20);

// //             } else if(choix === "ajou") {
// //                 coding20.push(stagiaire)
// //                 console.log(coding20);
// //                 console.log(`${stagiaire} est rentré dans la classe`);
// //             } else {
// //                 console.log(`Méthode non reconnu`)
// //             }

// //         } else if (rep === "non") {
// //             console.log(`D'accord voici la classe ${coding20}`)
// //             boucle = false;
// //         } else {
// //             console.log('ERROR, reponse non reconnu')
// //         }
// //     }
// // }
// // coding()
// // console.log(coding20);