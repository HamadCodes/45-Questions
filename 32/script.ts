const current_users = ["Bilal", "Sara", "Ali", "Imad", "Waseem"];

const new_users = ["Sara", "Waqar", "Waseem", "Bilal", "Iman"];

function isUsernameTaken(username) {
    return current_users.some(user => user.toLowerCase() === username.toLowerCase());
}

new_users.forEach(username => {
   if (isUsernameTaken(username)) {
      console.log(`Sorry, ${username} is already taken you need to enter a new username.`);
   } else {
      console.log(`${username} is available.`);
   }
});
