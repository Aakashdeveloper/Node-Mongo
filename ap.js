function add(a,b) {
  return a+b
}

function execute(someFunction, value,value2) {
  someFunction(value, value2);
}

execute(add, 1,2);