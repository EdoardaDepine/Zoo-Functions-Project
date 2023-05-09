const data = require("./zoo_data");
const species = data.species;
const allAnimalNameList = species.map((species) => species.name);
const days = data.hours;
const daysKeys = Object.keys(days);

function getAnimalsByDay(day) {
    const speciesObj = species.filter((specie) =>
        specie.availability.includes(day)
    );
    const allFilteredAnimalNameList = speciesObj.map((specie) => specie.name);
    const speciesDay = days[day];
    const obj = {
        [day]: {
            officeHour: `Open from ${speciesDay.open}am until ${speciesDay.close}pm`,
            exhibition: `${allFilteredAnimalNameList}`,
        },
    };
    if (day === "Monday") {
        return {
            [day]: {
                officeHour: `CLOSED`,
                exhibition: `The zoo will be closed!`,
            },
        };
    }
    return obj;
}

function getSchedule(parm) {
    if (!parm ||
        (!allAnimalNameList.includes(parm) && !daysKeys.includes(parm))
    ) {
        return daysKeys.reduce((pv, day) => {
            return {...pv, ...getAnimalsByDay(day) };
        }, {});
    }
    if (allAnimalNameList.includes(parm)) {
        return species.find((specie) => specie.name === parm).availability;
    }

    return getAnimalsByDay(parm);
}