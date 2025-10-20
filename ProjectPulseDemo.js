// ProjectPulse Demo Script
// Displays project updates dynamically on a webpage

const projects = [
  { name: "Website Redesign", status: "In Progress" },
  { name: "Client Migration", status: "Completed" },
  { name: "Server Setup", status: "Pending" }
];

function displayProjects() {
  const projectList = document.getElementById("projectList");
  projects.forEach(project => {
    const li = document.createElement("li");
    li.textContent = `${project.name} - ${project.status}`;
    projectList.appendChild(li);
  });
}

// Call function on page load
window.onload = displayProjects;
