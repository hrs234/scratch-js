/*
Longest Word

Have the function LongestWord(sen) take the sen parameter 
being passed and return the longest word in the string. 
If there are two or more words that are the same length, 
return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 
Words may also contain numbers, for example "Hello world123 567"

Example:

Input: "fun&!! time"
Output: time

Input: "I love dogs"
Output: love
*/

function mySplit (value = "", delimiter = " ") {
  /* 
  Algorithm of mySplit()

  1. iterate the string value character per character (whitespace included) by using length
  2. when iteration check the character is contain an whitespace ? if yes push the empty array and add the counter variable
  3. if not join the character in split array by using index number from counter variable
  4. when iteration complete print the split array variable
  */

  let splitted = [''];  
  let j = 0;

  for (let i = 0; i < value.length; i++) {
    if (value.charAt(i) === delimiter) {
      j++;
      splitted.push('');
      continue;
    } 
    splitted[j] += value.charAt(i);
  }
  return splitted;
}

function LongestWord(sen) { 
  /* 
  Algorithm of longestword()

  1. split the string first by whitespace
  2. iterate the splitted variable
  3. in iteration make sure the word cleaned from non alphabetical character (e.g. number, @, &, *, ^, etc) by regex function
  4. make an conditional when an word character length is more than an longest variable string then replace the value of longest variable
  5. when iteration complete print the longest variable
  */
  const splitData = mySplit(sen, " ");
  let longest = "";

  splitData.map((val, idx) => {
    const cleanWord = val.replace(/[^\w\s]/gi, '');
    if (longest.length < cleanWord.length) {
      longest = cleanWord;
    }
  });

  // code goes here  
  return longest;
}
   
// keep this function call here 
console.log(LongestWord("i love dogs"));