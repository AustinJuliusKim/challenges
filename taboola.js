// Create an algorithm that replaces the top 25 most COMMON words based on their FREQUENCY with their count inline. Your code should be pasteable and runnable in the browser console.
// https://en.wikipedia.org/wiki/Programming_language
// A word may NOT include HTML tags, JavaScript code, numbers, spaces or punctation.
// A word may NOT be from the top 100 most common words in english and you may NOT hardcode
// https://en.wikipedia.org/wiki/Most_common_words_in_English
// Remove common words "are", "is", "where", "was" and any single characters
// You may use jQuery and JavaScript
// Code should be runnable on Chrome or Firefox browser
// (ex. input) A programming language is a formal computer language designed to communicate instructions to a machine, particularly a computer. Programming language can be used to create computer programs to control the behavior of a machine or computer, or to express algorithms.
// (ex. output 1) A 2 3 is a formal 4 3 designed to communicate instructions to a 2, particularly a 4. 2 3 can be used to create 4 programs to control the behavior of a 2 or 4, or to express algorithms.
// (ex. output 2) A 224 172 is a formal constructed 172 designed to communicate instructions to a machine, particularly a 45. 224 206 can be 29 to create 34 to control the behavior of a machine or to ex18 algorithms.

const exampleInput2 = "A programming language is a formal computer language or constructed language designed to communicate instructions to a machine, particularly a computer. Programming languages can be used to create programs to control the behavior of a machine or to express algorithms. The earliest known programmable machine preceded the invention of the digital computer and is the automatic flute player described in the 9th century by the brothers Musa in Baghdad, at the time a major centre of knowledge.";

const exampleInput = "A programming language is a formal computer language designed to communicate instructions to a machine, particularly a computer. Programming language can be used to create computer programs to control the behavior of a machine or computer, or to express algorithms.";

var output,
    frequencies = {};

function histogram(str){
  // variables
  var target = str,
      repeatStore = [],
      a, b, n, m;
  // helper functions
  target = parseStringToArray(target);
  function lowerCase(str){
    // Makes everything lower case
    return str.toLowerCase();
  }
  function parseStringToArray(str){
    // Parses out any periods or commas and splits into array
    str = str.replace(/[\.\,]/g, "").split(" ");
    str = str.map(lowerCase);
    return str
  }
  function findMatching(){
    // Loops through array to find matching words
    outerloop: for (n = 0; n < target.length; n++){
      // controls a while innerloop searches for match to a
      a = target[n];
        innerloop: for (m = (n+1); m < target.length; m++){
          // cycles through b to make match for a
          b = target[m];
          if (a == b){
            repeatStore.push(a);
            break innerloop;
          } else {
            // continue on to next
          }
        }
      continue;
    }
    output = repeatStore;
  }
  findMatching();
  console.log(output);
  return false;
}
histogram(exampleInput2);

function getFrequency(arr, cutOff){
    var words = arr,
    word, i, count;

  for (i = 0; i < words.length; i++){
    word = words[i];
    frequencies[word] = frequencies[word] || 0;
    frequencies[word]++;
  }

  words = Object.keys(frequencies);
  // Sorts by highest frequency
  return words.sort(function(a,b) {
    return frequencies[b] - frequencies[a];
  }).slice(0,cutOff);
}

getFrequency(output, 10);


// TOOLS
console.log(a + " - a + " + n);
console.log(b + " - b + " + m);
