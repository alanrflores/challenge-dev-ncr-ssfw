import React from "react";
import { useState } from "react";
import "./page.css";

const Page = ({ page, setPage, total }) => {
  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(input + 1);
    setPage(page + 1);
  };

  const previousPage = () => {
    setInput(input - 1);
    setPage(page - 1);
  };

  return (
    <>
      {page < 3 ? (
        <button
          className="btn-page"
          disabled={page === Math.ceil(total) || page > Math.ceil(total)}
          onClick={nextPage}
        >
          Más opciones {">>"}{" "}
        </button>
      ) : (
        ""
      )}

      {page > 1 ? (
        <button
          className="btn-page"
          disabled={page === 1 || page < 1}
          onClick={previousPage}
        >
          {" "}
          {"<<"} Opciones anteriores
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default Page;
