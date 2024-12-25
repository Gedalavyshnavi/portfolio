//json
// let d={
//     name:"ram",
//     roll: 43,
//     skills: ["football","chess","vollyball"],
//     address:
//     {
//         street: "abc",
//         Area: "xyz"
//     },
// };
// console.log(d);

//promises
// let d=fetch("https://restcountries.com/v3.1/alpha/in")
// console.log(d);

//chain of promises
// let d=
// fetch("https://restcountries.com/v3.1/alpha/in")
// .then(
//     (full,rej)=> 
//     {
//         console.log(full);
//         console.log(rej);
//     }
// );
// console.log("hihi");
// console.log(d);

//setime
// let y=()=> console.log("hello");
// setTimeout(y,7000);

//fetching
// let d=
// fetch("https://restcountries.com/v3.1/alpha/in")
// .then(
//     (full,rej)=> 
//     {
//         console.log("full",full.json);
        
//     }
// );
// console.log(d);

let d=
fetch("https://restcountries.com/v3.1/alpha/in")
.then(
    (full,rej)=> 
    {
        full.json().then((full,rej)=>
            {
        console.log(full[0]);
        
    });
});
console.log("hello");
console.log("d"d);