import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import musicFile from "../../assets/space-theme.mp3";

const Header = () => {
  const audioRef = useRef();
  const [muted, setMuted] = useState(() => localStorage.getItem("muted") === "true");

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.2;
      if (!muted) {
        audio.play().catch(() => {});
      } else {
        audio.pause();
      }
    }
  }, [muted]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setMuted((prev) => {
      const newMuted = !prev;
      localStorage.setItem("muted", newMuted);
      return newMuted;
    });
  };

  return (
    <header className="z-3 position-relative">
      <audio ref={audioRef} src={musicFile} loop autoPlay hidden />

      <nav className="navbar navbar-expand-lg  px-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NASA Explorer
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/apod">
                  APOD
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mars">
                  Mars
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/epic">
                  EPIC
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/neo">
                  NEO
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/search">
                  Search
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid py-3 px-4 d-flex justify-content-end">
        <button onClick={toggleAudio} className="btn btn-sm btn-outline-info">
          {muted ? "🔈 Turn Sound On" : "🔊 Turn Sound Off"}
        </button>
      </div>
    </header>
  );
};

export default Header;
