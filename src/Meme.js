import React from "react";

const Meme = ({ template, onClick }) => {
  return (
    <img
      src={template.url}
      key={template.id}
      alt={template.name}
      style={{ width: 200 }}
      onClick={onClick}
    />
  );
};

export default Meme;
