import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "../../common/PhotoCard";
import Loader from "../../common/Loader";

const MarsViewer = () => {
  const [photos, setPhotos] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/mars/weather`);
        setWeather(res.data);
      } catch (err) {
        console.error("Failed to fetch weather", err);
        setError("Could not fetch Mars weather data.");
      }
    };

    fetchWeather();
  }, []);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/mars?sol=1000`);
        setPhotos(res.data.photos || []);
      } catch (err) {
        console.error("Failed to fetch photos", err);
        setError("Could not fetch Mars rover photos.");
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mt-4 text-light">
      <h2 className="mb-4">Mars Rover Photos</h2>

      {error && <div className="alert alert-danger">{error}</div>}

      {weather && !error && (
        <div className="p-4 mb-4 rounded" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
          <h5 className="text-info mb-2"> Latest Mars Weather (Sol {weather.sol})</h5>
          <p>
            <strong>Season:</strong> {weather.season}
          </p>
          <p>
            <strong>Temperature:</strong> {weather.min_temp}°C to {weather.max_temp}°C (avg {weather.avg_temp?.toFixed(1)}°C)
          </p>
        </div>
      )}

      {!error && photos.length > 0 && (
        <div className="row">
          {photos.slice(0, 12).map((photo, i) => (
            <div key={i} className="col-md-4 mb-4">
              <PhotoCard imageUrl={photo.img_src} title={photo.rover.name} subtitle={photo.camera.full_name} />
            </div>
          ))}
        </div>
      )}

      {!error && photos.length === 0 && <p className="text-warning">No photos available for this sol.</p>}
    </div>
  );
};

export default MarsViewer;
