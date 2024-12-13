import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // Check if transactions exist and calculate total balance
  const total = transactions
    ? transactions.reduce((acc, transaction) => acc + (transaction.amount || 0), 0).toFixed(2)
    : "0.00";

  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
};

export default Balance;
