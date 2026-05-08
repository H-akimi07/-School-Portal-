function enrollStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let grade = document.getElementById("grade").value;

  let error = document.getElementById("error");
  let welcome = document.getElementById("welcome");
  let summary = document.getElementById("summary");

  if (name === "" || age === "" || grade === "") {
    error.textContent = "All fields are required!";
    return;
  }

  error.textContent = "";

  // Student Object (IMPORTANT requirement)
  let student = {
    name: name,
    age: age,
    grade: grade
  };

  welcome.textContent = `Welcome ${student.name} to Bright Future School!`;

  summary.innerHTML = `
    <h3>Student Summary</h3>
    <p>Name: ${student.name}</p>
    <p>Age: ${student.age}</p>
    <p>Grade: ${student.grade}</p>
  `;
}

// PROFILE PAGE LOGIC

document.addEventListener("DOMContentLoaded", function () {

  let emailBtn = document.getElementById("emailBtn");
  let phoneBtn = document.getElementById("phoneBtn");
  let hideBtn = document.getElementById("hideBtn");
  let updateBtn = document.getElementById("updateBtn");

  if (emailBtn) {
    emailBtn.addEventListener("click", function () {
      document.getElementById("contact").textContent =
        "Email: student@school.com";
    });
  }

  if (phoneBtn) {
    phoneBtn.addEventListener("click", function () {
      document.getElementById("contact").textContent =
        "Phone: +93 700 000 000";
    });
  }

  if (hideBtn) {
    hideBtn.addEventListener("click", function () {
      document.getElementById("contact").textContent = "";
    });
  }

  if (updateBtn) {
    updateBtn.addEventListener("click", function () {
      let newStatus = document.getElementById("newStatus").value;

      if (newStatus !== "") {
        document.getElementById("status").textContent = newStatus;
      }
    });
  }

});


// ---------------- COURSES PAGE ----------------

let courses = [
  { name: "Math", instructor: "Mr. A", grade: "10", desc: "Basic Math" },
  { name: "Physics", instructor: "Mr. B", grade: "11", desc: "Intro Physics" }
];

function renderCourses(list = courses) {
  let container = document.getElementById("coursesContainer");
  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    container.innerHTML += `
      <div class="card">
        <h3>${list[i].name}</h3>
        <p>${list[i].desc}</p>
        <button onclick="showDetails(${i})">View Course Details</button>
      </div>
    `;
  }
}

renderCourses();

function showDetails(i) {
  document.getElementById("details").innerHTML =
    `<h3>${courses[i].name}</h3>
     <p>${courses[i].desc}</p>
     <p>Instructor: ${courses[i].instructor}</p>`;
}

function addCourse() {
  let name = document.getElementById("cname").value;
  let instructor = document.getElementById("cinstructor").value;
  let grade = document.getElementById("cgrade").value;
  let desc = document.getElementById("cdesc").value;

  courses.push({ name, instructor, grade, desc });
  renderCourses();
}

function filterCourses(grade) {
  if (grade === "all") {
    renderCourses();
  } else {
    let filtered = courses.filter(c => c.grade === grade);
    renderCourses(filtered);
  }
}

// ---------------- CONTACT PAGE ----------------
function sendMessage() {
  let name = document.getElementById("fname").value;
  let email = document.getElementById("femail").value;
  let msg = document.getElementById("fmsg").value;

  if (name === "" || email === "" || msg === "") {
    alert("Fill all fields!");
    return;
  }

  document.getElementById("msg").textContent = "Message sent successfully!";
}






