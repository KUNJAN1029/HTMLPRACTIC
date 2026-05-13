let a = [];

let b = Number(prompt("Enter number of values to store"));

let exit = 0;

for(let i = 0; i<b; i++)
{
    let c = prompt("Enter the value").toLowerCase().trim();
    a.push(c);
}
console.log("your entered values are", a);
let d = (prompt("do you want to search username"));

let f = d.charAt(0);
do {
    if (f=="y")
    {
        let e = prompt("Enter the search value").toLowerCase().trim();
        a.indexOf(e)
        if(a.indexOf(e)>=0){
            console.log("user name found ",e)
            break;
        }
        else{
            console.log("not found")
        }
    }
    else{
        exit++
    }
    let d = (prompt("do you want to search username"));
} while (exit == 1);

