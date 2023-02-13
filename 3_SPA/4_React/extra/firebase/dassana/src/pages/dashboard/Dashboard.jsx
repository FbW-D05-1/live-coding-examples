import { useCollection } from "../../hooks/useCollection";
import ProjectList from "./ProjectList";

import "./Dashboard.css";
export default function Dashboard() {
  const { documents, error } = useCollection("projects");
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      <ProjectList projects={documents} />
    </div>
  );
}
