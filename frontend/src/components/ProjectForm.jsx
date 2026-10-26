import { useState } from "react";

function ProjectForm({ onCreateProject, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    owner: "",
    taskCount: "0",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const owner = formData.owner.trim();
    const taskCount = Number(formData.taskCount);

    if (!name) {
      setError("Project name is required.");
      return;
    }

    if (!owner) {
      setError("Project owner is required.");
      return;
    }

    if (
      formData.taskCount.trim() === "" ||
      !Number.isInteger(taskCount) ||
      taskCount < 0
    ) {
      setError("Task count must be a non-negative whole number.");
      return;
    }

    onCreateProject({
      name,
      description: formData.description.trim(),
      owner,
      taskCount,
    });
  }

  return (
    <form className="project-form" onSubmit={handleSubmit}>
      <h3>Create a new project</h3>

      <div className="form-field">
        <label htmlFor="new-project-name">Project name *</label>
        <input
          id="new-project-name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Customer Portal"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="new-project-description">Description</label>
        <textarea
          id="new-project-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="What is this project about?"
          rows={3}
        />
      </div>

      <div className="form-field">
        <label htmlFor="new-project-owner">Project owner *</label>
        <input
          id="new-project-owner"
          name="owner"
          value={formData.owner}
          onChange={handleChange}
          placeholder="e.g. Kumar"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="new-project-tasks">Initial task count</label>
        <input
          id="new-project-tasks"
          name="taskCount"
          type="number"
          min="0"
          step="1"
          value={formData.taskCount}
          onChange={handleChange}
          required
        />
      </div>

      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}

      <div className="form-actions">
        <button className="primary-button" type="submit">
          Create project
        </button>

        <button className="secondary-button" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
