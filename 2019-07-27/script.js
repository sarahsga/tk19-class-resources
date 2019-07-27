let students = [
    {
      name: "Amna",
      gender: "f",
      dob: new Date("02-04-1990"),
      address: {
        ilaqa: "Gulistan-e-Johar",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 47114
      },
      phoneNo: "0331-2324243",
      admissionTestScore: 56,
      hasInternet: true,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: false
    },
    {
      name: "Hadia",
      gender: "f",
      dob: new Date("05-15-1984"),
      address: {
        ilaqa: "Lyari",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 75660
      },
      phoneNo: "0345-3452953",
      admissionTestScore: 48,
      hasInternet: false,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: true
    },
    {
      name: "Ahmed",
      gender: "m",
      dob: new Date("06-27-2002"),
      address: {
        ilaqa: "University Road",
        city: "Quetta",
        country: "Pakistan",
        postalCode: 82215
      },
      phoneNo: "0333-0124325",
      admissionTestScore: 33,
      hasInternet: true,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: false
    },
    {
      name: "Fariha",
      gender: "f",
      dob: new Date("09-13-1998"),
      address: {
        ilaqa: "University Road",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 82215
      },
      phoneNo: "0331-9432532",
      admissionTestScore: 33,
      hasInternet: true,
      hasComputer: false,
      hasJob: false,
      hasSchoolBefore: false
    },
    {
      name: "Abdullah",
      gender: "m",
      dob: new Date("01-24-1972"),
      address: {
        ilaqa: "Bazar Colony",
        city: "Lahore",
        country: "Pakistan",
        postalCode: 32212
      },
      phoneNo: "0345-9912121",
      admissionTestScore: 33,
      hasInternet: false,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: true
    },
    {
      name: "Ramsha",
      gender: "f",
      dob: new Date("07-23-1997"),
      address: {
        ilaqa: "Bazar Colony",
        city: "Lahore",
        country: "Pakistan",
        postalCode: 32212
      },
      phoneNo: "0345-9912121",
      admissionTestScore: 33,
      hasInternet: false,
      hasComputer: false,
      hasJob: true,
      hasSchoolBefore: true
    }
  ];

  // function declaration
function calculateAge(dateOfBirth) {
    let dobYear = dateOfBirth.getFullYear();
    let todayYear = new Date().getFullYear();

    let age = todayYear - dobYear;

    let dobMonth = dateOfBirth.getMonth();
    let todayMonth = new Date().getMonth();

    if (todayMonth < dobMonth) {
        age--;
    } else if (todayMonth === dobMonth) {
        let todayDate = new Date().getDate();
        let dobDate = dateOfBirth.getDate();

        if (todayDate < dobDate) {
            age--;
        }
    }

    return age;
}

// Question # 9
for (let i = 0 ; i < students.length; i++) {
    let studentAge = calculateAge(students[i].dob);

    console.log(`${students[i].name}'s age is ${studentAge} years`);
}
// ------------------

// Question # 10

let oldestStudent = students[0];

for (let i = 1; i < students.length; i++) {

    let oldestStudentAge = calculateAge(oldestStudent.dob);

    let currentStudentAge = calculateAge(students[i].dob);

    if ( currentStudentAge >  oldestStudentAge ) {
        oldestStudent = students[i];
    }
}

console.log("");

console.log(`Oldest student is: ${oldestStudent.name}`);

// _______________


