import React, { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "../../common/PhotoCard";
import Loader from "../../common/Loader";

const EpicViewer = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}:5000`);
        setImages(res.data || []);
      } catch (err) {
        console.error("EPIC fetch failed:", err);
        const msg = err.response?.data?.error || "Failed to fetch EPIC images.";
        setError(msg);
      }

      setLoading(false);
    };

    fetchImages();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mt-3">
      <h2>Earth EPIC Images</h2>

      {error ? (
        <div className="alert alert-danger mt-3">{error}</div>
      ) : (
        <div className="row mt-3">
          {images.slice(0, 9).map((img, i) => {
            const date = img.date.split(" ")[0].replace(/-/g, "/");
            const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${date}/jpg/${img.image}.jpg`;
            return (
              <div key={i} className="col-md-4 mb-4">
                <PhotoCard imageUrl={imageUrl} title={img.caption} subtitle={img.date} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EpicViewer;
