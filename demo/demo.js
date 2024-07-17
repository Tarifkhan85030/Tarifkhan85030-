// let a = 12;
// let b = 2;
// console.log("a =",a,"b =",b);
// console.log(a+b);
// console.log("a - b =",a-b);
// console.log("a * b =",a*b);
// console.log("a / b =",a/b);
// console.log("a ** b =",a**b);

// let a=4; 

// if(a%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }
 
// let num = prompt("inter the numberr");
// let gread;
// if(num<=100 &&num>=90){
//     gread = "A";
// }
// else if(num<=89 && num>=70){
//     gread = "B";
// }
// else if(num<=79 && num>=60){
//     gread =  "C";
// }
// else if(num<=59 && num>=50){
//     gread = "D";
// }

// else{
//     gread = "F";
// }
// document.write(gread);

// let i=0,sum=0;
// do{
//     document.write("tarif");
//     i++;
// }while(i<= 6);
// let i=0;
// while(i<=5){
//     document.write(i);
//     i++;
// }

// let str = "tarif";
// let i,size=0;
// for(let i of str){
//     document.write("i =", i);
//     size++;
// }
// document.write(size);

// let i,n=5,sum=0,sumo;
// for(i=0;i<=n;i++){
//     if(i%2===0)
//     {
//         sum++;
//     }
//     else{
//         sumo++;
//     }
// }
// document.write(sum);
// let num=34;
// let user=prompt("enter the number");
// while(num!=user){
//     user=prompt("enter again number");
// }
// document.write("currect number");
// let a="@";
// let str=prompt("enter the fullname");
// let len=str.length;
// let sum=a+str+len;
// document.write(sum);
// let array=["bollmberg","microsoft","uber","google","ibm","netflix"];
// array.splice(2,1,"ola");
 
// function sum(str){ 
//  let count=0;
//      for(let i of str){
//      if(i==="a"|| i==="e"||i==="i"||i==="o"||i==="u"){
//        let= count++
//      }
//     }
//     console.log(count);
// }
// sum("khan");

// let arr=[3,4,5,6,7];

// arr.forEach( 

//   (num)=>{
//   document.write(num*num," ");
// }

// )


// let num=[3,4,2,55,65];
// let squer=(val)=>{
//   document.write(val**2);
// };
// num.forEach(squer);

// let num=[3,4,5,6,7,56]

// let newarray=num.reduce((res,currect)=>{
//   return  res>currect? res:currect;
// });

// document.write(newarray);

// filter function\


// let mark=[45,78,90,98,94];
// let topper=mark.filter((mar)=>{
//   return mar>90;
// });
// document.write(topper);

// reduce use of sum

// let arr=[];
// let n=prompt("enter the number");
// for(i=1;i<=n;i++){
//   arr[i-1]=i;
  
// }
// let sum=arr.reduce((res,curr)=>{
//   return res+curr;
// })
// document.write(sum);

//                                        foctorel 
// let arr=[];
// let n=prompt("enter the number");
// for(i=1;i<=n;i++){
// arr[i-1]=i;
// }
// let foc=arr.reduce((res,curr)=>{
//   return res*curr;
// });
// document.write(foc);
 //let divs=document.querySelectorAll(".box");

//  divs[0].innerText= divs[0].innerText+"khan";
//  divs[1].innerText="tarif2";
//  divs[2].innerText="tarif3";
// let idx=1;
// for(div of divs){
//     div.innerText = `new value ${idx}`;
//     idx++;
// }

// let newbtn=document.createElement("button");
// newbtn.innerText="click me";
// newbtn.style.background="red";
// newbtn.style.color="white";
// document.querySelector("body").prepend(newbtn);

// let divs=document.createElement("div");

// divs.style.background="red";
// divs.innerText="my new div";
// divs.style.display="flex";
// divs.style.justifyContent="center";
// divs.style.alignItems="center";
// divs.style.fontSize="20px";

// divs.style.width="100px";
// divs.style.height="100px";
// divs.style.border="5px blue solid";
//  document.querySelector("body").append(divs);

// let ha=document.createElement("h1");
// ha.innerText="i am on the way";
// ha.style.color="blue";

// document.querySelector("body").before(ha);

// let att=document.querySelector("p");
// // att.setAttribute("class","new");
// att.classList.add("new");


// let btn=document.querySelector("#btn1");
// btn.onclick=()=>{
//     alert("helooo");
// }
// btn.onclick=()=>{
//     prompt("enter here ")
// }

//let divnew=document.querySelector(".new");
// divnew.onmouseover=(e)=>{
//     console.log(e.type);
//     console.log(e.target);
//     alert("yee yeeee sale go fast");
// }

// divnew.addEventListener("dblclick",(e)=>{
//     alert("hey");
//     console.log(e);
//     console.log(e.target); 
// })
         //      most improtent sdkfjdsfiowaekask;jfaeriojsfdf;idfgn;df;jdo;ifadskjfkasd;fasdoifjadfiofcmvndiof


