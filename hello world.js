/*console.log("hello world")
console.log("hello world this is my first js code or maybe not just testing")
console.log("hello")
console.log("yo")
alert("this is u")
let a = prompt("tell your age")
console.log(a)
// variables and let
//variables can be re declared but let can not be re declared
const b=6
console.log(b)
let d=5
console.log(d)
//{
 //   let d=20
  //  console.log(d)
//}
let y=4
let z=2
console.log("y + z =", y+z)
console.log("y - z =", y-z)
console.log("y / z =", y/z)
y += 4
console.log(y)               
// comparison operators
let comp1 = 10;
let comp2 =  20;
console.log("comp1 < comp2", comp1<comp2) // less than
console.log("comp1 == comp2", comp1==comp2) // equal to
console.log("comp1 != comp2", comp1!=comp2) // not equal to



console.log(comp1<comp2 && comp2>comp1)
console.log(comp1<comp2 || comp2==34) */
// logic not
// comments
/* comments */

// CONDITIONAL PROPERTIES IF ELSE IF

// PROMPT JO BHI CHEEZ LETA HAI USKI STRINGBANA DETA HAI

/*let a =prompt("Hey what's your age?")
if (a>0){
  alert("This is an valid age")
} */
/*  if(a<18 && a>0){
    alert("so sorry you are just a minor")
  }
  
  else if(a>=18){
    alert("you are an adult you are good to go")
  }
  else{
    alert("enter a valid age")
  } */
// TERNARY OPERATOR

/*let a = prompt("enter your age")
console.log("you can", a>=18? "drive" :"not drive") */

// LOOPS
// *FOR LOOPS

/*for (let i=0; i<6; i++){
  console.log(i)
} */
/*let sum = 0
let n = prompt("enter the value of n")
n =Number.parseInt(n)
for(let i = 0; i<n; i++){
  sum += (i + 1)
  console.log((i+1), "+")
}
console.log("sum of first" +n+ "natural numbers is" + sum) */

// DOUBT IN ABOVE QUESTION

// FOR IN LOOPS
/*let obj = {
  Ariz:  10,
  Adeel: 12,
  Ibad:  6,
  Mayra: 8,
  Arham: 9,
}
for (let a in obj){
  console.log("age of " + a + " is " + obj[a])
} */
/* let w = prompt("enter your age")
 Number.parseInt(w)
 if(w = 10){
  alert("your name is Ariz Ahmad" )
 }
 if (w = 9){
  Number.parseInt(w)
  alert("your name is Arhaam Ahmad")
}
else {
  alert("you are Mayra Fatma")
}*/

// WHILE LOOPS
/* let a = prompt("enter the value of a")
 a = Number.parseInt(a)

 let i = 3;
 while(i < a){
  console.log(i)
  i++;
 } */

// DO WHILE LOOP 

/* let n = prompt("enter the value of n")
 n = Number.parseInt(n)
 let i = 0
 do{
   console.log(i)
   i++
 }while (i<n) */

// FUNCTIONS
/*function oneplusavg(x,y){
  return 1 + (x+y)/2
}

let a = 1
let b = 2
let c = 3

console.log(oneplusavg(a,b))
console.log(oneplusavg(b,c))
console.log(oneplusavg(c,a)) */

// STRINGS

/*let a = "adeel ahmad"
console.log(a)
console.log(a.length)
 console.log(a[0])
console.log(a[8])
console.log(a[5])

// TEMPLATE LITERALS
let brother1 = "adeel"
let brother2 = "adil"

let statement = `${brother1} is a brother of ${brother2}`
console.log(statement)

// ESCAPE SEQUENCE CHARACTERS
let fruit = 'ban\'ana'
console.log(fruit)
console.log(fruit.length) */

// STRING PROPERTIES AND METHODS\/\/\/\/\/\/\\/

/* let name = "Harry"
console.log(name.length)

// UPPERCASE FUNCTION
console.log(name.toUpperCase()) 

// LOWER CASE FUNCTION
console.log(name.toLowerCase()) */

// SLICE
/*let name = "apple"
console.log(name.slice(2,3)) // last index not included
console.log(name.slice(2,5)) */

/* let name = "harry"
console.log(name.slice(3))
console.log(name.replace("h","l")) */

// ADDING ONE STRING TO ANOTHER

