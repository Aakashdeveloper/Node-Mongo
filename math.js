var mathfun = require('./modulefn');

var processResults = function(err, results, time){
    if(err){
        console.log("ERROR:" + err.message);
    } else {
        console.log("the results are :" + results + "("+ time + "ms)");
    }
};

for (var i =0 ; i <10; i++){
    console.log("calling evenDoubler with paramter' " + i +" '");
    mathfun.evenDoubler(i, processResults);
}

console.log("----");

console.log(" the 'foo' variable from module 'mathfun' = "+ mathfun.foo);

console.log(" the 'maxtime' variable is not exported "+ mathfun.maxTime);