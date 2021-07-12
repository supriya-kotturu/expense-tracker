import { useState } from "react";

import FormInput from "./UI/FormInput";
const ExpenseForm = () => {
  return (
    <form>
      <FormInput name="title" type="text" />
    </form>
  );
};

export default ExpenseForm;
