import React, { useContext, useEffect, useState } from "react";
// import ReactDialogBox from "react-js-dialog-box";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "@reach/dialog/styles.css";
import "./employeeUpdate.css";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import Context from "../../Store/Context";
import getEmployeeDetails from "../../apis/getEmployeeDetails.api";

const EmployeeUpdate: React.FC<any> = ({}) => {
  const { state, dispatch }: any = useContext(Context);
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    salary: null,
    age: null,
    emailId: "",
  });
  useEffect(() => {
    console.log(state.objectId);
    getEmployeeDetails(state.objectId).then((res: any) => {
      console.log(res.data.result);
      setEmployee(res.data.result);
    });
  }, []);

  return (
    <div className="employee-update container">
      <h1>Employee Update</h1>
      <EmployeeForm
        firstName={employee.firstName}
        lastName={employee.lastName}
        salary={employee.salary}
        age={employee.age}
        emailId={employee.emailId}
      />
    </div>
  );
};

export default EmployeeUpdate;
