import React from "react";

function App() {
  return (
    <main className="portfolio-v2" id="top">
      <header className="top-header">
        <p className="repo-ref">gunjan4527 / README.md</p>
        <h1>👋 Hi, I&apos;m Gunjan Kumar</h1>
      </header>

      <section className="learning-strip">
        <h2>⚡ Learn</h2>
        <img
          src="https://komarev.com/ghpvc/?username=gunjan4527&label=Profile%20Views&color=ae42f5&style=flat"
          alt="Profile views"
        />
      </section>

      <section className="contribution-block card">
        <img
          src="https://github-readme-activity-graph.vercel.app/graph?username=gunjan4527&theme=github-dark&hide_border=true"
          alt="Contribution graph"
        />
      </section>

      <section className="about card">
        <h2>🪐 About Me</h2>
        <div className="about-grid">
          <ul>
            <li>🔭 I&apos;m currently working on Smart Attendance Tracker using Web Scrapping.</li>
            <li>🌕 Open to collaborating on AI/ML projects and innovative, real-world problem-solving ideas.</li>
            <li>🧠 Exploring strategies to scale projects efficiently from architecture to deployment.</li>
            <li>🌱 I&apos;m currently learning DSA, Software Engineering, Machine Learning, and AI Automation.</li>
            <li>💬 Let&apos;s talk about DSA, AI/ML concepts, or Web Development.</li>
            <li>⚡ Fun fact: I enjoy the moment when an idea becomes a working product.</li>
          </ul>
          <div className="about-illustration">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
              alt="Developer illustration"
            />
          </div>
        </div>
      </section>

      <section className="tech card">
        <h2>💻 Tech Stack</h2>
        <div className="badge-grid">
          {[
            "python",
            "javascript",
            "react",
            "node.js",
            "express",
            "mysql",
            "mongodb",
            "firebase",
            "pandas",
            "numpy",
            "scikit-learn",
            "tensorflow",
            "keras",
            "opencv",
            "powerbi",
            "tableau",
            "git",
            "github",
            "vscode",
            "postman",
            "cplusplus",
            "html5",
            "css3",
            "bootstrap",
          ].map((skill) => (
            <img
              key={skill}
              src={`https://img.shields.io/badge/${encodeURIComponent(skill)}-0f172a?style=for-the-badge&logo=${encodeURIComponent(
                skill === "cplusplus" ? "c++" : skill
              )}&logoColor=white`}
              alt={skill}
            />
          ))}
        </div>
      </section>

      <section className="socials card">
        <h2>🌐 Socials</h2>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/gunjan-kumar-5866042aa" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:ygunjankumar3@gmail.com">Email</a>
          <a href="https://github.com/gunjan4527" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>

      <section className="stats card">
        <h2>📊 GitHub Stats</h2>
        <div className="stats-grid">
          <img
            src="https://github-readme-stats.vercel.app/api?username=gunjan4527&show_icons=true&theme=github_dark&hide_border=true"
            alt="GitHub stats"
          />
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=gunjan4527&theme=github-dark-blue&hide_border=true"
            alt="GitHub streak stats"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gunjan4527&layout=compact&theme=github_dark&hide_border=true"
            alt="Most used languages"
          />
        </div>
      </section>

      <section className="quote card">
        <h2>✍️ Random Dev Quote</h2>
        <img
          src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=dark"
          alt="Random developer quote"
        />
      </section>
    </main>
  );
}

export default App;