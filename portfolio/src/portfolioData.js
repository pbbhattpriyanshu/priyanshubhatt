// src/data/portfolioData.js
const portfolioData = {
  about: {
    title: "About",
    date: "September 14, 2024",
    author: "Priyanshu Bhatt",
    content: [
      "A Developer, Administrator, and GNU/Linux enthusiast. I am passionate about software, development tools, and open-source — constantly exploring their boundaries and my own. I learn through documentation, talks, books, and articles.",
      "I enjoy approaching problems in non-conventional ways, often finding creative solutions you might not think of initially."
    ],
    contact: {
      linkedin: "https://www.linkedin.com/in/priyanshu-bhatt",
      email: "bhattpriyanshupcm007@gmail.com"
    }
  },

  blogs: [
    {
      type: "blog",
      title: "Got Selected",
      description:
        "The Selection On the day of January 29, 2024 I was selected for a semester wide program powered by Infosys and Apple for iOS development...",
      date: "February 5, 2024",
      author: "Priyanshu Bhatt",
      url: "/blog/got-selected"
    },
    {
      type: "blog",
      title: "Bootcamp",
      description:
        "During the last week of December 2024, I signed up for a Bootcamp at my college designed to select students from the Computer Science and Engineering branch...",
      date: "January 25, 2024",
      author: "Priyanshu Bhatt",
      url: "/blog/bootcamp"
    }
  ],

  projects: [
    {
      type: "project",
      title: "ChatterBox AI",
      description:
        "An AI-powered real-time chat application built with MERN stack. Uses OpenAI APIs for smart replies and sentiment detection. Deployed on AWS with CI/CD using GitHub Actions.",
      date: "March 2, 2025",
      author: "Priyanshu Bhatt",
      url: "/projects/chatterai"
    },
    {
      type: "project",
      title: "CollabSphere",
      description:
        "A collaborative workspace for teams to share documents, manage tasks, and use AI summarization for meeting notes. Integrated with Google Drive API and hosted on Azure with Docker & Kubernetes.",
      date: "March 4, 2025",
      author: "Priyanshu Bhatt",
      url: "/projects/collabsphere"
    },
    {
      type: "project",
      title: "FinTrust AI",
      description:
        "A personal finance dashboard with AI-based expense predictions and fraud detection. Data stored in MongoDB Atlas with scheduled cloud backups and DevOps pipelines on AWS.",
      date: "March 5, 2025",
      author: "Priyanshu Bhatt",
      url: "/projects/fintrust"
    },
    {
      type: "project",
      title: "HealthSync",
      description:
        "A health monitoring web app that integrates wearable device data and provides AI-based health risk predictions. Deployed on Google Cloud with auto-scaling containers and CI/CD pipelines.",
      date: "March 8, 2025",
      author: "Priyanshu Bhatt",
      url: "/projects/healthsync"
    },
    {
      type: "project",
      title: "EduVision",
      description:
        "An e-learning platform with AI-powered quiz generation and personalized learning recommendations. Supports video streaming via AWS S3 and CloudFront, with DevOps on Jenkins.",
      date: "March 10, 2025",
      author: "Priyanshu Bhatt",
      url: "/projects/eduvision"
    },
    {
      type: "project",
      title: "AgroSense",
      description:
        "A smart farming dashboard with AI crop disease detection and weather-based irrigation suggestions. Uses IoT data stored in MongoDB Atlas, cloud-hosted on Azure, with Dockerized services.",
      date: "March 12, 2025",
      author: "Priyanshu Bhatt",
      url: "/projects/agrosense"
    },
    {
      type: "project",
      title: "TravelMate AI",
      description:
        "A personalized travel planner that uses AI to suggest itineraries and optimize travel costs. Integrated with Google Maps API, deployed on AWS Lambda for serverless scaling.",
      date: "March 15, 2025",
      author: "Priyanshu Bhatt",
      url: "/projects/travelmate"
    },
    {
      type: "project",
      title: "SecureVault",
      description:
        "A cloud-based password and file manager with AI breach detection and risk scoring. Built with MERN stack, hosted on AWS EC2 with automated CI/CD using GitHub Actions and Docker.",
      date: "March 18, 2025",
      author: "Priyanshu Bhatt",
      url: "/projects/securevault"
    }
  ]
};

export default portfolioData;
