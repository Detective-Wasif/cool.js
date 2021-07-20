function transpose(){
  return this[0].map((_,i)=>this.map(r=>r[i]))
}

function range(stop,start=0,step=1){
  return [...Array(stop-start).keys()].fill(start).map((x,i)=>x+i*step).filter(x=>x<stop)
}


Array.prototype.transpose=transpose

console.log(JSON.stringify([[1,2,3],[1,2,3],[1,2,3]].transpose()))
