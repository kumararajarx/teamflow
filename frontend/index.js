const projects = [
  {
    id: 101,
    name: "Website Redesign",
    status: "active",
    taskCount: 12,
  },
  {
    id: 102,
    name: "Mobile App",
    status: "completed",
    taskCount: 20,
  },
  {
    id: 103,
    name: "Internal Portal",
    status: "active",
    taskCount: 8,
  },
];

//function getProjectById(projects, id) {} - find(array, condition) - returns the first element that satisfies the condition
//function getActiveProjects(projects) {} - filter(array, condition) - returns a new array with all elements that satisfy the condition
//fuction getTotalTaskCount(projects) {} - reduce(array, callback, initialValue) - returns a single value by applying the callback function to each element in the array

//HW - 03-10-2026
const projectsoNE = [
  { id: 101, name: "Website Redesign", status: "active", taskCount: 12 },
  { id: 102, name: "Mobile App", status: "completed", taskCount: 20 },
  { id: 103, name: "Internal Portal", status: "active", taskCount: 8 },
];
// 1. Get all project names
// 2. Get active projects
// 3. find one project
// 4. calculate total tasks
// 5. Check whether any projects has more than 15 tasks
// 6. Sort projects by task count in descending or ascending  order
// 7 Build a dashbboard message `you have ${activeProjetcs.length} active projects and ${totalTaskCount} tasks in total`

// ------------------------
// |  Active Projects: it's count
// |
// ----------------------
// ------------------------
// | Total Tasks: it's count
// |
// ----------------------
