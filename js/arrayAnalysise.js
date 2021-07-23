
function arrayAnalysise(array){
  let object = {}
  array.sort()
  let sum =0;
  let max =array[array.length-1];
  let min = array[0]
  for(let i=0;i<array.length;i++){
    sum+=array[i]
  }
  let average=sum/array.length
  object.average=average;
  object.length=array.length

  object.min=min
  object.max=max


  return object;
}
module.exports = arrayAnalysise;
