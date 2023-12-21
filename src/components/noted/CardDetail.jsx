import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../../utils";
import Loading from "../Loading";
import parse from "html-react-parser";

const CardDetail = ({ detailNoted }) => {
  const [body, setBody] = useState("");

  useEffect(() => {
    if (detailNoted) {
      setBody(detailNoted.body);
    }
  }, [detailNoted]);
  return (
    <div className="card-detail-catatan">
      {Object.keys(detailNoted).length === 0 ? (
        <Loading />
      ) : (
        <>
          {" "}
          <h3>{detailNoted?.title}</h3>
          <span>{showFormattedDate(detailNoted?.createdAt)}</span>
          <p>{typeof body == "string" ? parse(body) : body}</p>
        </>
      )}
    </div>
  );
};
CardDetail.propTypes = {
  detailNoted: PropTypes.object.isRequired,
};
export default CardDetail;
