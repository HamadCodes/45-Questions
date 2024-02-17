let Guest = ["Albert Einstein", "Nikola Tesla", "Elon Musk"]

//console.log(`${Guest[0]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[1]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[2]} I would like to invite you to have dinner with me.`)

//console.log("Albert Einstein can't make it to the dinner")

Guest[0]="jeff bezos"

//console.log(`${Guest[0]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[1]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[2]} I would like to invite you to have dinner with me.`)

//console.log("Everyone I found a bigger dinner table")

Guest.unshift("Messi")
Guest.splice(2, 0, "Thomas Addison")
Guest.push("Ronaldo")

//console.log(`${Guest[0]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[1]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[2]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[3]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[4]} I would like to invite you to have dinner with me.`)
//console.log(`${Guest[5]} I would like to invite you to have dinner with me.`)

console.log("Sorry Everyone I can only invite 2 people")

Guest.splice(0,1)
console.log("Sorry Messi I can not invite you to the dinner")

Guest.splice(0,1)
console.log("Sorry jeff bezos I can not invite you to the dinner")

Guest.splice(0,1)
console.log("Sorry Thomas Addison I can not invite you to the dinner")

Guest.splice(0,1)
console.log("Sorry Nikola Tesla I can not invite you to the dinner")

console.log("Elon Musk and Ronaldo you guys are still invited to the dinner")

Guest.splice(0,1)
Guest.splice(0,1)

console.log(Guest)

