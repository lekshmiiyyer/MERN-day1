// to print 
//console.log("hello world");
// var value can be reinitialised and updatred value will be reflecetd,globally scoped
//let value cannot be reinitialised and cant be update.If inside a block the value can be updatedv outide the block. ie its a block scoped..let is preferred




/*let a=10;
let b=20;let c=a%b;
console.log("sum is:",a+b);
console.log("dif is:",a-b);
console.log("quotient is:",a/b);
console.log("product ius:",a*b);
console.log("rem is:",c);

let d=20;e="20";*/
/*output will be true as == checks the values alone aansd not data type
if(d==e){
    console.log(true)
}
else
{
    console.log(false)
}*/




/*output is false as data types are compared
if(d===e){
    console.log(true)
}
else
{
    console.log(false)
}*/


/*Concatenation of strings 
let f="leks"
let n="l"
let fn=f+n
console.log(`${f}  ${n}`)
console.log(`${f} and  ${n}`)
console.log(`${f} + ${n}`)*/


//object creation
/*let car={
    model:"sedan",
    color:"white",
    price:20000
}
console.log(car)
console.log(car.color)
console.log(`The model of the car is: ${car.model} \nprice is: ${car.price}`)*/



/*
let person={
    name:"liya",
    college:"christ collge of engineering",
    class:4,
    address:{
        housename:"kuriachira bustop",
        street:"thrissur"
    }

}
console.log(person)
console.log(`${person.name} and ${person.address.housename}`)*/

//array
/*let fruits=["apple","orange","mango",10]
console.log(fruits)

//edit
fruits[3]="grapes";
//add at end
fruits.push("pineapple")
//add at beginning
fruits.unshift("jackfruit")
//remove lats element 
fruits.pop()
//remove first lelemnt
fruits.shift()
console.log(fruits)*/

//array of objects
/*let todo=[
    {id:1,
    task:"buy book"},
    
    {id:2,
        task:"study"},
    

        {id:3,
            task:"derink water"}
]
console.log(todo)

let students=[
{
    name:"leksmi",age:20
}    ,
{
    name:"django",age:10
}
]
console.log(students[1].name)*/

/*function sum(a,b){
    let summ=a+b;
    console.log(summ)
    }
    
    function sub(a,b){
        let sub=a-b;
        console.log(sub)
        }
    
        function mult(a,b){
            let mul=a*b;
            console.log(mul)
            }

//anothet method for function def in js using arrow function
add=(a,b)=>{
    console.log(a+b);
}
subtr=(a,b)=>console.log(a-b);
multi=(a,b)=>console.log(a*b)


sum(12,12)
sub(12,12)
mult(12,12)
add(12,12)
subtr(12,12)
multi(12,12)*/


//qn
// add=(a,b)=>{
//  let sum=a+b
//  if(sum>10)
//  console.log("its greater")
//  else
//  console.log("lesser than 10");

// }
//let a=prompt("enter the value forn a:")
//let b=prompt("enter the vaklue for b")
//add(a,b)

let numbers=[1,2,3,4,5,6,7,8,9,10]
        console.log(numbers)

        console.log("FOR")

addarrayfor=(numbers)=>{
for(let i=0;i<numbers.length;i++){
 console.log(numbers[i])
}


}
addarrayfor(numbers);

console.log("\n")
console.log("WHILE")

addarraywhile=(numbers)=>{
  
    let i=0;
    while(i<numbers.length){
        console.log(numbers[i])
        i++
    }
    
    
    }
    addarraywhile(numbers);
    
console.log("\n DO_WHILE")
    addarraydo=(numbers)=>{
        let i=0;
       do{
        console.log(numbers[i])
        i++;
       }while(i<numbers.length);
        
        }
        addarraydo(numbers);
        