import React from "react";

const NewsItem = ({ title, description, image, url }) => {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      style={{
        border: "1px solid gray",
        padding: "10px",
        cursor: "pointer",
      }}
    >
      <img
        src={
          image ||
          "https://ichef.bbci.co.uk/news/1024/branded_news/a68f/live/3af67db0-e429-11f0-b67b-690eb873de1b.jpg"
        }
        alt="News"
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <h4>{title}</h4>
      <p>{description || "No description"}</p>
    </div>
  );
};

export default NewsItem;
