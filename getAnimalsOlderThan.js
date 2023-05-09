const data = require("./zoo_data");
const species = data.species;

function getAnimalsOlderThan(animal, age) {
    const specie = species.find((specie) => specie.name === animal);
    return specie.residents.every((resident) => resident.age >= age);
}