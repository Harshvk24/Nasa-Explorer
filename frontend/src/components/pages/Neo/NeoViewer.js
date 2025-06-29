import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../common/Loader";
import NeoChart from "../../Graphs/NeoChart";

const NeoViewer = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
  const [error, setError] = useState(null);

  const fetchNEO = async (targetDate) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/neo?start_date=${targetDate}&end_date=${targetDate}`);
      setData(res.data);
    } catch (err) {
      console.error("NEO fetch failed:", err);
      setError("Failed to fetch data. Please try again later.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNEO(date);
  }, []);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    fetchNEO(newDate);
  };

  const handleTodayClick = () => {
    const today = new Date().toISOString().slice(0, 10);
    setDate(today);
    fetchNEO(today);
  };

  const neos = data?.near_earth_objects?.[date] || [];

  return (
    <div className="container mt-4 text-light text-center">
      <h2>Near-Earth Objects</h2>

      <div className="my-3">
        <label htmlFor="neo-date" className="me-2">
          Select date:
        </label>
        <input
          id="neo-date"
          type="date"
          value={date}
          max={new Date().toISOString().slice(0, 10)}
          onChange={handleDateChange}
          className="form-control w-auto d-inline-block"
        />
        <button onClick={handleTodayClick} className="btn btn-outline-info ms-2">
          Today
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <div className="alert alert-danger">{error}</div>
      ) : neos.length === 0 ? (
        <div className="alert alert-warning">No NEOs recorded for this date.</div>
      ) : (
        <>
          <div className="table-responsive mt-3">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Diameter (m)</th>
                  <th>Miss Distance (km)</th>
                </tr>
              </thead>
              <tbody>
                {neos.map((neo, i) => (
                  <tr key={i}>
                    <td>{neo.name}</td>
                    <td>{neo.estimated_diameter.meters.estimated_diameter_max.toFixed(1)}</td>
                    <td>{parseFloat(neo.close_approach_data[0].miss_distance.kilometers).toFixed(0)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <NeoChart data={neos} />
        </>
      )}
    </div>
  );
};

export default NeoViewer;
