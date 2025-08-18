import { useState } from "react";
import Fuse from "fuse.js";
import portfolioData from "../portfolioData";

export default function Search() {
  const [query, setQuery] = useState("");

  // Merge data
  const searchableData = [
    ...portfolioData.blogs.map((b) => ({ ...b, type: "Blog" })),
    ...portfolioData.projects.map((p) => ({ ...p, type: "Project" })),
    {
      title: "About Me",
      description: portfolioData.about,
      url: "#about",
      type: "About",
    },
  ];

  const fuse = new Fuse(searchableData, {
    keys: ["title", "description"],
    threshold: 0.3,
  });

  // Show only when query has text
  const results = query ? fuse.search(query).map((res) => res.item) : [];

  return (
    <main className="bg-neutral-800 relative mx-auto p-6 min-h-[calc(100vh-60px)] max-w-[800px]">
      <section className="min-h-80 mb-7">
        <div className="min-h-64 rounded-lg p-6 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-6 flex items-center text-white gap-2">
            Search🔍
          </h1>
          <input
            type="text"
            placeholder="Search blogs, projects, about..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-white p-2 rounded-md bg-transparent border border-white focus:outline-none mb-4"
          />

          <div className="space-y-2">
            {results.length > 0
              ? results.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    className="block p-4 rounded-lg bg-neutral-700"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-yellow-400">{item.title}</span>
                    </div>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </a>
                ))
              : query && <p className="text-gray-400">No results found.</p>}
          </div>
        </div>
      </section>
    </main>
  );
}
