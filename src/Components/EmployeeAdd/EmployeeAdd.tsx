import React, { useEffect } from "react";
import "./employeeAdd.css";
import EmployeeForm from "../EmployeeForm/EmployeeForm";

const EmployeeAdd: React.FC<any> = ({}) => {
  useEffect(() => {
    // console.log(employee);
  });
  return (
    <div className="employee-add container">
      <h1>Employee Add</h1>

      <EmployeeForm firstName="" lastName="" salary={""} age={""} emailId="" />
    </div>
  );
};

export default EmployeeAdd;
