
function caesar(string,key){
  let s=""
    let dictionary = ["a","b","c",'d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let pos = key;
    for(i=0;i<string.length;i++){
      for(let j=0;j<dictionary.length;j++){
        if(string[i]===' '){
          s+=' '
          break
        }
        if(string[i]===dictionary[j]){
          if((j+key)>dictionary.length-1){
             s+=dictionary[(j+key)-dictionary.length]
             break;
          }
          s+=dictionary[j+key]
          break;
        }
      }
    }
    return s;
}
module.exports = caesar;
