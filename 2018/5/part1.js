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
}

// console.log('Unit count of non-reactive polymer', processPolymer(testData));
console.log('Unit count of non-reactive polymer', processPolymer(readData('testData.txt')));