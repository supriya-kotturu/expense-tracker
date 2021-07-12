import PropTypes from "prop-types";

const FormInput = ({ name, type }) => {
  return (
    <div>
      <input type={type} name={name} />
    </div>
  );
};

FormInput.propTypes = {};

export default FormInput;
