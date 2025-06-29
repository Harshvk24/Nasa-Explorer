import React from "react";
import { Link } from "react-router-dom";
import "../../../App.css";

const Home = () => {
  return (
    <div className="container text-center py-5 animate-fade position-relative z-2">
      <h1 className="display-4 text-light mb-4 animate-pop">Welcome to NASA Explorer</h1>
      <p className="lead text-secondary mb-5 animate-fade-delay">
        Dive into the cosmos with real-time data and awe-inspiring visuals. From Mars rover snaps to near-Earth asteroid tracking, this portal
        connects you with the latest from space.
      </p>

      <div className="d-flex justify-content-center flex-wrap gap-3 animate-rise mb-4">
        <Link to="/apod" className="btn btn-outline-light btn-lg glow-on-hover">
          Astronomy Picture of the Day
        </Link>
        <Link to="/mars" className="btn btn-outline-light btn-lg glow-on-hover">
          Mars Rover Photos
        </Link>
        <Link to="/epic" className="btn btn-outline-light btn-lg glow-on-hover">
          Earth EPIC
        </Link>
        <Link to="/neo" className="btn btn-outline-light btn-lg glow-on-hover">
          Near-Earth Objects
        </Link>
        <Link to="/search" className="btn btn-outline-light btn-lg glow-on-hover">
          NASA Media Search
        </Link>
      </div>

      {/* Spaceship image centered */}
      <div className="d-flex justify-content-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png"
          alt="Spaceship"
          style={{ width: "150px", height: "auto" }}
          className="animate-pop"
        />
      </div>
    </div>
  );
};

export default Home;
