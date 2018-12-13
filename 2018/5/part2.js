const fs = require('fs');
const path = require('path');

const testData = 'dabAcCaCBAcCcaDA';

const readData = fileName => fs.readFileSync(path.join(__dirname, fileName), 'utf8');

const processPolymer = polymer => {
    let units = polymer.split('');
    for(let i = 0; i < units.length;) {
        const leftSibling = units[i] || '';
        const rightSibling = units[i + 1] || '';
        if ((leftSibling !== rightSibling) && (leftSibling.toLowerCase() === rightSibling.toLowerCase())) {
            units.splice(i, 2);
            i--;
        } else {
            i++;
        }
    }
    return units.length;
};

const removeUnit = (unit, polymer) => {
    const uppercaseUnit = unit.toUpperCase();
    const lowercaseUnit = unit.toLowerCase();
    return polymer.split('').map(letter => ((letter === uppercaseUnit) || (letter === lowercaseUnit)) ? '' : letter).join('');
}

const findShortestPolymer = polymer => {
    const units = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const candidatePolymers = units.map(unit => removeUnit(unit, polymer));
    const candidatePolymerLengths = candidatePolymers.map(processPolymer);
    return candidatePolymerLengths.reduce((acc, length) => (acc < length) ? acc : length);
}

// console.log('Unit count of non-reactive polymer', findShortestPolymer(testData));
console.log('Unit count of non-reactive polymer', findShortestPolymer(readData('testData.txt')));