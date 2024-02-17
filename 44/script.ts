function orderSandwich(...items){
    console.log("Sandwich order")

    if(items.length === 0){
        console.log("No items specified")
    }
    else{
        items.forEach(item => console.log(" - " + item))
    }
    console.log("----------------------------------")

}
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato")
orderSandwich("Turkey", "Swiss Cheese")
orderSandwich("Peanut Butter", "Jelly")