import React, { useState, useEffect } from "react";

//Components
import Form from "./components/Form";

function App() {
  const [term, setTerm] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (term === "") return;

      const imgPerPage = 30;
      const key = import.meta.env.VITE_KEY;
      const url = `https://pixabay.com/api/?key=${key}&q=${term}&per_page=${imgPerPage}`;

      const res = await fetch(url);
      const data = await res.json();

      console.log(data.hits);
    };
    getData();
  }, [term]);

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Images:</p>
        <Form setTerm={setTerm} />
      </div>
    </div>
  );
}

export default App;
