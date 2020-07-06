function killVowels(message, arr) {
    let result = '';
    for (let i = 0; i < message.length; i++){ 
      if (isVowel(message[i], arr)) result += message[i];
    }
    return result;
}
function isVowel(el, arr) {
    for (let i = 0; i < arr.length; i++){
      if (el === arr[i]) return false;
    }
    return true;
}
const vowelsArr = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
const message = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur esse quod labore in minima, maiores reiciendis quidem quo unde culpa?'
console.log(killVowels(message, vowelsArr));