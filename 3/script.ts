//Question 3

let personName = "muhaMmad haMad";

let upperCaseName = personName.toUpperCase();
let lowerCaseName = personName.toLowerCase();

function titlecase(nme){
    let temp1 = nme.split(' ')
    let temp2 = temp1.map(data => data.charAt(0).toUpperCase() + data.substr(1).toLowerCase());
    let temp3 = temp2.join(' ')
    return temp3
}

let titleCase = titlecase(personName);

console.log(upperCaseName);
console.log(lowerCaseName);
console.log(titleCase);