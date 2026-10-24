function ProjectCard({ project, onToggleStatus }) {
  const isCompleted = project.status === "completed";

  return (
    <article className="project-card">
      <div className="project-card-top">
        <span
          className={`status-badge ${isCompleted ? "completed" : "active"}`}
        >
          {project.status}
        </span>

        <span className="project-id">#{project.id}</span>
      </div>

      <h3>{project.name}</h3>

      <p className="project-description">{project.description}</p>

      <div className="project-card-footer">
        <span>{project.taskCount} tasks</span>
        <span>{project.owner}</span>
      </div>

      <button
        className="status-button"
        type="button"
        onClick={() => onToggleStatus(project.id)}
      >
        {isCompleted ? "Reopen project" : "Complete project"}
      </button>
    </article>
  );
}

export default ProjectCard;
