import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) {
    return null; // Render nothing if no error message
  }

  return <p style={{ color: "red" }}>{message}</p>;
};

export default ErrorMessage;
