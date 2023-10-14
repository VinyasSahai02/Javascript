//ARRAYS
//learn diff methods that can be used in arrays
let channels=[{ 
    name:'apna college',
    subs:100
},{
    name:'coding addict',
    subs:1000
},{
    name:'net ninja',
    subs:10000
}];
console.log(channels.find(function(element){   //find method
    return element.subs ===1000    //returns the first obj with subs=1000
}))
//study for each method
console.log(channels.filter(element=>{    //filter method
    return element.subs>100     //returns all objs with subs >100
}))
//or  
console.log(channels.filter(element=>element.subs>100))
console.log(channels.map(element=>element.subs*10))   //returns all objs with subs multiplied by 10

