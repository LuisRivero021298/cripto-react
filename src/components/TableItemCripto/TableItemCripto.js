import React from "react";
import useDollarFilter from "../../hooks/UseDollarFilter";
import usePercentFilter from "../../hooks/UsePercentFilter";
import useClassPercent from "../../hooks/UseClassPercent";

import CoinImage from "../CoinImage/CoinImage";

const TableItemCripto = React.memo(({ c, history }) => {
  const priceUsd = useDollarFilter(c.priceUsd);
  const changePercent = usePercentFilter(c.changePercent24Hr);
  let classPercent = "show-md";
  classPercent += useClassPercent(changePercent);

  const handlePushHistory = () => {
    history.push(`/cripto/${c.id}`);
  };

  return (
    <>
      <tr className="Table__item" onClick={ handlePushHistory }>
        <td>
          <CoinImage cripto={c} />
        </td>
        <td>#{ c.rank }</td>
        <td>{ c.symbol }</td>
        <td>{ priceUsd }</td>
        <td className={ classPercent }>{ changePercent }</td>
      </tr>
    </>
  );
});
export default TableItemCripto;
