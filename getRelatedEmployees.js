const data = require("./zoo_data");

const employees = data.employees;

const isManager = (id) => {
    const managers = employees.reduce((pv, employee) => {
        return [...pv, ...employee.managers];
    }, []);
    return managers.some((manager) => manager === id);
};

const getRelatedEmployees = (managerId) => {
    if (!isManager(managerId)) {
        throw new Error("O id inserido não é de uma pessoa colaboradora gerente!");
    }
    const employeesByManager = employees.filter((employee) =>
        employee.managers.includes(managerId)
    );
    return employeesByManager.map(
        (employee) => `${employee.firstName} ${employee.lastName}`
    );
};