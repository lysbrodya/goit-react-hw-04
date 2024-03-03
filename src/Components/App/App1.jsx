import "./App.css";

import { useEffect, useState } from "react";
import ArticleList from "../ArticleList/ArticleList";
import { fetchArticles } from "../../article-api";
import SearchBox from "../SearchBox/SearchBox";

export default function App() {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function getData() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchArticles(query, page);
        setArticles((prevArticles) => {
          return [...prevArticles, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setArticles([]);
  };

  const hendleLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h1>Latest articles</h1>
      <SearchBox onSearch={handleSearch} />
      {error && <p>Vse propalo shef</p>}
      {loading && <b>Loading...</b>}
      {articles.length > 0 && <ArticleList items={articles} />}
      {articles.length > 0 && !loading && (
        <button onClick={hendleLoadMore}>Load more</button>
      )}
    </div>
  );
}

{
  /* {loading && <p style={{ fontSize: 20 }}>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )} */
}

// useEffect(() => {
//   async function getArticles() {
//     try {
//       setLoading(true);
//       const data = await fetchArticles();
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   }

//   getArticles();
// }, []);
