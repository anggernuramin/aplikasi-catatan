import React from "react";
import PropTypes from "prop-types";

const LayoutNoted = ({ children }) => {
  return (
    <main className="container">
      <div className="wrapper-main-content">
        <div className="wrapper-Catatan-shelf">{children}</div>
      </div>
    </main>
  );
};
LayoutNoted.propTypes = {
  children: PropTypes.node.isRequired,
};
export default LayoutNoted;
