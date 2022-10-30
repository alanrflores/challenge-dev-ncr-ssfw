import axios from "axios";
import React, { useEffect, useState } from "react";
import Page from "../page/Page";
import "./home.css";

const Home = () => {
  const [data, setData] = useState([]);
  const [state, setState] = useState(false);
  const [account, setAccount] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(5);

  const total = data.length / dataPerPage;

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    try {
      const result = await axios("https://api.npoint.io/97d89162575a9d816661");
      setData(result.data.cuentas);
    } catch (error) {
      console.log(error);
    }
  };

  const openDetail = (item) => {
    if (item) {
      setAccount(item);
    }
    setState(true);
  };

  const closeDetail = () => {
    setState(false);
  };


  return (
    <>
      <div className="app">
        {!state && (
          <>
            <div className="state-span">
              <span className="span-state">Consulta de Saldo</span>
            </div>
            <div className="container-state">
              <h1>Selecciona la Cuenta a Consultar</h1>
            </div>
          </>
        )}
      </div>
      <div className="container-dad">
        <div className="container-elements">
          {data && !state ? (
            data
              ?.slice(
                (currentPage - 1) * dataPerPage,
                (currentPage - 1) * dataPerPage + dataPerPage
              )
              .map((item, i) => (
                <div key={i}>
                  <button className="btn" onClick={() => openDetail(item)}>
                    <span>
                      {item.tipo_letras === "CC" || item.tipo_letras === "Cc"
                        ? "Cuenta Corriente"
                        : "Caja de Ahorro"}
                    </span>
                    <span>{`Nro: ${item.n}`}</span>
                  </button>
                </div>
              
              ))
             
          ) : (
            <div className="container-account">
              <span>Consulta de Saldo</span>

              <h1>Este es tu saldo actual</h1>
              <ul className="container-account-info">
                <li>Saldo de la cuenta: {account.moneda === "$" ? "$" : account.moneda === "u$s" ? "u$s" : account.moneda === "$uy" ? "$uy" : "bs" } {account.saldo}</li>
                <li>
                  Tipo de cuenta:{" "}
                  {account.tipo_letras === "CC" || account.tipo_letras === "Cc"
                    ? account.moneda === "u$s" ? "Cuenta Corriente en Dolares" : "Cuenta Corriente en Pesos"
                    : account.moneda === "u$s" ? "Caja de Ahorro en Dolares" : "Caja de Ahorro en Pesos"}
                </li>
                <li>Número de Cuenta: {account.n}</li>
              </ul>
            </div>
          )}
          {!state && (
            <Page page={currentPage} setPage={setCurrentPage} total={total} />)}
          </div>
        </div>
     

      <hr />
      <div className="container-elements-btn">
        {data && (
          <button className="btn-exit" onClick={closeDetail}>
            Salir
          </button>
        )}
      </div>
    </>
  );
};

export default Home;
