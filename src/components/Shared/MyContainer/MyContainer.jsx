import PropTypes from "prop-types";
const MyContainer = ({ children }) => {
  return <div className="mx-auto container px-2 md:px-0">{children}</div>;
};
MyContainer.propTypes = {
  children: PropTypes.node,
};
export default MyContainer;
