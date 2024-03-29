import React from "react";

const Error = ({ message }) => {
  return (
    <p className="my-3 p-4 text-centeralert alert alert-danger">{message}</p>
  );
};

export default Error;
