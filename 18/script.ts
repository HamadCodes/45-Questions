//Store the locations in a array. Make sure the array is not in alphabetical order.
let locations =["japan","France","America", "Canada","Australia"]

//Print your array in its original order.
console.log(locations)

//Print your array in alphabetical order without modifying the actual list.
let sorted = locations.slice()
sorted.sort()
console.log(sorted)

//Show that your array is still in its original order by printing it.
console.log(locations)

//Print your array in reverse alphabetical order without changing the order of the original list.
let revSorted = [...locations]
revSorted.reverse()
console.log(revSorted)

//Show that your array is still in its original order by printing it again.
console.log(locations)

//Reverse the order of your list. Print the array to show that its order has changed.
locations.reverse()
console.log(locations)

//Reverse the order of your list again. Print the list to show it’s back to its original order.
locations.reverse()
console.log(locations)

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
locations.sort()
console.log(locations)

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.reverse()
console.log(locations)