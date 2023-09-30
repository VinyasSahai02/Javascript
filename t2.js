//IF ELSE AND SWITCH CONDITIONS
//var time=prompt('whats the time?');
if(time>5 && time<17){
    alert('good morning');     //if we click cancel then if block will not be executed but else block will get executed as value of time 
}                              //will be NULL so if block will not get executed
else{
    alert('good evening');
}

//var fruit=prompt('which fruit do you want?')
switch (fruit) {
    case 'narangi':
        console.log('60rs kilo');
        break;
    case 'sabe':
        console.log('50rs kilo');
        break;
    default:
        console.log(`${fruit} aaj khatam ho gaya hai`)   //notice the type of quotation used
        break;
}


//LOOPS
for(let i=0;i<10;i++){
    if(i%2==0)
        console.log(i)
}

let i=0
while(i<10){
    console.log('hello world')
    i++
}

do{
    console.log('hello world')
    i++
}
while(i<10)

//for in loop->
let animal={      //usually used in things like arrays and objects
    name:'zebra',    //creating an object
    leg:4
}
for(let key in animal){
    console.log(key);   //prints name and leg
    console.log(animal[key]);   //prints zebra and 4
}

let names=["rahul","aman","neha"];   //creating an array
for(let index in names){
    console.log(names[index])
}

//for off loop-> 
for(let name of names){   //also used in arrays
    console.log(name)
}