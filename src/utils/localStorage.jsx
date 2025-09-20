const employees = [
  {
    id: 1,
    name: "Arjun",
    email: "arjun@company.com",
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
    name: "Priya",
    email: "priya@company.com",
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
    name: "Rohan",
    email: "rohan@company.com",
    password: "123",
    taskCount: { active: 1, new: 2, completed: 3, failed: 1 },
    tasks: [
      {
        title: "Frontend Development",
        description: "Develop new user interface components.",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskDate: "2024-10-26",
        category: "Development",
      },
      {
        title: "Code Documentation",
        description: "Document the new API endpoints.",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2024-10-27",
        category: "Documentation",
      },
      {
        title: "Bug Fixes",
        description: "Fix critical bugs in the payment system.",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskDate: "2024-10-28",
        category: "Development",
      },
    ],
  },
  {
    id: 4,
    name: "Ananya",
    email: "ananya@company.com",
    password: "123",
    taskCount: { active: 0, new: 0, completed: 2, failed: 0 },
    tasks: [
      {
        title: "Marketing Campaign",
        description: "Launch social media marketing campaign.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2024-10-20",
        category: "Marketing",
      },
      {
        title: "Content Creation",
        description: "Create blog posts for company website.",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskDate: "2024-10-21",
        category: "Content",
      },
    ],
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  // Check if we already have data stored
  const existingEmployees = localStorage.getItem("employees");
  const existingAdmin = localStorage.getItem("admin");
  
  if (!existingEmployees) {
    // First time - set dummy data
    localStorage.setItem("employees", JSON.stringify(employees));
  } else {
    // Don't overwrite existing data if it already exists
    // The existing data might have updated tasks, so preserve it
  }
  
  if (!existingAdmin) {
    localStorage.setItem("admin", JSON.stringify(admin));
  }
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || [];
  return { employees, admin };
};

export const addEmployee = (newEmployee) => {
  const { employees } = getLocalStorage();
  
  // Check if email already exists
  const existingEmployee = employees.find(emp => emp.email === newEmployee.email);
  if (existingEmployee) {
    return { success: false, message: "Email already exists" };
  }
  
  // Generate new ID
  const newId = employees.length > 0 ? Math.max(...employees.map(emp => emp.id)) + 1 : 1;
  
  // Setup new employee with empty task list
  const employeeData = {
    id: newId,
    name: newEmployee.name,
    email: newEmployee.email,
    password: newEmployee.password,
    taskCount: { active: 0, new: 0, completed: 0, failed: 0 },
    tasks: []
  };
  
  // Add to employees array
  const updatedEmployees = [...employees, employeeData];
  
  // Update localStorage
  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  
  return { success: true, message: "Account created successfully", employee: employeeData };
};


