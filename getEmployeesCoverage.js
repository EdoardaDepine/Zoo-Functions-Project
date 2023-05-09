const data = require("./zoo_data");
const employees = data.employees;
const species = data.species;

function getEmployee(findEmployee) {
    return {
        id: findEmployee.id,
        fullName: `${findEmployee.firstName} ${findEmployee.lastName}`,
        species: findEmployee.responsibleFor.map((specieEmployee) => {
            return species.find((specie) => specieEmployee === specie.id).name;
        }),
        locations: findEmployee.responsibleFor.map((specieEmployee) => {
            return species.find((specie) => specieEmployee === specie.id).location;
        }),
    };
}

function getEmployeesCoverage(obj) {
    if (!obj) {
        return employees.map((employee) => {
            return getEmployee(employee);
        });
    }
    const value = Object.values(obj)[0];
    const findEmployee = employees.find(
        (employee) =>
        employee.firstName === value ||
        employee.lastName === value ||
        employee.id === value
    );
    if (!findEmployee) {
        throw new Error("Informações inválidas");
    }
    return getEmployee(findEmployee);
}