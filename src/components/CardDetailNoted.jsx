import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import parse from "html-react-parser";

const CardDetailNoted = ({ detailNoted }) => {
  const [body, setBody] = useState("");

  useEffect(() => {
    if (detailNoted) {
      setBody(detailNoted.body);
    }
  }, [detailNoted]);
  return (
    <div className="card-detail-catatan">
      <h3>{detailNoted?.title}</h3>
      <span>{showFormattedDate(detailNoted?.createdAt)}</span>
      <p>{typeof body == "string" ? parse(body) : body}</p>
    </div>
  );
};
CardDetailNoted.propTypes = {
  detailNoted: PropTypes.object.isRequired,
};
export default CardDetailNoted;
