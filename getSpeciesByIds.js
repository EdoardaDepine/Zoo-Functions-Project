const data = require("./zoo_data");
const species = data.species;

function getSpeciesByIds(...ids) {
    const result = ids.map((id) => {
        return species.find((specie) => {
            return specie.id === id;
        });
    });
    return result;
}