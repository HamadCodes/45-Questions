let Guest = ["Albert Einstein", "Nikola Tesla", "Elon Musk"]

//console.log(`${Guest[0]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[1]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[2]} I would like to invite you to have dinner with me.`)

console.log("Albert Einstein can't make it to the dinner")

Guest[0]="jeff bezos"

//console.log(`${Guest[0]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[1]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[2]} I would like to invite you to have dinner with me.`)

console.log("Everyone I found a bigger dinner table")

Guest.unshift("Messi")
Guest.splice(2, 0, "Thomas Addison")
Guest.push("Ronaldo")

console.log(`${Guest[0]} I would like to invite you to have dinner with me.`)
console.log(`${Guest[1]} I would like to invite you to have dinner with me.`)
console.log(`${Guest[2]} I would like to invite you to have dinner with me.`)
console.log(`${Guest[3]} I would like to invite you to have dinner with me.`)
console.log(`${Guest[4]} I would like to invite you to have dinner with me.`)
console.log(`${Guest[5]} I would like to invite you to have dinner with me.`)

