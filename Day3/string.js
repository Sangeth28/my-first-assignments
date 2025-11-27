//Example 1
let s = 'Hello world';
console.log(s.length);
console.log(s);
let str = s.trim().split(" ");
console.log(str);
console.log(str[str.length - 1]);

function getLastword(scentence){
    const str1 = scentence.trim().split(" ");
    return str1[str1.length - 1].length
}

console.log(getLastword('Hello world'));

//Example 2
let t = " fly me to the moon "
let str2 = t.trim().split(" ");
console.log(str2[str2.length - 1].length);

//Example 3
  function isAnagram(word1,word2){
    const s3 = word1.split("").sort().join("");
    const s4 = word2.split("").sort().join("");
    console.log(s3);
    console.log(s4);
    if (s3===s4) {
        return true;
    }
}

console.log(isAnagram('listen','silent'));




