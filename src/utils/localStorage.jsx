// localStorage.clear();

const employees = [
  {
    id: 1,
    firstName: "Shivansh",
    email: "e@e.com",
    password: "123",
    taskCount: { active: 2, new: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Submit Report",
        description: "Submit the weekly report to the manager.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDate: "2024-10-24",
        category: "Reporting",
      },
      {
        title: "Client Meeting",
        description: "Attend a meeting with the client for project updates.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2024-10-25",
        category: "Meetings",
      },
      {
        title: "Code Review",
        description: "Review the code for the new module.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2024-10-22",
        category: "Development",
      },
    ],
  },
  {
    id: 2,
    firstName: "Vedika",
    email: "employee2@example.com",
    password: "123",
    taskCount: { active: 1, new: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Database Optimization",
        description: "Optimize the database for faster queries.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2024-10-23",
        category: "Database",
      },
      {
        title: "UI Testing",
        description: "Test the user interface for the mobile app.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2024-10-20",
        category: "Testing",
      },
    ],
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCount: { active: 2, new: 1, completed: 0, failed: 1 },
    tasks: [
      {
        title: "Update Documentation",
        description: "Update the project documentation with recent changes.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDate: "2024-10-21",
        category: "Documentation",
      },
      {
        title: "Team Meeting",
        description: "Discuss project milestones with the team.",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
        taskDate: "2024-10-20",
        category: "Meetings",
      },
      {
        title: "Feature Deployment",
        description: "Deploy the new feature to the production environment.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDate: "2024-10-25",
        category: "Deployment",
      },
    ],
  },
  {
    id: 4,
    firstName: "Ishika",
    email: "employee4@example.com",
    password: "123",
    taskCount: { active: 2, new: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "API Integration",
        description: "Integrate third-party APIs for data fetching.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2024-10-24",
        category: "Development",
      },
      {
        title: "Backend Testing",
        description: "Perform testing on the backend services.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2024-10-22",
        category: "Testing",
      },
      {
        title: "Security Audit",
        description: "Conduct a security audit of the application.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDate: "2024-10-26",
        category: "Security",
      },
    ],
  },
  {
    id: 5,
    firstName: "Kabir",
    email: "employee5@example.com",
    password: "123",
    taskCount: { active: 1, new: 1, completed: 0, failed: 1 },
    tasks: [
      {
        title: "Design Mockup",
        description: "Create mockups for the upcoming product feature.",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2024-10-23",
        category: "Design",
      },
      {
        title: "Project Retrospective",
        description: "Conduct a retrospective meeting with the project team.",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskDate: "2024-10-21",
        category: "Meetings",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};

