import React, { useState } from "react";

//Components
import Error from "./Error";

const Form = () => {
  //State
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validate
    if (search.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="form-group col-md-8">
        <input
          type="text"
          className="form-control form-control-lg"
          placeholder="Image description..."
          onChange={handleChange}
          value={search}
        />
      </div>
      <div className="form-group col-md-4">
        <button type="submit" className="btn btn-lg btn-danger btn-block">
          Search
        </button>
        {error ? <Error message="Incorrect fields" /> : null}
      </div>
    </form>
  );
};

export default Form;
