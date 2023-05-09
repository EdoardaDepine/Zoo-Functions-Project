const data = require("./zoo_data");

const employees = data.employees;
const species = data.species;

function getOldestFromFirstSpecies(id) {
    const employee = employees.find((employee) => employee.id === id);
    const firstSpecieEmployee = employee.responsibleFor[0];
    const specie = species.find((specie) => specie.id === firstSpecieEmployee);
    const { name, age, sex } = specie.residents.reduce((pv, cv) => {
        return pv.age > cv.age ? pv : cv;
    });
    return [name, age, sex];
}