// map, filter, reduce, includes, find, slice

let arr = [1,2,3];

arr.__proto__.myMap = function(mapFn){
  let result = [];
  for(item of this){
    result.push(mapFn(item));
  }

  return result;
}

arr.__proto__.myFilter = function(filterFn){
  let result = [];
  for(item of this){
    if(filterFn(item)) result.push(item);
  }

  return result;
}

arr.__proto__.myReduce = function(reduceFn, initialVal){
  if(!initialVal) initialVal = 0;
  let result = initialVal;
  for(let i = 0; i < this.length; i++){
    result = reduceFn(result, this[i]);
  }

  return result;
}

arr.__proto__.myIncludes = function(target){
  for(let item of this){
    if(item === target) return true;
  }

  return false;
}


arr.__proto__.myFind = function(target){
  for(let i = 0; i < this.length; i++){
    if(this[i] === target) return i;
  }

  return -1;
}

arr.__proto__.mySlice = function(start, end){
  let result = [];
  end = end > this.length ? this.length : end;
  for(let i = start; i < end; i++){
    result.push(this[i]);
  }

  return result;
}

let arrMap = arr.myMap((item) => item * 2);
let arrFilter = arr.myFilter((item) => item > 1);
let arrReduce = arr.myReduce((acc, curVal) => acc + curVal, 0);
console.log(arrMap)
console.log(arrFilter)
console.log(arrReduce)
console.log(arr.myIncludes(4))
console.log(arr.myFind(2))
console.log(arr.mySlice(0, 5));