const findTheOldest = function(array) {
    let oldAge = 0;
    let oldestPerson = {}
    array.forEach(person => {
        let age = 0;
        if (!("yearOfDeath" in person)) {
            age = new Date().getFullYear() - person.yearOfBirth;
        }
        else {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > oldAge) {
            oldAge = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