/*let name = "ibad"
let brother = "shadaan"

console.log(name.concat( " is a brother of " , brother , " ok "))

let friend3 = "         alien        "
console.log(friend3.trim()) */

/*let brother = "alien"
console.log(brother[0]);
console.log(brother[1]);
console.log(brother[2]);
console.log(brother[3]);
console.log(brother[4]);

// STRING

let class_marks = [87, 76, 78, 87, 84]

console.log(class_marks)
console.log(class_marks[0])
console.log(class_marks[1])
console.log(class_marks[2])
console.log(class_marks[3])
console.log(class_marks[4]) 

// STRINGS ARE IMMUTABLE THEY CAN NOT BE CHANGED WHEREAS ARRAYS ARE MUTABLE THEY CAN BE CHANGED LATER
console.log(typeof class_marks) */

/*let num = [57, 44, 6, 46, 45,]
delete num[0]
delete num[1]
delete num[2]
delete num[3]
delete num[4]
console.log(num)
console.log(num.length) */ // deleting any object in array does not affect the length of the array.

/*let marks = [87, 68, 80, 70, 88]
let joint = (num.concat(marks))
console.log(joint)
console.log(num, marks) */

//SORT 
// num = [34, 54, 41, 643, 5, 353, 5, 335] 
//console.log(num)
/*let compare = (a,b)=>{
  return b-a
}
console.log(num.sort())
console.log(num.sort(compare)) // IT CHANGES THE ORIGINAL ARRAY AND THIS FUNCTION SORTS IN ALPHABETICAL ORDER
// REVERSE
console.log(num.reverse())
// NOW TO SORT IN ASSENDING ORDER WE NEED TO
// WE USEDTHE COMPARE FUNCTION TO SEPARATE IN ASSENDING AND DESCENDING FORM

// SPLICE AND SLICE
//SPLICE
console.log(num.splice(2,1,887))
console.log(num) // SPLICE MODIFIES THE ORIGINAL ARRAY */
//SPLICE RETURNS THE DELETED ITEM AND MODIFIES THE ORIGINAL ARRAY
//console.log(num.typeof) *****

//SLICE

/*console.log(num.slice(3))
console.log(num.slice(3,5))
console.log(num.slice(2,4)) // SLICE DOES NOT MODIFIES THE ORIGINAL ARRAY IT CREATES A NEW ARRAY
*/

/*let num = [4, 6, 8, 0, 5]
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

// FOR EACH LOOPS
num.forEach((element) => {
  console.log(element * element)
}) */

// Array.from

/* let name = "alien"
let a = (Array.from(name))
console.log(a)

// For in

for (let i in a) {
  console.log(a[i])
}

// For of 

for (let i of a) {
  console.log(i)
} */

// ARRAY MAP METHOD

/* let arr = [24, 57, 8, 34] 
let a = arr.map((value, index, array)=>{
  console.log(value, index, array)
  return value + 1
})
console.log(a)  */

// ARRAY FILTER METHOD

/* let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
console.log(a2) */

// ARRAY REDCE METHOD

/*let arr3 = [1, 2, 3, 5, 2, 1]
let newarr3 = arr3.reduce((h1, h2)=>{
return h1 + h2
})
console.log(newarr3) */


/* let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2)=>{
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3) */

// CONSOLE OBJECTSS
/* console.log(console)

// ASSERT
console.error("hey this is an error")
console.assert(5>53)
console.assert(5>4)

// CLEAR
console.clear()

// WARNING
console.warn("hey please don't drink soda")

// INFO
console.info("hey this is an important info")

// console.time for comparison of for loop and while loop 

// DOCUMENT
/* let a = prompt("enter the value of a")
a = Number.parseInt(a)

alert("you entered a of type" + (typeof a))
let write = confirm("are you sure")
if(write){
  document.write(a)
}
else{
  document.write("please confirm") 
} */

// let a = prompt("enter the value of a")
/* document.write("hello world")

window.console.log(window)
console.log(document.body)
 document.body.style.backround = "yellow" */

// WALKING THE DOM


/*console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes) */

/* console.log(document.body.firstChild)
a = document.body.firstChild
 console.log(a.parentNode)
 console.log(a.parentElement) */

/* const changeBGRed = ()=>{
  document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log("first child of b is", b.firstChild)
console.log("first element child of b is", b.firstElementChild) */

