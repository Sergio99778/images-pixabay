import React from "react";

const Form = () => {
  return (
    <form className="row">
      <div className="form-group col-md-8">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Image description..."
        />
      </div>
      <div className="form-group col-md-4">
        <button type="submit" className="btn btn-lg btn-danger btn-block">
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
