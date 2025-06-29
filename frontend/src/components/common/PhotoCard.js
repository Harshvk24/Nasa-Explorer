import React from "react";

const PhotoCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className="card  h-100">
      <img src={imageUrl} alt={title} className="card-img-top" />
      <div className="card-body">
        <h6 className="card-title ">{title}</h6>
        <p className="card-text text-truncate">{subtitle}</p>
      </div>
    </div>
  );
};

export default PhotoCard;
