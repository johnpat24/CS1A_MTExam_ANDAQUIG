// Arrays to store enrolled students
let DSA = [];
let WebDev = [];

// Main menu for subject selection
function mainMenu() {
    while (true) {
        let subject = prompt("Choose a subject:\n(A) DSA\n(B) WebDev\n(C) Exit").toUpperCase();
        if (subject === "A") handleSubject(DSA, "DSA");
        else if (subject === "B") handleSubject(WebDev, "WebDev");
        else if (subject === "C") return exitProgram();
        else alert("Invalid choice. Try again.");
    }
}

// Menu for enrolling or unenrolling students
function handleSubject(subjectArray, subjectName) {
    while (true) {
        let action = prompt(`Subject: ${subjectName}\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit`).toUpperCase();
        
        if (action === "A") enrollStudent(subjectArray, subjectName);
        else if (action === "B") unenrollStudent(subjectArray, subjectName);
        else if (action === "C") return;
        else if (action === "D") return exitProgram();
        else alert("Invalid choice. Try again.");
    }
}

// Enroll a student
function enrollStudent(subjectArray, subjectName) {
    let student = prompt("Enter student's name:");
    subjectArray.push(student);
    alert(`${student} enrolled in ${subjectName}.`);
}

// Unenroll a student
function unenrollStudent(subjectArray, subjectName) {
    if (subjectArray.length === 0) {
        alert(`No students enrolled in ${subjectName}.`);
        return;
    }
    
    alert(`Enrolled students: ${subjectArray.join(", ")}`);
    let student = prompt("Enter name to unenroll:");

    let index = subjectArray.indexOf(student);
    if (index !== -1) {
        subjectArray.splice(index, 1);  // Remove the student
        alert(`${student} unenrolled from ${subjectName}.`);
    } else {
        alert(`${student} not found.`);
    }
}

// Exit the program and display enrolled students
function exitProgram() {
    alert(`Final Enrollment:\nDSA: ${DSA.join(", ") || "None"}\nWebDev: ${WebDev.join(", ") || "None"}`);
}

// Start the program
mainMenu();