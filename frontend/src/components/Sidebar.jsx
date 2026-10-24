function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="brand">TeamFlow</h2>
      <nav aria-label="Main Navigation">
        <a className="nav-link" href="#dashboard">
          Dashboard
        </a>
        <a className="nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-link" href="#tasks">
          My Tasks
        </a>
        <a className="nav-link" href="#team">
          Team
        </a>
      </nav>
      <div className="sidebar-footer">
        Project management made easy with TeamFlow
      </div>
    </aside>
  );
}

export default Sidebar;
