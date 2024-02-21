class Student {
  constructor(id, name, dob, className, gpa) {
      this.id = id;
      this.name = name;
      this.dob = dob;
      this.className = className;
      this.gpa = gpa;
  }
}

function submitNumStudents() {
  var numStudents = document.getElementById("numStudents").value;
  var studentFields = document.getElementById("studentFields");
  var studentContainer = document.getElementById("studentContainer");

  studentContainer.innerHTML = '';

  for (var i = 1; i <= numStudents; i++) {
      var studentDiv = document.createElement("div");

      var studentIdLabel = document.createElement("label");
      studentIdLabel.textContent = "ID " + i + ": ";
      var studentIdInput = document.createElement("input");
      studentIdInput.type = "text";
      studentIdInput.name = "studentId" + i;

      var fullNameLabel = document.createElement("label");
      fullNameLabel.textContent = "Full Name " + i + ": ";
      var fullNameInput = document.createElement("input");
      fullNameInput.type = "text";
      fullNameInput.name = "fullName" + i;

      var dobLabel = document.createElement("label");
      dobLabel.textContent = "DOB " + i + ": ";
      var dobInput = document.createElement("input");
      dobInput.type = "date";
      dobInput.name = "dob" + i;

      var classLabel = document.createElement("label");
      classLabel.textContent = "Class " + i + ": ";
      var classInput = document.createElement("input");
      classInput.type = "text";
      classInput.name = "class" + i;

      var gpaLabel = document.createElement("label");
      gpaLabel.textContent = "GPA Grade " + i + ": ";
      var gpaInput = document.createElement("input");
      gpaInput.type = "number";
      gpaInput.step = "0.01";
      gpaInput.min = "0";
      gpaInput.max = "4";
      gpaInput.name = "gpa" + i;

      studentDiv.appendChild(studentIdLabel);
      studentDiv.appendChild(studentIdInput);
      studentDiv.appendChild(fullNameLabel);
      studentDiv.appendChild(fullNameInput);
      studentDiv.appendChild(dobLabel);
      studentDiv.appendChild(dobInput);
      studentDiv.appendChild(classLabel);
      studentDiv.appendChild(classInput);
      studentDiv.appendChild(gpaLabel);
      studentDiv.appendChild(gpaInput);

      studentContainer.appendChild(studentDiv);
  }

  studentFields.style.display = "block";
}

function submitStudents() {
  var numStudents = document.getElementById("numStudents").value;
  var students = [];

  for (var i = 1; i <= numStudents; i++) {
      var id = document.getElementsByName("studentId" + i)[0].value;
      var name = document.getElementsByName("fullName" + i)[0].value;
      var dob = document.getElementsByName("dob" + i)[0].value;
      var className = document.getElementsByName("class" + i)[0].value;
      var gpa = document.getElementsByName("gpa" + i)[0].value;

      var student = new Student(id, name, dob, className, gpa);
      students.push(student);
  }

  var displayArea = document.getElementById("studentInfoDisplay");
  displayArea.innerHTML = "";

  for (var j = 0; j < students.length; j++) {
      var studentInfo = document.createElement("p");
      studentInfo.textContent = "Student " + (j + 1) + ": " +
          "ID: " + students[j].id + ", " +
          "Name: " + students[j].name + ", " +
          "DOB: " + students[j].dob + ", " +
          "Class: " + students[j].className + ", " +
          "GPA: " + students[j].gpa;
      displayArea.appendChild(studentInfo);
  }
}