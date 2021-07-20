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

arrfuncs=['transpose','chunk','compact','cat']
arrfuncs.forEach(func=>eval('Array.prototype.'+func+'='+func))


// Tests below
console.log(JSON.stringify([[1,2,3],[1,2,3],[1,2,3]].transpose()))
console.log(JSON.stringify([1,2,3,4,5].chunk(2)))
console.log(JSON.stringify([1,2,3,false,''].compact()))
a=[1,2,3]
a.cat(4,[5])
console.log(JSON.stringify(a))
a.pop()
