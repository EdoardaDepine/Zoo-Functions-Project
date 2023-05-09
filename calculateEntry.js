const data = require("./zoo_data");

function countEntrants(entrants) {
    if (!entrants) {
        return 0;
    }
    if (entrants === {}) {
        return 0;
    } else {
        const childs = entrants.filter((visitant) => visitant.age < 18).length;
        const adults = entrants.filter(
            (visitant) => visitant.age >= 18 && visitant.age < 50
        ).length;
        const seniors = entrants.filter((visitant) => visitant.age >= 50).length;

        const obj = {
            child: childs,
            adult: adults,
            senior: seniors,
        };
        return obj;
    }
}

function calculateEntry(entrants) {
    const visitants = countEntrants(entrants);
    const child = Number(visitants.child * 20.99);
    const adult = Number(visitants.adult * 49.99);
    const senior = Number(visitants.senior * 24.99);
    const sum = child + adult + senior;
    return sum;
}