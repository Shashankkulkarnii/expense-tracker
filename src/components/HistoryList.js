import React from "react";
import "./css/HistoryList.css";
import { useSelector } from "react-redux";
import SectionTitle from "./designComponents/SectionTitle.js";

function HistoryList() {
  const transactionState = useSelector((state) => state.transaction);
  const transactionList = transactionState.transactionList ?? [];
  console.log(transactionList);
  return (
    <div className="section-container">
      <SectionTitle title="History"/>
      <div>
        <ul className="list-container">
          {transactionList.map((transaction) => (
            <li className={[transaction.amount > 0 ? "green-indicator" : "red-indicator", "list-content"].join(" ")}>
              <div>{transaction.description}</div>
              <div>{transaction.amount}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HistoryList;
