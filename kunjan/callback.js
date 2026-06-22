const a = 5;

function b(callback)
{
    return callback(a)
}

function c(d)
{
    return d*d
}

let total =b(c)

console.log(total)