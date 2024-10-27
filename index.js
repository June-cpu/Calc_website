// Function to calculate GPA
function calculateGPA() {
    const gradePoints = {
        'A+': 4.0, 'A': 4.0, 'A-': 3.7,
        'B+': 3.3, 'B': 3.0, 'B-': 2.7,
        'C+': 2.3, 'C': 2.0, 'C-': 1.7,
        'D+': 1.3, 'D': 1.0, 'F': 0.0
    };
    let totalPoints = 0;
    let totalCredits = 0;

    const rows = document.querySelectorAll(".inputRow");
    rows.forEach(row => {
        const grade = row.querySelector(".classGrade").value;
        const credit = parseFloat(row.querySelector(".classCredit").value);

        if (grade in gradePoints && !isNaN(credit)) {
            totalPoints += gradePoints[grade] * credit;
            totalCredits += credit;
        }
    });

    const gpa = totalCredits ? (totalPoints / totalCredits).toFixed(2) : 0;
    document.querySelector(".showResult").textContent = `GPA: ${gpa}`;
}

// Function to add a new row for additional courses
function addRow() {
    const inputBoxes = document.querySelector(".inputBoxes");
    const newRow = document.createElement("div");
    newRow.classList.add("inputRow");

    newRow.innerHTML = `
        <input class="className" placeholder="Course Name" />
        <select class="classGrade">
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="F">F</option>
        </select>
        <input class="classCredit" placeholder="Credits (e.g., 4)" />
        <button class="button" onclick="removeRow(this)">X</button>
    `;

    inputBoxes.appendChild(newRow);
}

// Function to remove a row
function removeRow(button) {
    const row = button.closest(".inputRow");
    row.remove();
}
