const data = require("./zoo_data");
const species = data.species;

function countAnimals(obj) {
    if (!obj) {
        const result = species.reduce((pv, { name, residents }) => {
            return {
                ...pv,
                [name]: residents.length,
            };
        }, {});
        return result;
    } else {
        const specie = species.find((element) => element.name === obj.specie);
        const residents = specie.residents;

        if ("sex" in obj) {
            if (obj.sex === "female") {
                const femaleResidents = residents.filter(
                    (resident) => resident.sex === "female"
                );
                return femaleResidents.length;
            }
            if (obj.sex === "male") {
                const maleResidents = residents.filter(
                    (resident) => resident.sex === "male"
                );
                return maleResidents.length;
            }
        } else {
            return residents.length;
        }
    }
}