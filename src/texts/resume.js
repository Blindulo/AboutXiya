const Resume = {
  myName: "Xiya Liu",
  address: {
    street: "3438 23rd Ave W",
    city: "Seattle",
    state: "WA",
  },
  contact: {
    phone: "412-320-9709",
    email: "xiyaliu.cyan@gmail.com",
  },
  education: [
    {
      university:
        "Nanjing University of Information Science & Technology (NUIST)",
      address: "Nanjing, Jiangsu, CHN",
      degree: "BS",
      major: "Computer Science and Technology",
      time: {
        start: "Sept. 2014",
        end: "June 2018",
      },
      GPA: "3.41",
    },
    {
      university: "University of Pittsburgh",
      address: "Pittsburgh, PA",
      degree: "MS",
      major: "Information Science",
      time: {
        start: "Sept. 2019",
        end: "May. 2021",
      },
      GPA: "3.81",
    },
  ],
  skill: {
    programmingLanguages:
      "Java, JavaScript, Python, C#, Android, PHP, C++, C, R",
    applicationDevelopment:
      "node.js, express, React, Gatsby, Angular, HTML5, CSS3, AJAX, RESTful API, HTTP",
    databaseTools: "MySQL, MongoDB, Azure, Neo4J, Git, MATLAB, R studio",
    links: {
      gitHub: "https://github.com/Blindulo/",
      linkedIn: "https://www.linkedin.com/in/xiya-liu-423420194/",
    },
  },
  experience: [
    {
      company: "University of Pittsburgh",
      title: "Web Developer",
      organization: "Pitt Educational and Language Technology Lab",
      time: {
        start: "Oct. 2020",
        end: "Present",
      },
      duty: [
        "Developing and maintaining a NLP platform to assist instructors in Purdue University to analyze reflection words from students so that instructors could gain the reviews more timely and systematically.",
        "Transferred server through designing and optimizing database, RESTful API with group members to ensure site security and data clean.",
        "Improved the UI and UE including lecture creation function, course creation function, and analytics visualization to make the website run smoothly, look pretty and be consistent with user's habits and experience.",
        "Extended the platform from google chrome to support different web and mobile placements.",
        "Implemented core functions including Instructor courses/lectures/reflection management and analysis system.",
      ],
      technology:
        "JavaScript, node.js, express, Azure, HTML5, CSS3, AJAX, MongoDB (then switch to SQL)",
      url: "https://cmirror.lrdc.pitt.edu/",
      test: {
        account: "lecturer@test.com",
        password: "12345678",
      },
    },
  ],
  project: [
    {
      projectName: "Leagues of Legends Games Result Prediction",
      detail: "Group project",
      duty: [
        "Built and optimized three logistic regression models with linear additive terms, pair-wise interaction and all 4-way interactions to predict the result of LOL games at 2 stages (Ban & Pick phase and the first 15 minutes) of games.",
        "Used Logistic Regression, KNearest-neighbors, NaïveBayes, Clustering analysis to analyze data with Python.",
      ],
    },
    {
      projectName: "Japanese learning and teaching websites",
      detail: "Personal project",
      duty: [
        "Full-stack developed Japanese learning and teaching websites to help Chinese to learn Japanese (Chrome is recommended browser, the first load may be slow due to internet latency. And the language of the website is Chinese).",
        "Enable teachers to assign homework to learners, grade and commentary the completed homework from learners, learners could manage and do homework by themselves.",
        "Implemented functions including learning the Japanese syllabary table, practicing Japanese listening and speaking, reading textbooks uploaded by teachers, reciting Japanese vocabulary and chatting room to satisfy the Language learning functions.",
        "Designed and developed Frontend of websites such as Calendar, rotated cards and scalable sidebar by applying animation intelligently to make UI and UE friendly and integrated.",
        "Accomplished Backgrounds functions like Date changing, API call and streaming media reading to enhance site entertainment.",
      ],
      technology:
        "JavaScript, HTML5, CSS3, AJAX, PHP, MySQL and Apache framework",
      url: "http://blindulo.uusama.com/learnerpage.html",
    },
    {
      projectName:
        "Memory management based on relocatable partition allocation algorithm",
      detail: "Personal project",
      duty: [
        "Simulated the partition memory allocation algorithm of the operating system with compact function by using C++.",
        "Designed data structures such as Process Control Block and idle partition so that memory could be managed flexibly.",
      ],
    },
  ],
};
