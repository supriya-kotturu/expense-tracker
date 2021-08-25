import { memo, useContext } from "react";
import { RiCloseCircleLine } from "react-icons/ri";

import { resetMessage } from "../store";
import { MessageContext } from "../RootProvider";

const ExpenseError = () => {
  const { message, messageDispatch } = useContext(MessageContext);

  let { title, description, type, showMessage } = message;
  type = "FAILURE";
  const containerClassName = `main-container border-2 flex justify-between a rounded-lg my-4 text-center  
  ${type === "FAILURE" && "border-red-600 text-red-600 bg-red-100"} 
  ${type === "SUCCESS" && "border-green-500 text-green-500 bg-green-100"} 
  ${!showMessage && "hidden "}`;

  return (
    <div className={containerClassName}>
      <div>
        <h1 className="text-xl font-bold ">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="text-xl">
        <button onClick={() => messageDispatch(resetMessage())}>
          <RiCloseCircleLine />
        </button>
      </div>
    </div>
  );
};

export default memo(ExpenseError);
