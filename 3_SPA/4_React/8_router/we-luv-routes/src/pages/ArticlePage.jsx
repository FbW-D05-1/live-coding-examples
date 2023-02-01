import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const ArticlePage = () => {
  const { id } = useParams();
  const url = `http://localhost:4000/articles/${id}`;

  const { data: article, isPending: loading, error } = useFetch(url);

  const history = useHistory();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [error, history]);
  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <h1>Article - {id}</h1>
      {article && (
        <div>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
};
