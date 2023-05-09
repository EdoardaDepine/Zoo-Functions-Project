const data = require("./zoo_data");

const locationsRepeated = data.species.reduce((pv, cv) => {
    return [...pv, cv.location];
}, []);
const locations = [...new Set(locationsRepeated)];

const test = {
    includesName: true,
    sorted: true,
};

function getAnimalByLocation(locationParm) {
    const speciesList = data.species.filter(
        (specie) => specie.location === locationParm
    );
    return speciesList.map((specie) => specie.name);
}

function getSpecieNameAndResidentsName(locationParm) {
    const speciesList = data.species.filter(
        (specie) => specie.location === locationParm
    );
    return speciesList.reduce((pv, { name, residents }) => {
        return {
            ...pv,
            [name]: residents.map((resident) => resident.name),
        };
    }, {});
}

function getAnimalMap(parm) {
    if (!parm) {
        return locations.reduce((pv, cv) => {
            return {
                ...pv,
                [cv]: getAnimalByLocation(cv),
            };
        }, {});
    }
    if ("includesName" in parm && parm.includesName) {
        return locations.reduce((pv, cv) => {
            return {
                ...pv,
                [cv]: getSpecieNameAndResidentsName(cv),
            };
        }, {});
    }
}