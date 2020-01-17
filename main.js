/*
[x] Create an addExcitement function 
[x] that should console.log() rows of words. 
[x] It should take an array containing the words of a sentence 
[x] and output them in the developer console.
*/

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    [x] The addExcitement function should be an impure function, 
    [x] and accept the array as the sole argument. 
    [x] It should iterate over the array
    [x] and output the words to the browser console.
*/

function addExcitement (wordAry) {
    let buildMeUp = "";
    for (let i = 0; i < wordAry.length; i++) {
        buildMeUp += wordAry[i] + " ";
        console.log(buildMeUp);
    }

}

addExcitement(sentence)