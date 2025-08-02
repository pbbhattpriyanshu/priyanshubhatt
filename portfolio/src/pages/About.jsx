import { Link } from "react-router-dom";
import { Rss } from "lucide-react";

export default function About() {
  return (
    <main className="bg-neutral-800 relative mx-auto p-6 min-h-[calc(100vh-60px)] max-w-[800px]">
      <section className="min-h-80 mb-7">
        <div className="min-h-64 rounded-lg p-6 flex flex-col justify-center">
          {/* Home link */}
          <Link to="/" className="text-yellow-400">
            Home
          </Link>

          {/* About Title */}
          <h1 className="text-5xl font-bold mb-2 flex items-center text-white gap-2">
            About <Rss size={24} />
          </h1>
          <p className="text-gray-400 text-sm mb-6">
            September 14, 2024 · Priyanshu Bhatt
          </p>
          {/* About Content */}
          <div className="space-y-4 text-gray-300">
            <p>
              A Developer, Administrator, and GNU/Linux enthusiast. I am
              passionate about software, development tools, and open-source —
              constantly exploring their boundaries and my own. I learn through
              documentation, talks, books, and articles.
            </p>

            <p>
              I enjoy approaching problems in non-conventional ways, often
              finding creative solutions you might not think of initially.
            </p>
          </div>

          <hr className="my-8 border-white" />

          {/* Contact Section */}
          <div className="mt-8">
            <h1 className="text-5xl text-white font-semibold mb-7">Contact Me</h1>
            <p className="text-white">
              Connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/priyanshu-bhatt"
                target="_blank"
                rel="noreferrer"
                className="text-yellow-400"
              >
                LinkedIn
              </a>{" "}
              or via email at{" "}
              <a
                href="mailto:bhattpriyanshupcm007@gmail.com"
                className="text-yellow-400"
              >
                bhattpriyanshupcm007@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
