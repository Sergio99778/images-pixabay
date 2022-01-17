import React, { useState, useEffect } from "react";

//Components
import Form from "./components/Form";
import ListImages from "./components/ListImages";

function App() {
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (term === "") return;

      const imgPerPage = 10;
      const key = import.meta.env.VITE_KEY;
      const url = `https://pixabay.com/api/?key=${key}&q=${term}&per_page=${imgPerPage}`;

      const res = await fetch(url);
      const data = await res.json();

      setImages(data.hits);
    };
    getData();
  }, [term]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Images:</p>
        <Form setTerm={setTerm} />
      </div>
      <div className="row justify-content-center">
        <ListImages images={images} />
      </div>
    </div>
  );
}

export default App;
