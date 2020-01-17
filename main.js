let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
[x] Watch the video
[x] rewrite addExcitement using arrow syntax
*/

let addExcitement = (wordAry, punctuation, num) => {
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