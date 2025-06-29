import React from "react";

const Loader = () => (
  <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
    <img
      src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnp3Ymk4d3Z3aDVudnF2ZmMxNGswMDJlN2V0Y2VoNXZ1MzYyeGp5eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FcQ0aYb0IL0FkHan8z/giphy.gif"
      alt="Launching spacecraft..."
      style={{ width: "150px", backgroundColor: "transparent", borderRadius: "8px", boxShadow: "0 0 30px rgba(255,255,255,0.15)" }}
    />
    <h5 style={{ color: "#ffffff", marginTop: "1rem", textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}>Launching spacecraft...</h5>
  </div>
);

export default Loader;
