import React, { useState, useEffect } from "react";

//Components
import Form from "./components/Form";
import ListImages from "./components/ListImages";

function App() {
  const [term, setTerm] = useState("");
  const [images, setImages] = useState([]);
  const [actualPage, setActualPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getData = async () => {
      if (term === "") return;

      const imgPerPage = 10;
      const key = import.meta.env.VITE_KEY;
      const url = `https://pixabay.com/api/?key=${key}&q=${term}&per_page=${imgPerPage}&page=${actualPage}`;

      const res = await fetch(url);
      const data = await res.json();

      setImages(data.hits);

      //calc total pages
      const calcTotalPages = Math.ceil(data.totalHits / imgPerPage);
      setTotalPages(calcTotalPages);
      //Scroll up
      const jumbotron = document.querySelector(".jumbotron");
      jumbotron.scrollIntoView({ behavior: "smooth" });
    };
    getData();
  }, [term, actualPage]);

  const previousPage = () => {
    const newActualPage = actualPage - 1;
    if (newActualPage === 0) return;
    setActualPage(newActualPage);
  };
  const nextPage = () => {
    const newActualPage = actualPage + 1;
    if (newActualPage > totalPages) return;
    setActualPage(newActualPage);
  };

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Images:</p>
        <Form setTerm={setTerm} />
      </div>
      <div className="row justify-content-center ">
        <ListImages images={images} />
        <button
          type="button"
          className="btn btn-info mr-1"
          onClick={previousPage}
          disabled={actualPage === 1}
        >
          &laquo; Previous
        </button>
        <button
          type="button"
          className="btn btn-info mr-1 "
          onClick={nextPage}
          disabled={actualPage === totalPages}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}

export default App;
