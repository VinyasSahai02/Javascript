let variable=document.querySelector('button');  //type is selected and stored in variable|| let is used to declare a variable
variable.addEventListener('click', showMsg)    //onclick execute this func

function showMsg(){
    alert("poped up hello world")   //alert pops up a message->displays output
    let text = prompt('change text on button');   //prompt takes inpput from user and stores it in text variable
    variable.textContent=text;  //updating the text button
}

//NAMING CONVENTIONS FOR VATIABLES
/**pascal case
camel case
snake case**/
