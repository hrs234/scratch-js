let data = [1,2,3,[5], [10, 11, [13]]];

let flatten = data.flat(Infinity);
console.log("before flatten = ", data);
console.log("after flatten = ", flatten);

let manualFlat = (data = [], hasArray = false) => {
    let save = [];

    // extract
    data.map((val, idx) => {
        if (Array.isArray(val)) {
            save = save.concat(val);
        } else {
            save.push(val);
        }
    });

    // check the save item has array or not
    save.map((checkSaveVal) => {
        if (Array.isArray(checkSaveVal)) {
            hasArray = true;
        }
    })

    // recurse if they has array
    if (hasArray) {
        manualFlat(save, false);
    } else {
        console.log("after manual flat : ",save);
    }
}

manualFlat(data);