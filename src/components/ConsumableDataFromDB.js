import canticles_from_db from './DbConnexion.js';
import CanticleClass from '../classes/canticleClass.js';

let displayableCanticleList = canticles_from_db.map((canticleObj) => {
    let arrayOfClassFormatedCanticles = new CanticleClass(canticleObj.theme, canticleObj.number, canticleObj.chorus, canticleObj.verses);
    return arrayOfClassFormatedCanticles;
});


export default displayableCanticleList;