const magicians = ["Allan Ackerman", "Harry Houdini", "David Acer", "David Abbott", "Simo Aalto"];

function make_great(array){
    for(let i=0;i<=array.length-1;i++){
        array[i] += " the great"
    }
}
make_great(magicians)

function show_magicians(array){
     for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
}}

show_magicians(magicians);