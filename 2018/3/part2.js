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

const traversePatchAndDoThings = (patch, condition) => true;

const nonOverlappingPatches = patches => {
    let fabric = new Set();
    let overlappingFabric = new Set();
    let nonOverlappingPatches = [];
    patches.map(patch => {
        for(let x = patch.coords.x; x < (patch.coords.x + patch.area.width); x++) {
            for(let y = patch.coords.y; y < (patch.coords.y + patch.area.length); y++) {
                const location = x + 'x' + y;
                if (fabric.has(location)) {
                    overlappingFabric.add(location);
                    overlappingPatch = true;
                } else {
                    fabric.add(location);
                }
            }
        }
    })
    patches.map(patch => {
        let overlappingPatch = false;
        for(let x = patch.coords.x; x < (patch.coords.x + patch.area.width); x++) {
            for(let y = patch.coords.y; y < (patch.coords.y + patch.area.length); y++) {
                const location = x + 'x' + y;
                if (overlappingFabric.has(location)) {
                    overlappingPatch = true;
                }
            }
        }
        if (!overlappingPatch) {
            nonOverlappingPatches.push(patch);
        }
    })
    return nonOverlappingPatches;
}

console.log('Non-overlapping patch', nonOverlappingPatches(transformData(readData('testData.txt'))));