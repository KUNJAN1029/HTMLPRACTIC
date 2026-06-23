let data = "Sample"

let mypromise = new Promise((r,rr)=>{
    if(data.length != 0)
    {
        r("Success")
    }
    else{
        rr("Failed the task")
    }
});

async function s() {
    try {
        let rs = await mypromise;
        console.log(rs)
    } catch (error) {
        console.log(error)
    }
    finally{
        console.log("i fucking dont care i will run")
    }
}
s();