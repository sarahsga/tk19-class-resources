function signUp() {
    let isAgreed = document.querySelector('#terms').checked;
    console.log(typeof isAgreed);

    if (isAgreed == true) {
        alert("Congratulations! Your account has been created!");
    } else {
        alert("ERROR! PLEASE AGREE TO TERMS!");
    }

    /*

    agr user ne terms agree kiye hain, toh signUp kr do
    warna, alert karo keh agree karain

    */


}

function login() {
    let inputVal = document.querySelector('input').value;
    console.log(typeof inputVal);
}


/*

Data = Information


Data Types
- number
- string
- boolean
- undefined / null (pata nahi)


*/

// Distance is 10km
let distance = 10;

// number of students in cl-4 is 50
let countStudents = 50;

// My name is sarah
let name = "Sarah";

// This program name is Tech Karo
let program = "Tech Karo";

// Kal baarish nahi ho gi
let isRaining = false;

// Kya practice ho rhi hai? Haan
let isPractice = true;

// Kya pakistan world cup jeetay ga
let hasWon;


// let distance = 12;
// const distanceBetweenSunAndEarth = 1000000;

// console.log(distance);

// distance = 11;