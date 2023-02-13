const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "sales",
  "marketing",
];

export default function ProjectFiler({ currentFilter, handleClick }) {
  return (
    <div className="project-filter">
      <p>Filter by:</p>
      {filterList.map((filter) => (
        <button
          key={filter}
          className={currentFilter === filter ? "active" : ""}
          onClick={() => handleClick(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
