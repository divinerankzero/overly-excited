let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
Add a new argument to the function 
so that a developer can specify 
which character should be displayed 
instead of it always being an exclamation point.
*/

function addExcitement (wordAry, punctuation) {
    let buildMeUp = "";
    for (let i = 0; i < wordAry.length; i++) {
        if ((i + 1) % 3 === 0) {
            buildMeUp += `${wordAry[i]}${punctuation} `;
        } else {
            buildMeUp += `${wordAry[i]} `;
        } 
        console.log(buildMeUp);
    }
}

addExcitement(sentence, "?")