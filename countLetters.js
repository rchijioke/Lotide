

const assertEqual = require("./assertEqual")

/**
 * the countLetters function should take in a sentence (as a string) and then return a count of each of the letters in that sentenc
 * @param {*} sentence 
 * @returns 
 */
const countLetters = function(sentence){
      const result = {}
      for(let i=0; i< sentence.length; i++){
        if(result[sentence[i]]){
          result[sentence[i]] = result[sentence[i]] + 1;
        } else {
          result[sentence[i]] = 1;
        }
      }
      return result;
  c}
  console.log(countLetters("lighthouse labs"))