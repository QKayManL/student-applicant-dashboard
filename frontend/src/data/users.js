// src/data/users.js

export const users = [
  {
    id: 0,
    username: "admin",
    password: "admin9090",
    role: "admin"
  },

  {
    id: 1,
    username: "student1",
    password: "123ab",
    role: "student",
    name: "John Mensah",
    programme: "Computer Science",
    status: "Pending",
    courses: [
      { name: "JavaScript", progress: 70 },
      { name: "React", progress: 45 },
      { name: "Node.js", progress: 30 }
    ]
  },

  {
    id: 2,
    username: "student2",
    password: "123bc",
    role: "student",
    name: "Ama Serwaa",
    programme: "Data Science",
    status: "Approved",
    courses: [
      { name: "Python", progress: 80 },
      { name: "Machine Learning", progress: 50 },
      { name: "Statistics", progress: 60 }
    ]
  },

  {
    id: 3,
    username: "student3",
    password: "123de",
    role: "student",
    name: "Kwame Boateng",
    programme: "Business Administration",
    status: "Rejected",
    courses: [
      { name: "Accounting", progress: 40 },
      { name: "Marketing", progress: 55 }
    ]
  },

  {
    id: 4,
    username: "student4",
    password: "123gh",
    role: "student",
    name: "Efua Owusu",
    programme: "Pharmacy",
    status: "Approved",
    courses: [
      { name: "Pharmacology", progress: 65 },
      { name: "Medicinal Chemistry", progress: 50 }
    ]
  },

  {
    id: 5,
    username: "student5",
    password: "123ij",
    role: "student",
    name: "David Asare",
    programme: "Information Technology",
    status: "Pending",
    courses: [
      { name: "Networking", progress: 35 },
      { name: "Cybersecurity", progress: 45 }
    ]
  },

  {
    id: 6,
    username: "student6",
    password: "123kl",
    role: "student",
    name: "Naa Adjei",
    programme: "Computer Science",
    status: "Approved",
    courses: [
      { name: "Algorithms", progress: 75 },
      { name: "Data Structures", progress: 60 }
    ]
  },

  {
    id: 7,
    username: "student7",
    password: "123mn",
    role: "student",
    name: "Samuel Tetteh",
    programme: "Nursing",
    status: "Rejected",
    courses: [
      { name: "Clinical Practice", progress: 20 },
      { name: "Anatomy", progress: 30 }
    ]
  }
];