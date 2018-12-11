const fs = require('fs');
const path = require('path');

const testData = ['#1 @ 1,3: 4x4', '#2 @ 3,1: 4x4', '#3 @ 5,5: 2x2'];

const readData = fileName => fs.readFileSync(path.join(__dirname, fileName), 'utf8').split('\n');

const transformData = data => data.map(item => {
    const splitItem = item.replace(':', '').split(' ');
    const coords = splitItem[2].split(',');
    const area = splitItem[3].split('x');
    return newPatch(splitItem[0], coords[0], coords[1], area[0], area[1]);
});

const newPatch = (id, x, y, width, length) => ({
    id,
    coords: {
        x: Number(x),
        y: Number(y)
    },
    area: {
        width: Number(width),
        length: Number(length)
    }
});


const squareInchesOfOverlappingFabric = patches => {
    let fabric = [];
    patches.map(patch => {
        for(let x = patch.coords.x; x < (patch.coords.x + patch.area.width); x++) {
            for(let y = patch.coords.y; y < (patch.coords.y + patch.area.length); y++) {
                const foundPatchIndex = fabric.findIndex(location => (location.x === x && location.y === y));
                if (foundPatchIndex === -1) {
                    fabric.push({x, y, overlap: false});
                } else {
                    fabric[foundPatchIndex].overlap = true;
                }
            }
        }
    })
    return fabric.reduce((acc, patch) => patch.overlap ? acc + 1 : acc, 0);
}

console.log('Square Inches Of Overlapping Fabric', squareInchesOfOverlappingFabric(transformData(readData('testData.txt'))));