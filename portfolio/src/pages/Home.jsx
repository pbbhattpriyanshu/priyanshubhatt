import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-neutral-800 relative mx-auto p-6 min-h-[calc(100vh-60px)] max-w-[800px]">
      <section className="min-h-80 mt-14 mb-7">
        <div className="min-h-64 rounded-lg p-6 flex flex-col justify-center">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-3">
            Priyanshu Bhatt
          </h1>
          <p className="text-gray-400 mb-4">
            A Developer, and a geek. I am passionate about{" "}
            <a href="/about" className="text-grey-400 hover:text-yellow-400 transition">
              Read more...
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex space-x-6 mt-2">
            <a href="https://github.com/pbbhattpriyanshu" target="_blank" rel="noreferrer">
              <Github className="text-white hover:text-yellow-400 transition" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/priyanshupb01008/" target="_blank" rel="noreferrer">
              <Linkedin className="text-white hover:text-yellow-400 transition" size={24} />
            </a>
            <a href="mailto:bhattpriyanshupcm007@gmail.com">
              <Mail className="text-white hover:text-yellow-400 transition" size={24} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
