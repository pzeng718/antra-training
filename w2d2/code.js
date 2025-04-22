// Promise.all, .allSettled, .race, and .any
// https://pokeapi.co/

let promise1 = new Promise(async (resolve, reject) => {
  let resp = await fetch('https://pokeapi.co/api/v2/berry/1/');
  if(resp.status === 200){
    resolve(resp.json())
  }else{
    reject(resp.statusText)
  }
})

let promise2 = new Promise(async (resolve, reject) => {
  let resp = await fetch('https://pokeapi.co/api/v2/berry/2/');
  if(resp.status === 200){
    resolve(resp.json())
  }else{
    reject(resp.statusText)
  }
})

let promise3 = new Promise(async (resolve, reject) => {
  let resp = await fetch('https://pokeapi.co/api/v2/berry/3/');
  if(resp.status === 200){
    resolve(resp.json())
  }else{
    reject(resp.statusText)
  }
})

let promise4 = new Promise(async (resolve, reject) => {
  let resp = await fetch('https://pokeapi.co/api/v2/berry/4/');
  if(resp.status === 200){
    resolve(resp.json())
  }else{
    reject(resp.statusText)
  }
})

let promises = [promise1, promise2, promise3, promise4];
Promise.all(promises).then(arr => console.log(arr.length));
Promise.allSettled(promises).then(arr => {
  for(let result of arr){
    console.log(result.status, result.value)
  }
})
Promise.race(promises).then(result => console.log(result))
Promise.any(promises).then(result => console.log(result))