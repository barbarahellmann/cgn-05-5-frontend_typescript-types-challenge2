type Student= {
    firstName: string,
    lastName: string,
    age: number,
    grades?: (number | string | undefined)[] // Allow strings, numbers and undefined as grades
}

// type grades = 1 | 2 | 3 | 4 | 5 | 6;

const student1: Student = {
    firstName: "Peter",
    lastName: "Pan",
    age: 12,
    grades: [2,'A',undefined,1,"B",undefined]
}

const student2: Student = {
    firstName: "Branden",
    lastName: "Burg",
    age: 34,
    grades: ["D",6,2,undefined,"B"]
}

const student3: Student = {
    firstName: "Holger",
    lastName: "Hauer",
    age: 18,
    grades: ["C",undefined,undefined,2, "A"]
}


// Bonus
function charLength(student:Student): number {
    return student.firstName.length + student.lastName.length + 4
    }



// Step 1: Write a function that outputs a student with their grades, where a student should be output with first name, last name, age, and a list of grades.

function studentOutput(student: Student): void {
    console.log(student.firstName + " " + student.lastName + " (" + student.age + ")")
    for (let i:number = 0; i <charLength(student); i++) {console.log("=")}  // 30 sind zu viel
    console.log("Noten: " + student.grades.map(grade => grade === undefined ? '*' : grade))
    console.log("Notendurchschnitt: ")
    console.log(" ")
}

// Step 4: Print a list of all students in the console


studentOutput(student1);
studentOutput(student2);
studentOutput(student3);