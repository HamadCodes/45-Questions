let usernames =[]

if(usernames.length==0){
console.log("We need to find more users")
}
else{
        
        function hello(data){
            
            
            if(data == 'admin'){
                console.log("Hello admin, would you like to see a status report?")
            }
            else{
                console.log(`hello ${data}, thanks for logging in`)
            }
            
            
        }
        usernames.forEach(hello)
    }

  