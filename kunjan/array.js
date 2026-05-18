let a = [10, 20, 30, 40];

// let b = Number(prompt("Enter number of values to store"));


// for (let i = 0; i < b; i++) {
//     let c = Number(prompt("Enter the value"));
//     a.push(c);
// }
// console.log("your entered values are", a);

let total = 0;
let valueStore = a.map(function (element, index) {
    total = total + element;
    return element;
});
console.log(valueStore)
console.log(total)

// let e = prompt("Enter the search value").toLowerCase().trim();

// a.forEach(function(element,index){
//     if(element == e)
//     {
//         console.log("user name found ",element)
//     }
// });

// let exit = 0;

// for(let i = 0; i<b; i++)
// {
//     let c = prompt("Enter the value").toLowerCase().trim();
//     a.push(c);
// }
// console.log("your entered values are", a);
// let d = (prompt("do you want to search username"));

// let f = d.charAt(0);
// do {
//     if (f=="y")
//     {
//         let e = prompt("Enter the search value").toLowerCase().trim();
//         a.indexOf(e)
//         if(a.indexOf(e)>=0){
//             console.log("user name found ",e)
//             break;
//         }
//         else{
//             console.log("not found")
//         }
//     }
//     else{
//         exit++
//     }
//     let d = (prompt("do you want to search username"));
// } while (exit == 1);


