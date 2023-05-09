const data = require("./zoo_data");
const employees = data.employees;

function getEmployeeByName(employeeName) {
    const result = employees.find((employee) => {
        if (
            employee.firstName === employeeName ||
            employee.lastName === employeeName
        ) {
            return employee;
        }
    });
    return result ? result : {};
}