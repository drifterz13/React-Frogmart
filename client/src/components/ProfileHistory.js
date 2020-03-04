import React from "react";
import Moment from "react-moment";
import _ from "lodash";
import NumberFormat from "react-number-format";
import "../assets/css/ProfileHistory.css";

const ProfileHistory = ({ orderList }) => {
  const { createdAt, order, totalPrice } = orderList;
  const products = _.map(order, function(o) {
    const product = _.pick(o.productId, ["productName", "_id"]);
    return { ...product, ..._.pick(o, ["amount"]) };
  });

  return (
    <div className="card mb-3">
      <div className="card-header text-right">
        <Moment fromNow>{createdAt}</Moment>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <div>
            <ul>
              {products.map(({ productName, _id, amount }) => (
                <li key={_id}>
                  {productName} x {amount}
                </li>
              ))}
            </ul>
          </div>
          <footer className="blockquote-footer">
            <NumberFormat
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"THB "}
              renderText={value => <cite title="Source Title">{value}</cite>}
            />
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default ProfileHistory;
