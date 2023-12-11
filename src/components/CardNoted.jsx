import React from "react";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import parse from "html-react-parser";

const CardNoted = ({ noted, messageError, path }) => {
  return (
    <section className="Catatan-shelf">
      {noted?.length > 0 ? (
        noted?.map((data) => {
          return (
            <Link
              to={`${path}/${data.id}`}
              key={data.id}
              className="card-catatan"
            >
              <h3>{data.title}</h3>
              <span>{showFormattedDate(data.createdAt)}</span>
              <p>{parse(data.body)}</p>
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
  path: PropTypes.string.isRequired,
};

export default CardNoted;
