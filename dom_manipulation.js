//ACCESSING NODES
console.log(document.documentElement)   //html tag
console.log(document.body)   //body tag
console.log(document.head)   //head tag

console.log(document.body.children)   //accessing child nodes of body
console.log(document.body.firstElementChild)   //h1
console.log(document.body.lastElementChild)    //script

//accessing sibling nodes
const h1Tag=console.log(document.body.children[0])  //h1
const buttonTag=console.log(h1Tag.nextElementSibling)   //button
console.log(buttonTag.previousElementSibling)   //h1


//TABLE DOM MANIPULATION
const tableTag=document.body.children[3]
console.log(tableTag.tBodies[0].rows[0].cells[0].textContent)   //one
console.log(tableTag.tBodies[0].rows[0].cells[0].style='background-color:blue;')   //changing props->one will have bg color as blue


//USING ID's AND CLASSES TO TARGET TAGS
console.log(element.style.background='red')
//or
const ulTag=document.getElementById("element")
ulTag.style.backgroundColor='red'
console.log()

listItem=document.getElementsByClassName("list-item")
console.log(listItem)

console.log(document.getElementsByTagName("table"))


//QUERY SELECTOR    
const listItems =document.querySelectorAll('.list-item')  //ul
const listIems =document.querySelector('#element')  //ul
const listItem =document.querySelectorAll('ul>li:last-child')   //li->third

//ACCESSING USER DEFINED ATTERIBUTES
console.log(element.getAttribute('data'))  //valid
console.log(element.setAttribute('order-placed','pending'))
console.log(element.getAttribute('order-placed'))   //pending
console.log(element.hasAttribute('order-placed'))   //true
console.log(element.removeAttribute('order-placed'))   //removeing a attribute
console.log(element.hasAttribute('order-placed'))  //false
console.log(element.attributes)   //to check all attributes of a tag


//API'S
// generate random dog images
const donImageDiv=document.getElementById('dogImage')
fetch('api url')   //promise->stuff you need to wait to get data from
    .then(response =>response.json())  //these two statements are to get data from api
    .then(json=>{
        console.log(json.message)
        donImageDiv.innerHTML= `<img src='${json.message}' height=300 width=300/>`
    })