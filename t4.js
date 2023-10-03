//OBJECTS
const course={
    lecture: 10,   //property
    section:3,
    title:"javascript",
    notes:{
        introduction:"welcome to JS"
    },
    enroll(){    //method
        console.log("you are sucessfully enrolled")
    }                     
}
course.enroll()   
course.title     //javascript
course.price=900    //declaring new property

//better way as above not efficient
function createCourse(title){     //factory function
    return{
        title: title,
        enroll(){
            console.log("you are sucessfully enrolled");
        }                     
    }
}
const course=createCourse('javascript');
course.title

function Course(title){     //construtor function->pascal case imp
    this.title=title,
    this.enroll=function(){
        console.log("you are sucessfully enrolled");
    }
}
const course= new Course('javascript');
delete course.title;    //to delete a property
course.checkEnrollment=function(){     //creating a new method
    console.log('already enrolled')
}


const course={
    title: 'javascript',
    enroll(){
            console.log("you are sucessfully enrolled");
    }
}
const course_1= {...course}    //cloning an object
course_1.title='C++'
console.log(course_1)   //C++
console.log(course)   //javascript

const course_2 = Object.assign({},course)    //another method to clone
course_2.title='C++'
console.log(course_2)   //C++
console.log(course)   //javascript

for(let key in course){
    console.log(key, course[key]);   //property and value outputed
}

const course_3={};     //cloning using loops  
for(let key of Object.keys(course)){    //Object.keys()->gives output in an array form ['title','enroll']
    course_3[key]=course[key] 
}