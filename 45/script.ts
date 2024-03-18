function createCar(manufacturer, model, color, year,...more) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        color:color,
        year: year
    }
    more.forEach(([a,b]) => car[a]=b)

    return car;
}

let myCar = createCar('Toyota', 'Camry', 'blue', 2023,["Speed","100km/h"],["RearCamera",true]);

console.log(myCar);
