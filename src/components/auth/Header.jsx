import PropTypes from "prop-types";

const Header = ({ title, description }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Header;
