let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
Add logic to addExcitement that 
[x] places an exclamation point (!) after every third word. 
*/

function addExcitement (wordAry) {
    let buildMeUp = "";
    for (let i = 0; i < wordAry.length; i++) {
        if ((i + 1) % 3 === 0) {
            buildMeUp += wordAry[i] + "! ";
        } else {
            buildMeUp += wordAry[i] + " ";
        } 
        console.log(buildMeUp);
    }
}

addExcitement(sentence)