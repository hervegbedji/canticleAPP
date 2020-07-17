let verseStr = "1.Dans les cieux et sur la terre, <br/>Il n’est aucun nom plus doux, <br/>Aucun que mon coeur préfère<br/>" +
    "Au nom de Christ mort pour nous.#" +
    "Refrain DOLOMITE<br/>" +
    "Quel beau nom! (bis) — <br/>porte l’Oint de l’Éternel; <br/>Quel beau nom! (bis) — <br/>que celui d’Emmanuel!#" +
    "2.Quelque grand que soit un homme, <br/>Qu’il soit prince ou qu’il soit roi, <br/>De quelque nom qu’on le nomme, <br/>" +
    "Jésus est plus grand pour moi. <br/>" +
    "Quel beau nom! etc.#" +
    "3.Les séraphins, les archanges <br/>Portent des noms glorieux, <br/>" +
    "Mais le plus beau nom des anges <br/>Pourrait-il me rendre heureux? <br/>" +
    "Quel beau nom! etc.#\n" +
    "4.Dans les maux, Jésus soulage, <br/>Il guérit l’esprit froissé, <br/>" +
    "Il ranime le courage <br/>Du coeur le plus oppressé. <br/>" +
    "Quel beau nom! etc.#" +
    "5.{De quelle joie il inonde <br/>Le coeur du pauvre pécheur! <br/>Non, il n’est rien en ce monde<br/>" +
    "De pareil à ce bonheur!} <br/>" +
    "Quel beau nom! etc";

let verseStr2 = "1.Dans les cieux et sur la terre, <br/>Il n’est fRance aucun nom plus doux, <br/>Aucun que mon coeur préfère<br/>" +
    "Au nom de Christ mort pour nous.#" +
    "Refrain<br/>" +
    "Quel beau nom! (bis) — <br/>porte l’Oint de l’Éternel; <br/>Quel beau nom! (bis) — <br/>que celui d’Emmanuel!#" +
    "2.Quelque grand que soit un homme, <br/>Qu’il soit prince ou qu’il soit roi, <br/>De quelque nom qu’on le nomme, <br/>" +
    "Jésus est plus grand pour moi. <br/>" +
    "Quel beau nom! etc.#" +
    "3.Les séraphins, les archanges <br/>Portent des noms glorieux, <br/>" +
    "Mais le plus beau nom des anges <br/>Pourrait-il me rendre heureux? <br/>" +
    "Quel beau nom! etc.#\n" +
    "4.Dans les maux, Jésus soulage, <br/>Il guérit l’esprit froissé, <br/>" +
    "Il ranime le courage <br/>Du coeur le plus oppressé. <br/>" +
    "Quel beau nom! etc.#" +
    "5.{De quelle joie il inonde <br/>Le coeur du pauvre pécheur! <br/>Non, il n’est rien en ce monde<br/>" +
    "De pareil à ce bonheur!} <br/>" +
    "Quel beau nom! etc";

let verseStr3 = "1.Dans les cieux et sur la terre, <br/>Il n’est aucun CANADA nom plus doux, <br/>Aucun que mon coeur préfère<br/>" +
    "Au nom de Christ mort pour nous.#" +
    "Refrain<br/>" +
    "Quel beau nom! (bis) — <br/>porte l’Oint de l’Éternel; <br/>Quel beau nom! (bis) — <br/>que celui d’Emmanuel!#" +
    "2.Quelque grand que soit un homme, <br/>Qu’il soit prince ou qu’il soit roi, <br/>De quelque nom qu’on le nomme, <br/>" +
    "Jésus est plus grand pour moi. <br/>" +
    "Quel beau nom! etc.#" +
    "3.Les séraphins, les archanges <br/>Portent des noms glorieux, <br/>" +
    "Mais le plus beau nom des anges <br/>Pourrait-il me rendre heureux? <br/>" +
    "Quel beau nom! etc.#\n" +
    "4.Dans les maux, Jésus soulage, <br/>Il guérit l’esprit froissé, <br/>" +
    "Il ranime le courage <br/>Du coeur le plus oppressé. <br/>" +
    "Quel beau nom! etc.#" +
    "5.{De quelle joie il inonde <br/>Le coeur du pauvre pécheur! <br/>Non, il n’est rien en ce monde<br/>" +
    "De pareil à ce bonheur!} <br/>" +
    "Quel beau nom! etc";

let tempArr = [];
let canticleObj1 = {}, canticleObj2 = {}, canticleObj3 = {}, canticleObj4 = {};

canticleObj1.number = 200;
canticleObj2.number = 320;
canticleObj3.number = 500;
canticleObj4.number = 20;
canticleObj2.verses = verseStr2;
canticleObj3.verses = verseStr3;

tempArr.push(canticleObj1, canticleObj2, canticleObj3, canticleObj4);

function giveFieldsToCanticleObj(canticleObj){
    if(!canticleObj.verses) {canticleObj.verses = verseStr}
    canticleObj.theme = "adoration generale";
    canticleObj.chorus = "Call me chorus pal";
    if(!canticleObj.number){ canticleObj.number = 307}

    return canticleObj;
}

let lyricsArr = tempArr.map((item) => giveFieldsToCanticleObj(item));

export default lyricsArr;

