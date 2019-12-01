import PropTypes from "prop-types";
import React from "react";

const MemeComponent = ({ title, imageUrl }) => {
  return (
    <img
      src={imageUrl}
      alt={title}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "3%",
        marginBottom: "1rem"
      }}
    />
  );
};

MemeComponent.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default MemeComponent;
