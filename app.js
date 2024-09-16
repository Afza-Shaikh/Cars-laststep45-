"use strict";
function createCar(manufacture, model, optional) {
    return Object.assign({ manufacture,
        model }, optional);
}
const myCar = createCar("toyota", "corolla", { color: "silver", year: "2004" });
console.log(myCar);
