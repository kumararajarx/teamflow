import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProjectCard from "./components/ProjectCard";
import initialProjects from "./data/projects";
import "./App.css";

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState("");

  function handleToggleStatus(projectId) {
    setProjects((previousProjects) =>
      previousProjects.map((project) =>
        project.id === projectId
          ? {
              ...project,
              status: project.status === "completed" ? "active" : "completed",
            }
          : project,
      ),
    );
  }

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchTerm.trim().toLowerCase()),
  );

  const activeCount = projects.filter(
    (project) => project.status === "active",
  ).length;

  const completedCount = projects.filter(
    (project) => project.status === "completed",
  ).length;

  const totalTasks = projects.reduce(
    (total, project) => total + project.taskCount,
    0,
  );

  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Header />

        <section id="dashboard" className="dashboard-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">YOUR WORKSPACE</p>
              <h2>Projects</h2>
              <p>Track your team's work in one place.</p>
            </div>

            <span className="project-count">{projects.length} projects</span>
          </div>

          <div className="summary-grid">
            <article className="summary-card">
              <span>Total tasks</span>
              <strong>{totalTasks}</strong>
            </article>

            <article className="summary-card">
              <span>Active projects</span>
              <strong>{activeCount}</strong>
            </article>

            <article className="summary-card">
              <span>Completed projects</span>
              <strong>{completedCount}</strong>
            </article>
          </div>

          <div className="search-section">
            <label htmlFor="project-search">Search projects</label>

            <input
              id="project-search"
              type="search"
              placeholder="Search by project name..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </div>

          <div id="projects" className="project-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onToggleStatus={handleToggleStatus}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="empty-state">No projects match your search.</p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
