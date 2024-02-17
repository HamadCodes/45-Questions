let usernames =["admin","ali","john","imad"]


function hello(data){

    
    if(data == 'admin'){
        console.log("Hello admin, would you like to see a status report?")
    }
    else{
        console.log(`hello ${data}, thanks for logging in`)
    }
    
    
}

usernames.forEach(hello)