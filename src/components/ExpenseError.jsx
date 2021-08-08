import PropTypes from "prop-types";
import { RiCloseCircleLine } from "react-icons/ri";

const ExpenseError = ({ message, onCloseMessage }) => {
  let { title, description, type, showMessage } = message;
  type = "ERROR";
  const containerClassName = `main-container border-2 flex justify-between a rounded-lg my-4 text-center  
  ${type === "ERROR" && "border-red-600 text-red-600 bg-red-100"} 
  ${type === "SUCCESS" && "border-green-500 text-green-500 bg-green-100"} 
  ${!showMessage && "hidden "}`;

  return (
    <div className={containerClassName}>
      <div>
        <h1 className="text-xl font-bold ">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="text-xl">
        <button onClick={onCloseMessage}>
          <RiCloseCircleLine />
        </button>
      </div>
    </div>
  );
};

ExpenseError.propTypes = {
  message: PropTypes.object,
  onCloseMessage: PropTypes.func,
};

export default ExpenseError;
