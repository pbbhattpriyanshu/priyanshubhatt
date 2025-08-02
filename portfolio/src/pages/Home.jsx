import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const posts = [
    {
      title: "Got Selected",
      description:
        "The Selection On the day of January 29, 2024 I was selected for a semester wide program powered by Infosys and Apple for iOS development. The Bootcamp was a tremendous experience. Out of around 900...",
      date: "February 5, 2024",
      author: "Priyanshu Bhatt",
    },
    {
      title: "Bootcamp",
      description:
        "During the last week of December 2024, I signed up for a Bootcamp at my college designed to select students from the Computer Science and Engineering (CSE) branch for a semester-long program. This...",
      date: "January 25, 2024",
      author: "Priyanshu Bhatt",
    },
  ];
  return (
    <main className="bg-neutral-800 relative mx-auto p-6 min-h-[calc(100vh-60px)] max-w-[800px]">
      <section className="min-h-80 mt-14">
        <div className="min-h-64 rounded-lg p-6 flex flex-col justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">
            Priyanshu Bhatt
          </h1>
          <p className="text-gray-400 mb-4">
            A Developer, and a geek. I am passionate about{" "}
            <a
              href="/about"
              className="text-grey-400 hover:text-yellow-400 transition"
            >
              Read more...
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-2">
            <a
              href="https://github.com/pbbhattpriyanshu"
              target="_blank"
              rel="noreferrer"
            >
              <Github
                className="text-white hover:text-yellow-400 transition"
                size={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshupb01008/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                className="text-white hover:text-yellow-400 transition"
                size={24}
              />
            </a>
            <a href="mailto:bhattpriyanshupcm007@gmail.com">
              <Mail
                className="text-white hover:text-yellow-400 transition"
                size={24}
              />
            </a>
          </div>
        </div>
      </section>

        {/* Blog Posts */}
      <section className="min-h-80 mb-7">
        <div className="min-h-64 rounded-lg p-6 flex flex-col justify-center">
          <div className="space-y-6">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-neutral-700 rounded-lg p-6 ">
                <h2 className="text-xl text-white font-bold mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-3 text-sm">{post.description}</p>
                <p className="text-xs text-gray-500">
                  {post.date} · {post.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
