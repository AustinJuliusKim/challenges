# Challenges Repository

## Taboola.js
### Create an algorithm that replaces the top 25 most COMMON words based on their FREQUENCY with their count inline. Your code should be pasteable and runnable in the browser console.

[https://en.wikipedia.org/wiki/Programming_language](https://en.wikipedia.org/wiki/Programming_language)
* A word may NOT include HTML tags, JavaScript code, numbers, spaces or punctation.
* A word may NOT be from the top 100 most common words in english and you may NOT hardcode
[https://en.wikipedia.org/wiki/Most_common_words_in_English](https://en.wikipedia.org/wiki/Most_common_words_in_English)
* Remove common words "are", "is", "where", "was" and any single characters
// You may use jQuery and JavaScript
// Code should be runnable on Chrome or Firefox browser
* (ex. input) A programming language is a formal computer language designed to communicate instructions to a machine, particularly a computer. Programming language can be used to create computer programs to control the behavior of a machine or computer, or to express algorithms.
* (ex. output 1) A 2 3 is a formal 4 3 designed to communicate instructions to a 2, particularly a 4. 2 3 can be used to create 4 programs to control the behavior of a 2 or 4, or to express algorithms.

####How I break this into smaller parts:
Edit: I realize I have to dig down a little deeper...
```
$('body > #content > #bodyContent > #mw-content-text').find('p').text()
```
1. Phase 1: Get Data
..* Using jQuery to parse HTML, this would return a LARGE string
2. Phase 2: Find matches and sort into an array
3. Phase 3: Get Frequencies of matches and store in an object to access using words as keys
4. Phase 4: Take most common matches and inject back into document
  * Haven't quite wrapped my head around this one...
  * Somewhere between these phases would have to filter out common words like "the", "a", "is", etc.
