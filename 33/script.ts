let ordinalNum = [1,2,3,4,5,6,7,8,9]

ordinalNum.forEach((data) =>

    {if(data===1){
        console.log(`${data}st`)
    }else if(data===2){
        console.log(`${data}nd`)
    }else if(data===3){
        console.log(`${data}rd`)
    }
    else{
        console.log(`${data}th`)
    }}
)