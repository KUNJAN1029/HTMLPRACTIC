function a(event){
    console.log(event.target.value)
    console.log("Input")
}

let data ={
    username:"",
    email:"",
    password:"",
    lang:"js",
}

function c(event){
    if(event.trage.value.length == 0){
        event.target.style.border = "2px red soild"
    }
}

function b(event){
    if(event.target.value.length > 0){
        event.target.style.border = "1px black soild"
    }
    data ={
        ...data,
        [event.target.value.name]: event.target.value
    }
}