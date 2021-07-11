import PropTypes from "prop-types";
import Card from "./UI/Card";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-us", { month: "long" });
  const day = date.toLocaleString("en-us", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <Card className="text-center bg-primary text-white-002 p-2 px-3 w-24 ">
      <div className="text-base">{month}</div>
      <div className="text-xs">{year}</div>
      <h2 className="text-3xl font-bold">{day}</h2>
    </Card>
  );
};

ExpenseDate.propTypes = {
  date: PropTypes.object,
};

export default ExpenseDate;