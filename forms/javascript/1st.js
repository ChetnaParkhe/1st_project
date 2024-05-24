console.log("Apna College");
console.log("Hi Chetna! Welcome to JavaScript :)")

//Variable in javascript
fullName= "Chetna Parkhe";
age= "19";
price= 99000000.99;
radius= 14;
a= null;
y= undefined;
isFollow= true;
console.log(isFollow);

const student={
    fullName: "Chetna Parkhe",
    age: 19,
    cgpa: 9.2,
    isPass: true,
};

console.log(student.age);
console.log(student["age"]);

student["name"]="Shrey";
console.log(student["name"]);

const profile={
    username:"Chetna_1710",
    isFollow:true,
    followers:10000,
    following: 20,
};



function myFunction(msg){ //parameter -> input
    console.log(msg);
    console.log("We are learning js");
}

myFunction("I love js"); //argument

function sum(a,b){
    console.log(a+b);
    s=a*b;
    return s; //don't write anything after return fuction
    console.log("after return");
}
let val=sum(4,5);
console.log(val);





//sum function
function sum(a,b){
    return a+b;
}


const arrowSum=(a,b)=>{
    console.log(a+b);
};


//multiplication function
function mul(a,b){
    return a*b;
}

const arrowMul=(x,y)=>{
    console.log(x*y);
};


function countVowels(str){
    //"chetnaparkhe",count=4
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o" || char==="u"){
            count++;
        }
    }
    return count;
}

const countVow=(str)=>{
    let count=0;
    for(const char of str){
        if(char==="a"|| char==="e"|| char==="i"|| char==="o" || char==="u"){
            count++;
        }
    }
    return count;

}