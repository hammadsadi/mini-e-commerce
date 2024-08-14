import PropTypes from "prop-types";
const SectionTitle = ({ title }) => {
  return (
    <div>
      <h2 className="font-bold text-center text-2xl md:text-4xl ">{title}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
};
export default SectionTitle;
