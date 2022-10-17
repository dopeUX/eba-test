import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./employeeForm.css";
import createEmployee from "../../apis/createEmployee.api";
import { SpinnerLoader } from "breakfast-ui";
import { useNavigate } from "react-router-dom";
import Context from "../../Store/Context";
import updateEmployee from "../../apis/updateEmployee.api";

interface employeeProps {
  firstName: string;
  lastName: string;
  salary: number | null | string;
  age: number | null | string | "";
  emailId: string;
}
const EmployeeForm: React.FC<any> = ({
  objectId,
  firstName,
  lastName,
  salary,
  age,
  emailId,
  onSaveClick,
}) => {
  const { state, dispatch }: any = useContext(Context);
  const [employee, setEmployee] = useState<employeeProps>({
    firstName: "",
    lastName: "",
    salary: "",
    age: "",
    emailId: "",
  });
  const nav = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function createEmployeeFunc() {
    createEmployee(
      employee.firstName,
      employee.lastName,
      employee.salary,
      employee.age,
      employee.emailId,
    ).then((res: any) => {
      console.log(res.data);
      setIsLoading(false);
      setEmployee({
        firstName: "",
        lastName: "",
        salary: null,
        age: null,
        emailId: "",
      });
      nav("/");
    });
  }

  function updateEmployeeFunc() {
    updateEmployee(state.objectId, employee).then((res: any) => {
      console.log(res.data);
      setIsLoading(false);
      setEmployee({
        firstName: "",
        lastName: "",
        salary: null,
        age: null,
        emailId: "",
      });
      nav("/");
      dispatch({
        type: "CHANGE_OBJECT_ID",
        payload: "",
      });
    });
  }

  useEffect(() => {
    setEmployee({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
      age: age,
      emailId: emailId,
    });
  }, [firstName, lastName, salary, age, emailId]);
  return (
    <section className="employee-form">
      <section>
        <input
          type="text"
          placeholder="First Name"
          value={employee.firstName}
          onChange={(e) => {
            setEmployee({
              ...employee,
              firstName: e.currentTarget.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={employee.lastName}
          onChange={(e) => {
            setEmployee({
              ...employee,
              lastName: e.currentTarget.value,
            });
          }}
        />
        <input
          type="number"
          placeholder="Salary"
          value={employee.salary === "" ? "" : Number(employee.salary)}
          onChange={(e) => {
            setEmployee({
              ...employee,
              salary: Number(e.currentTarget.value),
            });
          }}
        />
        <input
          type="number"
          placeholder="Age"
          value={employee.age === "" ? "" : Number(employee.age)}
          onChange={(e) => {
            setEmployee({
              ...employee,
              age: Number(e.currentTarget.value),
            });
          }}
        />
        <input
          type="text"
          placeholder="Email Id"
          value={employee.emailId}
          onChange={(e) => {
            setEmployee({
              ...employee,
              emailId: e.currentTarget.value,
            });
          }}
        />
      </section>
      <div className="action-btns">
        <button
          onClick={() => {
            setIsLoading(true);
            if (
              employee.firstName !== "" &&
              employee.lastName !== "" &&
              employee.salary !== "" &&
              employee.age !== "" &&
              employee.emailId !== ""
            ) {
              setTimeout(() => {
                switch (state.saveButtonState) {
                  case "create":
                    return createEmployeeFunc();
                  case "update":
                    return updateEmployeeFunc();
                  default: {
                    createEmployeeFunc();
                  }
                }
              }, 2000);
            } else {
              alert("Enter the employee details correctly");
              //   setEmployee({
              //     firstName: "",
              //     lastName: "",
              //     salary: null,
              //     age: null,
              //     emailId: "",
              //   });
              setIsLoading(false);
              //   dispatch({
              //     type: "CHANGE_OBJECT_ID",
              //     payload: "",
              //   });
            }
          }}
        >
          Save
        </button>
        {isLoading && <SpinnerLoader size="50px" color={"black"} />}
        <Link
          to="/"
          onClick={() => {
            setEmployee({
              firstName: "",
              lastName: "",
              salary: null,
              age: null,
              emailId: "",
            });
            dispatch({
              type: "CHANGE_OBJECT_ID",
              payload: "",
            });
          }}
        >
          <button className="cancel">Cancel</button>
        </Link>
      </div>
    </section>
  );
};

export default EmployeeForm;
