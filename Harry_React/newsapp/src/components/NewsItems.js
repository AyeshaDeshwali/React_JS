import React from "react";

const NewsItems = ({
  title,
  description,
  urlToImage,
  url,
  author,
  publishedAt,
}) => {
  return (
    <div className="news-item my-5">
      <img
        src={urlToImage}
        alt={title}
        className="news-image"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h2 style={{ fontSize: "24px" }}>{title}</h2>
      <p>{description}</p>
      <p>
        By {author} on {new Date(publishedAt).toLocaleDateString()}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-sm"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsItems;
