"use strict";
const obj = {
    mobo: undefined,
    hello: { cvalue: 1 },
    world: {
        cvalue: { yay: { cvalue: "2" } }
    }
};
function isCValueI(someInterface) {
    return someInterface.cvalue !== undefined;
}
function summ(a) {
    const x = Object.keys(a).map((key) => {
        let value = isCValueI(a) ? a.cvalue : a[key];
        if (key === 'cvalue') {
            if (typeof value === 'undefined')
                return 2021;
            if (typeof value === 'number')
                return value;
            if (typeof value === 'string') {
                const num = Number(value);
                // num will be NaN if value contained some non-numeric characters
                return Number.isNaN(num) ? 2021 : num;
            }
        }
        if (typeof value === 'object')
            return summ(value);
        return 0;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log(summ(obj));
//# sourceMappingURL=index.js.map