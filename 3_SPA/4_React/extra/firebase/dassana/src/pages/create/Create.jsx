import { useState, useEffect } from "react";
import { useCollection } from "../../hooks/useCollection";

import Select from "react-select";

//style
import "./Create.css";

export default function Create() {
  const [name, setName] = useState("");

  const [details, setDetails] = useState("");

  const [dueDate, setDueDate] = useState("");

  const [category, setCategory] = useState("");

  const [assignedUsers, setAssignedUsers] = useState([]);

  const [users, setUsers] = useState([]);

  const { documents } = useCollection("users");

  const categories = [
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, details, dueDate, category.value, assignedUsers);
  };

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

  return (
    <div className="create-form">
      <h2 className="page-title">Create a new Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Project Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          <span>Project Details:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        <label>
          <span>Due Date:</span>
          <input
            type="date"
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>

        <label>
          <span>Project Category:</span>
          <Select
            required
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Assigned to:</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>

        <button className="btn">Create new Project</button>
      </form>
    </div>
  );
}
