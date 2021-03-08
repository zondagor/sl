function summ(a) {
    const x = Object.keys(a).map((key) => {
        const value = a[key];

        if (key === 'cvalue') {
            if (typeof value === 'number') return value;
            if (typeof value === 'undefined') return 2021;
            if (typeof value === 'string') {
                const num = Number(value);
                // num will be NaN if value contained some non-numeric characters
                return Number.isNaN(num) ? 2021 : num;
            }
        }
        
        // null is also an object in JS 😉️
        if (typeof value === 'object' && value !== null) return summ(value);

        return 0;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}

const a = {
    mobo: undefined,
    hello: {cvalue: 1},
    world: { cvalue: 
      { yay: { cvalue: "2" }  }
   }
}

console.log(summ(a))


