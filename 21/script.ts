let languages = ["urdu","english","french","spainish","japanese"]

class people{
    
    name:string
    language:string
    nationality:string
    
    constructor(Name:string,Language:string,Nationality:string){
        
        this.name=Name
        this.language=Language
        this.nationality=Nationality
    }
    
}

let person1 = new people("waseem",languages[0],"pakistani")
let person2 = new people("jon",languages[1],"american")
let person3 = new people("louis",languages[2],"french")
let person4 = new people("diego",languages[3],"spainish")
let person5 = new people("sukasa",languages[4],"japanese")

console.log(`${person1.name} is ${person1.nationality} and speaks ${person1.language}`)
console.log(`${person2.name} is ${person2.nationality} and speaks ${person2.language}`)
console.log(`${person3.name} is ${person3.nationality} and speaks ${person3.language}`)
console.log(`${person4.name} is ${person4.nationality} and speaks ${person4.language}`)
console.log(`${person5.name} is ${person5.nationality} and speaks ${person5.language}`)
