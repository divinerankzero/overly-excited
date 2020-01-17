let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
Add a new argument to the function 
so that a developer can specify 
how many times the special character should be added.
*/

function addExcitement (wordAry, punctuation, num) {
    let buildMeUp = "";
    for (let i = 0; i < wordAry.length; i++) {
        if ((i + 1) % 3 === 0) {
            buildMeUp += `${wordAry[i]}${punctuation.repeat(num)} `;
        } else {
            buildMeUp += `${wordAry[i]} `;
        } 
        console.log(buildMeUp);
    }
}

addExcitement(sentence, "*", 4);