function createCar(manufacturer, model, color, year) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        color:color,
        year: year
    }

    return car;
}

let myCar = createCar('Toyota', 'Camry', 'blue', 2023);

console.log(myCar);
