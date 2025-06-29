import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../common/Loader";

const ApodViewer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState("");
  const [error, setError] = useState(null);

  const fetchApod = async (selectedDate = "") => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`http://localhost:5000/apod`, {
        params: selectedDate ? { date: selectedDate } : {},
      });
      setData(res.data);
    } catch (err) {
      console.error("APOD fetch failed:", err);
      const msg = err.response?.data?.error || "Failed to fetch APOD data.";
      setError(msg);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchApod();
  }, []);

  const handleDateChange = (e) => {
    const selected = e.target.value;
    setDate(selected);
    fetchApod(selected);
  };

  const handleTodayClick = () => {
    const today = new Date().toISOString().slice(0, 10);
    setDate(today);
    fetchApod(today);
  };

  if (loading) return <Loader />;

  return (
    <div className="container mt-4 text-light text-center">
      <h2 className="apod-title">Astronomy Picture of the Day</h2>

      <div className="my-3">
        <label htmlFor="apod-date" className="me-2">
          Choose a date:
        </label>
        <input id="apod-date" type="date" value={date} onChange={handleDateChange} className="form-control w-auto d-inline-block" />
        <button onClick={handleTodayClick} className="btn btn-outline-info ms-2">
          Today
        </button>
      </div>

      {error ? (
        <div className="alert alert-danger mt-3">{error}</div>
      ) : (
        <>
          <h3>{data.title}</h3>
          <p className="apod-date">{data.date}</p>

          {data.media_type === "image" ? (
            <img src={data.url} alt={data.title} className="img-fluid rounded shadow my-3" style={{ maxHeight: "600px" }} />
          ) : (
            <iframe src={data.url} title={data.title} className="w-100 my-3" style={{ height: "500px" }} allow="encrypted-media"></iframe>
          )}

          <p className="apod-explanation text-justify px-4">{data.explanation}</p>
        </>
      )}
    </div>
  );
};

export default ApodViewer;
