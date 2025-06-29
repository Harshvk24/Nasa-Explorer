import React, { useState } from "react";
import axios from "axios";
import PhotoCard from "../../common/PhotoCard";
import Loader from "../../common/Loader";

const MediaSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const trimmed = query.trim();
    if (!trimmed) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/search?q=${trimmed}`);
      const items = res.data.collection?.items || [];
      setResults(items);

      if (items.length === 0) {
        setError("No results found. Try a different keyword.");
      }
    } catch (err) {
      console.error("Search failed:", err);
      setError("Failed to fetch results. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container mt-3 text-light">
      <h2 className="mb-4">NASA Media Search</h2>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for images or videos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="btn btn-outline-info" onClick={handleSearch}>
          Search
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="alert alert-warning">{error}</div>
      ) : (
        <div className="row">
          {results.slice(0, 12).map((item, i) => {
            const link = item.links?.[0]?.href;
            const title = item.data?.[0]?.title;
            return (
              <div key={i} className="col-md-4 mb-4">
                <PhotoCard imageUrl={link} title={title} subtitle="" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MediaSearch;
