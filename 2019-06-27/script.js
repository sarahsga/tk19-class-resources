let messages = [
    {
        name: "Tuba",
        number: '0327532658237',
        time: "5:22",
        isRead: false,
        countUnread: 2,
        textFirstLine: "cbxnvbcxn",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    },
    {
        name: "Sadaffe",
        number: '784389437698',
        time: "6:00",
        isRead: true,
        countUnread: 0,
        textFirstLine: "shgxf jdsfkdfjsg d",
    }
]



let names = ["Tuba", "Sadaffe Abid", "Somia", "fatima", "Sara", "Sarah", "Reena", "Mahnoor", "Raiba", "Aster", "Safina", "Khadija", "Qaiser", "Taqdees", "Armia", "Kokab", "Maria", "Sehrish", "Mahnoor", "Ahsan", "Najam", "Iqra", "Alaina"];

for (let i = 0; i < messages.length ; i++) {

    document.querySelector('ul').innerHTML 
    += `
        <li>
            <h1>` + messages[i].name + `</h1>
            <p>` + messages[i].textFirstLine + `</p>
            <p>` + messages[i].time + `</p>
            <span>` + messages[i].countUnread + `</span>
        </li>
    `;
}




// sum = sum + 1;
// sum = sum + 2;
// sum = sum + 3;
// sum = sum + 4;
// sum = sum + 5;
// sum = sum + 6;
// sum = sum + 7;
// sum = sum + 8;
// sum = sum + 9;
// sum = sum + 10;

// console.log(sum);