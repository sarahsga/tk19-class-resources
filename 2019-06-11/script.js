let bodyElement = document.querySelector("body");


if (new Date().getHours() >= 17 && new Date().getMinutes() >= 50) {
    chooseDark();
} else {
    chooseLight();
}

/*

    AND &&

    agr 20 baj chukay hain toh chooseDark()
    warna chooseLight()

    agr 
    - hours 17 ya uss se zyada AND
    new Date().getHours >= 17

    - minutes 50 ya uss se zyada
    new Date().getMinutes() >= 50
    
    baj chukay hain toh chooseDark()
    warna chooseLight()

*/



function chooseDark() {
    bodyElement.classList.remove("light");
    bodyElement.classList.add("dark");
}

function chooseLight() {
    bodyElement.classList.remove("dark");
    bodyElement.classList.add("light");
}


function changeTitle() {
    document.querySelector("h1").style.fontFamily = "Cursive";
}