// let modebtn=document.querySelector("button");
// let body=document.querySelector("body");
// mode="ligth";
// modebtn.addEventListener("click",(e)=>{
//     if(mode==="light"){
//         mode=("dark");
//         document.querySelector("body").style.background="black";
//     }else{
//         mode=("light");
//         document.querySelector("body"). style.background="white";
//     }
//     console.log(mode);
// })

// const student={
//     name:"tarif khan",
//     marks:90.43,
//     printmarks:function(){
//         console.log("marks=",this.marks)
//     },
// };

// class toyotacar {
//     start(){
//         console.log("start");
//     }

//     stop(){
//         console.log("stop");
//     }
// }
// let fortuner = new toyotacar();
// let ford = new toyotacar();

// const school={
//     name:"gsss",
//     class:2,
//     roll:34,
// };

// const student={
//     name:"tarif",
//     roll:45,
// };
// student.__proto__=school;        


// class person{
//     constructor(){
//         console.log("enter parent constructor");
//         this.species="homo sapiens";
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
// }



// class engineer extends person{
//     constructor(branch){
//         console.log("enter child constructor");
//         super();
//         this.branch = branch;
      
//         console.log("exit child constructor");
//     }
//     work(){ 
//         console.log("solve problems build something");
//     }
// }

// let tarif= new engineer();
 
 

// let button = document.querySelector("button");
// let body = document.querySelector("body");

// let mode = "light";
// button.addEventListener("click" ,() => {
//     if (mode === "light") {
//         mode = "dark";
//         body.style.background = "black";
//     } else {
//         mode = "light";
//         body.style.background = "white";
//     }
// });
                   // ldkfdsjfoidfgdfgdfoigjkf
// function hello(){
//     document.write("tarif");
// }
// setTimeout(hello,2000);
// document.write("one");
// setTimeout(()=>{
//         document.write("tarif");
//     } ,2000);
//     document.write("two");
 
// function asyncFunc(dataid) {
//     return new Promise( (resolve, reject) => {
//          setTimeout( () => {
//             console.log("some datal",dataid);
//             resolve("success");
//          }, 4000);
//     });
// }

// async function asyncFuncs(){
//     await asyncFunc(1);
// }

// console.log("fetching datal");
// let p1=asyncFunc();
// p1.then( (res) => {
//     console.log(res);
// });

// const sum= (a ,b) =>{
//     return a+b;
// }
    
  
// console.log(sum(2,43));
 
// let feet = document.querySelector("#feet");
// let inch = document.querySelector(".inch");

// feet.addEventListener("input" ,function(){
//     let f = this.value ;
//     let i = f*12;
//     inch.value = i;
// })

// inch.addEventListener("input" ,function(){
//     let i = this.value ;
//     let f = i/12;
//     feet.value = f;
// })

//  function sub(){
//     let en =parseInt( document.querySelector("#en").value);
//     let hi =parseInt( document.querySelector("#hi").value);
//     let ma =parseInt( document.querySelector("#ma").value );
//     let ur =parseInt( document.querySelector("#ur").value );
//     let ss =parseInt( document.querySelector("#ss").value );
//     let sc =parseInt( document.querySelector("#sc").value );

//     let total = en+ma+hi+ur+ss+sc;
//     let per =( total*100/600);

//     console.log(total,per);

//     let msg = document.querySelector(".h1");
//     msg.innerText = `your marks= ${total} your persentage = ${per}`;

// };
 
// let display = document.querySelector("#input-box");
// let buttons = document.querySelectorAll("button");

 
// let buttonArray = Array.from(buttons);

// let String = '';

// buttonArray.forEach(btn => {
//     btn.addEventListener("click", (e) => {
      
//         if(e.target.innerHTML == "DEL"){
//             String = String.substring(0,String.length-1);
//             display.value = String;
//         }else if(e.target.innerHTML == "AC"){
//             String = " ";
//             display.value = String;
//         }else if(e.target.innerHTML == "="){

//             try {
//                 string = eval(string).toString(); // Convert the result back to string
//             } catch (error) {
//                 string = "Error"; // Basic error handling
//             }
//             String = eval(String).tostring();
//             display.value = string;
//         }
        
//         else{
//         String += e.target.innerHTML;
//         display.value = String;
//         }
        
         
//     })
// })



let display = document.querySelector("#input-box");
let buttons = document.querySelectorAll("button");

let currentInput = ''; // Renamed from String for clarity and best practice

buttons.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let buttonValue = e.target.innerHTML; // More descriptive variable name

        switch (buttonValue) {
            case "DEL":
                currentInput = currentInput.substring(0, currentInput.length - 1);
                break;
            case "AC":
                currentInput = ""; // Clear the input entirely
                break;
            case "=":
                try {
                    currentInput = eval(currentInput).toString(); // Convert the result back to string
                } catch (error) {
                    currentInput = "Error"; // Basic error handling
                }
                break;
            default:
                currentInput += buttonValue;
                break;
        }

        display.value = currentInput; // Update the display with the current input
    });
});

