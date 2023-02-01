import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "./styles/Home.css";
export const HomePage = () => {
  const url = "http://localhost:4000/articles";

  const { data: articles, isPending: loading, error } = useFetch(url);

  return (
    <div className="home">
      <h1>HomePage</h1>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {articles?.map((article) => (
        <div key={article.id} className="card">
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <Link to={`/articles/${article.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
};
