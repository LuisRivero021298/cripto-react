import React, { useEffect, useState} from "react";
import api from "../../api";
import Table from "./TableListCriptos";

const TableListCriptosContainer = (props) => {
  const heightSize = window.screen.height;
  const [limitCoin, setLimitCoin] = useState(heightSize > 1300 ? 20 : 10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [listCoin, setListCoin] = useState([]);

  const handleGetMoreData = () => {
    setLimitCoin(limitCoin + 10);
    const query = `offset=${limitCoin}&limit=10`;
    getData(query);
  };

  const getData = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await api.assets.list(query);
      setListCoin([...data]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getData(`limit=${limitCoin}`);
  }, [limitCoin])
   
  if(error) {
    console.log(error);
  }
  return (
    <div className="Table__container">
      <Table
        loading={loading}
        coin={listCoin}
        history={props.history}
      />
      <button
        onClick={handleGetMoreData}
        type="button"
        className="btn--more__cripto"
      >
        <i className="material-icons md-36">arrow_drop_down</i>
      </button>
    </div>
  );
}

export default TableListCriptosContainer;
