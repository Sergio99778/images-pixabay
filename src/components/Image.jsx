import React from "react";

const Image = ({ image }) => {
  //Extract data
  const { largeImageURL, likes, previewURL, tags, views } = image;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card">
        <img src={previewURL} alt={tags} className="card-img-top" />
      </div>
      <div className="card-body">
        <p className="card-text">Likes {likes}</p>
        <p className="card-text">Views {views}</p>
      </div>
      <div className="card-footer">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={largeImageURL}
          className="btn btn-primary btn-block"
        >
          View image
        </a>
      </div>
    </div>
  );
};

export default Image;
