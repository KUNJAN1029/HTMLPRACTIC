let fd = async()=>{
    try {
        let r = await fetch("https://dummyjson.com/products");
        let d = await r.json();
        console.log(r)
        console.log(d.products)
    } catch (error) {
        console.log(error)
    }
};

let e = document.querySelector("#dom")
e.textContent = fd();