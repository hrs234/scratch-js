let data = [10,12,17,11,10];
let result = [];

let processSum = (data = [], except = 0) => {
    let sum = 0;
    data.map((val, idx) => {
        if (except != idx) {
            sum += val;
        }
    })
    return sum;
}

let minMax = (data = []) => {
    let saveMax = 0;
    let saveMin = 0;
    data.map((val) => {
        if (saveMax <= val) {
            saveMax = val;
        }
    })

    data.map((val) => {
        if (saveMin >= val) {
            saveMin = val
        } else if (saveMin == 0) {
            saveMin = val
        }
    })

    return [saveMin, saveMax];
}

data.map((val, idx) => {
    result.push(processSum(data, idx));
})

if (result.length > 0) {
    let minMaxRes = minMax(result);
    console.log(minMaxRes[0], minMaxRes[1]);
}
