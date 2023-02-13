import { useCollection } from "../../hooks/useCollection";
import { useState } from "react";

import { useAuthContext } from "../../hooks/useAuthContext";

import ProjectList from "./ProjectList";
import ProjectFiler from "./ProjectFiler";

import "./Dashboard.css";

export default function Dashboard() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("projects");
  const [currentFilter, setCurrentFilter] = useState("all");

  const handleClick = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const projects = documents?.filter((document) => {
    switch (currentFilter) {
      case "all":
        return true;
      case "mine":
        let assignedToMe = false;
        document.assignedUsersList.forEach((u) => {
          if (user.uid === u.id) {
            assignedToMe = true;
          }
        });
        return assignedToMe;
      case "development":
      case "design":
      case "sales":
      case "marketing":
        console.log(document.category, currentFilter);
        return document.category === currentFilter;

      default:
        return true;
    }
  });
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && (
        <ProjectFiler currentFilter={currentFilter} handleClick={handleClick} />
      )}
      {projects && <ProjectList projects={projects} />}
    </div>
  );
}
