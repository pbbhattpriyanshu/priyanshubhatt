import React from "react";
import { Rss } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "ChatterBox AI",
      description:
        "An AI-powered real-time chat application built with MERN stack. Uses OpenAI APIs for smart replies and sentiment detection. Deployed on AWS with CI/CD using GitHub Actions.",
      date: "March 2, 2025",
      author: "Priyanshu Bhatt",
    },
    {
      title: "CollabSphere",
      description:
        "A collaborative workspace for teams to share documents, manage tasks, and use AI summarization for meeting notes. Integrated with Google Drive API and hosted on Azure with Docker & Kubernetes.",
      date: "March 4, 2025",
      author: "Priyanshu Bhatt",
    },
    {
      title: "FinTrust AI",
      description:
        "A personal finance dashboard with AI-based expense predictions and fraud detection. Data stored in MongoDB Atlas with scheduled cloud backups and DevOps pipelines on AWS.",
      date: "March 5, 2025",
      author: "Priyanshu Bhatt",
    },
    {
      title: "HealthSync",
      description:
        "A health monitoring web app that integrates wearable device data and provides AI-based health risk predictions. Deployed on Google Cloud with auto-scaling containers and CI/CD pipelines.",
      date: "March 8, 2025",
      author: "Priyanshu Bhatt",
    },
    {
      title: "EduVision",
      description:
        "An e-learning platform with AI-powered quiz generation and personalized learning recommendations. Supports video streaming via AWS S3 and CloudFront, with DevOps on Jenkins.",
      date: "March 10, 2025",
      author: "Priyanshu Bhatt",
    },
    {
      title: "AgroSense",
      description:
        "A smart farming dashboard with AI crop disease detection and weather-based irrigation suggestions. Uses IoT data stored in MongoDB Atlas, cloud-hosted on Azure, with Dockerized services.",
      date: "March 12, 2025",
      author: "Priyanshu Bhatt",
    },
    {
      title: "TravelMate AI",
      description:
        "A personalized travel planner that uses AI to suggest itineraries and optimize travel costs. Integrated with Google Maps API, deployed on AWS Lambda for serverless scaling.",
      date: "March 15, 2025",
      author: "Priyanshu Bhatt",
    },
    {
      title: "SecureVault",
      description:
        "A cloud-based password and file manager with AI breach detection and risk scoring. Built with MERN stack, hosted on AWS EC2 with automated CI/CD using GitHub Actions and Docker.",
      date: "March 18, 2025",
      author: "Priyanshu Bhatt",
    },
  ];
  return (
    <main className="bg-neutral-800 relative mx-auto p-6 min-h-[calc(100vh-60px)] max-w-[800px]">
      <section className="min-h-80 mb-7">
        <div className="min-h-64 rounded-lg p-6 flex flex-col justify-center">
          {/* Home link */}
          <Link to="/" className="text-yellow-400">
            Home
          </Link>

          {/* Project Title */}
          <h1 className="text-5xl font-bold mb-6 flex items-center text-white gap-2">
            Projects <Rss size={24} />
          </h1>

          {/* Blog Posts */}
          <div className="space-y-6">
            {projects.map((projects, idx) => (
              <div key={idx} className="bg-neutral-700 rounded-lg p-6 ">
                <h2 className="text-xl text-white font-bold mb-2">
                  {projects.title}
                </h2>
                <p className="text-gray-400 mb-3 text-sm">
                  {projects.description}
                </p>
                <p className="text-xs text-gray-500">
                  {projects.date} · {projects.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
