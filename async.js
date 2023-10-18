setTimeout(console.log('soup'),2000)   //waits for 2sec then prints soup

//PROMISES
const promise1= new promise((resolve,reject)=>{
    setTimeout(()=>{
        isReady=[true,false][Math.floor(Math.random()*2)]
        isReady?resolve('soup is ready'):reject('no soup today')
    },2000)
})
console.log(promise1    //.then() is for success & .catch() is for failure
    .then(value=>console.log(value))   //soup is ready
    .catch(value=>console.log(value))   //no soup today
)  


//ASYUNC AND AWAIT
const getDog=async()=>{
    const response=await fetch('api url')
    const data =await response.json()   //await is the same a .then
    console.log(data)
}
getDog()


//AUDIO TAGS
//to add sounds to your app
document.addEventListener('keydown',function(e){
    if(e.key=="q"){
        document.getElementById('punch').play()
    }
    else{
        console.log('not q')
    }
})


let countValue= new promise(function(resolve,reject){
    resolve('promise resolved')  //regardless of resolve or reject here
});
countValue
    .then((success)=>{})
    .catch((error)=>{})
    .finally(function greet(){
        console.log('this code is executed');   //irrespective of the outcome .finaaly will always run
    });


//PROMISE CHAINING
examplePromise()
    .then(function(resultOne){
        return secondTask();
    })
    .then(function(resultTwo){
        return thirdTask();
    })
    .then(function(resultThree){
        //do something
    })
    .catch(function(error){
        //handles any error that may occur before this point
    })





















