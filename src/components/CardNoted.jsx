import React from "react";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardNoted = ({ noted, messageError }) => {
  return (
    <section className="Catatan-shelf">
      {noted?.length > 0 ? (
        noted?.map((data) => {
          return (
            <Link
              to={`notes/${data.id}`}
              key={data.id}
              className="card-catatan"
            >
              <h3>{data.title}</h3>
              <span>{showFormattedDate(data.createdAt)}</span>
              <p>{data.body}</p>
            </Link>
          );
        })
      ) : (
        <p>{messageError}</p>
      )}
    </section>
  );
};

CardNoted.propTypes = {
  noted: PropTypes.array,
  messageError: PropTypes.string.isRequired,
};

export default CardNoted;