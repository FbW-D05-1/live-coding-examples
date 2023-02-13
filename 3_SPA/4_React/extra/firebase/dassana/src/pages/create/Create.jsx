import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCollection } from "../../hooks/useCollection";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
import { timestamp } from "../../firebase/config";

//packages
/** more info the select option https://react-select.com/home  */
import Select from "react-select";

//style
import "./Create.css";

export default function Create() {
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore("projects");

  const navigate = useNavigate();
  {
    /** Name of the Project */
  }
  const [name, setName] = useState("");
  {
    /** Datails of the Project */
  }
  const [details, setDetails] = useState("");
  {
    /** Due date of the Project */
  }
  const [dueDate, setDueDate] = useState("");
  {
    /** What kind of Project  */
  }
  const [category, setCategory] = useState("");
  {
    /** Whicht Users are working on the Project */
  }
  const [assignedUsers, setAssignedUsers] = useState([]);
  {
    /** The Users on our db */
  }
  const [users, setUsers] = useState([]);
  {
    /** Errors for Select package */
  }
  const [formError, setFormError] = useState(null);

  const { documents } = useCollection("users");

  const categories = [
    { value: "development", label: "Development" },
    { value: "design", label: "Design" },
    { value: "sales", label: "Sales" },
    { value: "marketing", label: "Marketing" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    if (!category) {
      setFormError("Please select a project category");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("Please assign users to the project");
      return;
    }
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUsersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList,
    };
    await addDocument(project);
    if (!response.error) {
      navigate("/");
    }
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
        {/** input of the Project Page */}
        <label>
          <span>Project Name:</span>
          <input
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        {/** input for the Project Details */}
        <label>
          <span>Project Details:</span>
          <textarea
            type="text"
            required
            onChange={(e) => setDetails(e.target.value)}
            value={details}
          />
        </label>
        {/** input for the Due Date of the Project */}
        <label>
          <span>Due Date:</span>
          <input
            type="date"
            required
            onChange={(e) => setDueDate(e.target.value)}
            value={dueDate}
          />
        </label>
        {/** What kind of Project  */}
        <label>
          <span>Project Category:</span>
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        {/** What users will be assigned for the Project */}
        <label>
          <span>Assigned to:</span>
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>

        <button className="btn">Create new Project</button>
        {formError && <div className="error">{formError}</div>}
      </form>
    </div>
  );
}
