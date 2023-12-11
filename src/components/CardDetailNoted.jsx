import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";

const CardDetailNoted = ({ title, createdAt, body }) => {
  return (
    <div className="card-detail-catatan">
      <h3>{title}</h3>
      <span>{showFormattedDate(createdAt)}</span>
      <p>{body}</p>
    </div>
  );
};
CardDetailNoted.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
export default CardDetailNoted;
