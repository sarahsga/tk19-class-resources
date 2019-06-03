// Pseudo code (Code in your own words)

/*

Problem Statement: Show user input inside heading

   1. Get input element on which user typed something
   2. Get value of input
   3. Get heading element
   4. Change heading content

*/


/*

   - How to get an HTML element
   - How to get an attribute of an html element
   - How to get content of an HTML element

*/

function changeName() {

   // 1. Get input element
   // 2. Get value of input element
   // 3. Get heading
   // 4. Change heading content

   document.querySelector('h1 > span').innerHTML = document.querySelector('input').value;

}

function changeColor() {
   document.querySelector('h1').style = 'color: blue;';
}

function clearColor() {
   document.querySelector('h1').style = 'color: black;';
}


function changeBodyColor() {
   /*

      1. get input element
      2. get value of input element
      3. get body element
      4. change inline style background-color to input value

   */

   document.querySelector('body').style = "background-color: " + document.querySelector('input').value;
}