// INNER HTML, OUTER HTML AND THEIR PROPERTIES

/* console.log(document.getElementsByTagName("span")[0])
console.dir(document.getElementsByTagName("span")[0])
console.log(document.body.firstChild)
console.log(document.body.firstElementChild) */

// TEXT CONTENT

// console.log(document.body.textContent)

// THE HIDDEN PROPERTY

// Doubt ih the hidden property not working in console with $0.hidden = false command
// DOUBT RESOLVED 

// let a = document.body.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>Hello World</h1>';

//console.log(document.body.getElementsByTagName('div')[0].innerHTML + '<h1>Hello World</h1>')

//  console.log(document.getElementsByTagName('div')[0].innerHTML + '<hi> Hello World</h1>'.innerHTML)

//  '<h1> Hello World</h1>'.innerHtml  


// let add = document.createElement('add')
// console.log(add)

// console.log(document.createElement('bob'))

// add.setAttribute('Alien', '4')      

// console.log(add.getAttribute('alien')) 

// add.setAttribute('lakka', '8')

// console.log(add)

// add.setAttribute('staralien','88')

// console.log(add)

// console.log(add.attributes);

// console.log(add.setAttribute('data-matarpaneer', '77')) 

// INSERTION METHODS

// console.log(add)
// add.className = 'nimmi'
// console.log(add)
// add.innerHTML = "<div> mai hu nameer maar maar ke bana deta hu matar paneer </div>"

// console.log(add)

//    document.body.append(add)

//  document.body.prepend(add)

//   document.body.before(add)
//  console.log(add)

// IMMEDIATELY INVOKED FUNCTIONS EXPRESSIONS

// let a = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(456)
//     }, 4000)
//   })
// }
// (async () => {
//   let b = await a()
//   console.log(b)
//   let c = await a()
//   console.log(c)
//   let d = await a()
//   console.log(d)
// })() ---------------------------------------> IIFE

// DESTRUCTURING

// let arr = [3, 5, 2, 1, 8, 6, 7]
// let [a, b, ...rest] = arr
// console.log(a, b, rest) 


// let arr = [3, 5, 2, 1, 8, 6, 7]
// let [a, , , d, ...rest] = arr
// console.log(a, d, rest)
// console.log(a, rest)

// let { a, b } = { a: 1, b: 3 }
// console.log(a, b)

// SPREAD OPERATOR
// let arr1 = [0, 7, 8, 6]
// let obj1 = { ...arr1 }
// console.log(obj1)

// function sum(v1, v2, v3) {
//   return v1 + v2 + v3
// }

// console.log(sum(...arr1))

// let obj2 = {
//   name: "alien",
//   company: "StarWars",
//   address: "Mars",
// }

// console.log({ ...obj2, name: "StarAlien" })
// console.log({ name: "lakka", ...obj2 }) --------------> THIS WILL NOT OVERWRITE

// SCOPES

// > LOCAL SCOPE -------> BLOCK SCOPES & FUNCTION SCOPES
// > GLOBAL SCOPE

// CLOSURES IN JAVASCRIPT

// message = "Good Global"
// function Hello() {
// let  message = "Good Morning"
//   {
//   let  message = "Good Afternoon"
//     console.log(`Hello 1 + ${message}`)
//   }
// let c = function hello2(){
//   console.log(`hello I am c + ${message}`)
// }
// return c
// }
// c = Hello()
// c()

// const x = () => {
//   let a = 1
//   console.log(a)
//   const y = () => {
//     let a = 2
//     console.log(a)
//     const z = () => {
//       let a = 3
//       console.log(a)
//     }
//     z()
//   }
//   y()
// }
// x()

// function int() {
//   let name = "lakka"
//   function displayName(){
//     console.log("inner", name)
//   }
//   displayName()
// }
// int()

// console.log("outer", name)

// PLAYING SOUND IN JACASCRIPT DOCUMENT

// function play() {
//   var audio = new Audio("C:\Users\hp\OneDrive\Desktop\javascript tutorial")
//   audio.play();
// }
// setTimeout(() => {
//   play()

// }, 2000)

// // JAVASCRIPT ON THE SERVER SIDE

function SayHello() {
return console.log("Hello")
}

SayHello()