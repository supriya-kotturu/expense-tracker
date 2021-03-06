import { memo } from "react";
import PropTypes from "prop-types";

const FormInput = (props) => {
  const { handleChange, label } = props;
  return (
    <div>
      <label className="p-3 m-2 text-lg font-bold">{label} : </label>
      <br />
      <input
        className="rounded-lg h-10 md:w-full lg:2/3 text-dark-001 p-2 m-2"
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default memo(FormInput);
