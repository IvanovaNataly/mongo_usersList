function calculate(){
    var x = 5;
    var y = 10;
    for(var i=0; i<y; i++)
        x += x;

    console.log("result is ", x);
}

function sum(a, b){
    return a+b;
}

module.exports = {
    calculate: calculate,
    sum: sum
};
