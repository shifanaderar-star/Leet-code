/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max=0;
    sentences.forEach((sent)=>{
       let a= sent.split(" ")
       b=a.length;
       if(b>max){
        max=b;
       }
    })

    return max;
};