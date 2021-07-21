function transpose(){
  return this[0].map((_,i)=>this.map(r=>r[i]))
}

function range(stop,start=0,step=1){
  return [...Array(stop-start).keys()].fill(start).map((x,i)=>x+i*step).filter(x=>x<stop)
}

function chunk(size){
  return Array(Math.ceil(this.length/size)).fill().map((_,i)=>i*size).map(begin=> this.slice(begin,begin+size))
}

function compact(size){
  return this.filter(x=>x)
}

function cat(){
  this.push(...arguments)
}

function diff(arr2){
  return this.filter(x=>arr2.indexOf(x)<0)
}

function drop(n){
  return this.slice(n)
}

function dropr(n){
  return this.slice().reverse().slice(n).reverse()
}

function dropwhile(func){
  arr=this.slice()
  while(arr.length&&!func(arr[0])){
    arr=arr.slice(1)
  }
  return arr
}

function droprwhile(func){
  arr=this.slice().reverse()
  while(arr.length&&!func(arr[0])){
    arr=arr.slice(1)
  }
  return arr.reverse()
}

arrfuncs=['transpose','chunk','compact','cat','diff','drop','dropr','dropwhile','droprwhile']
arrfuncs.forEach(func=>eval('Array.prototype.'+func+'='+func))


// Tests below

const print=x=>console.log(JSON.stringify(x))
print([[1,2,3],[1,2,3],[1,2,3]].transpose())
print([1,2,3,4,5].chunk(2))
print([1,2,3,false,''].compact())
a=[1,2,3]
a.cat(4,[5])
print(a)
a.pop()
print(a.diff([1,2,3]))
print(a.dropr(2))
a=[1,2,3,4]
print(a.droprwhile(n=>n>=3))
