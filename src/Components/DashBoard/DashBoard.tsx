import React, { useContext, useEffect, useState } from "react";
import TableBody from "../TableBody/TableBody";
import "./dashboard.css";
import { Link } from "react-router-dom";
import getEmployees from "../../apis/getEmployees.api";
import getEmployeesBySearch from "../../apis/getEmployeeBySearch.api";
import { SpinnerLoader } from "breakfast-ui";
import Context from "../../Store/Context";

const DashBoard: React.FC<any> = () => {
  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch }: any = useContext(Context);

  useEffect(() => {
    getEmployees().then((res: any) => {
      console.log(res?.data);
      setEmployees(res?.data.response);
    });
    console.log(state?.dialog);
  }, []);

  useEffect(() => {
    getEmployees().then((res: any) => {
      console.log(res?.data);
      setEmployees(res?.data.response);
    });
    console.log(state?.dialog);
  }, [state.updateEmployees]);

  useEffect(() => {
    setTimeout(() => {
      if (query === "") {
        getEmployees().then((res: any) => {
          console.log(res?.data);
          setEmployees(res?.data.response);
          setIsLoading(false);
        });
      } else {
        getEmployeesBySearch(query).then((res: any) => {
          console.log(res?.data?.employees);
          setEmployees(res?.data.employees);
          setIsLoading(false);
        });
      }
    }, 1000);
  }, [query]);

  return (
    <div className="dashboard container">
      <div className="dashboard-header">
        <h1>Employee List</h1>
        <Link
          to={"/employee-add"}
          onClick={() => {
            dispatch({
              type: "CHANGE_SAVE_BUTTON_STATE",
              payload: "create",
            });
          }}
        >
          <button>Add</button>
        </Link>
      </div>

      <section className="dashboard-table">
        <div className="search-section">
          <input
            type="text"
            value={query}
            placeholder="Search employees"
            onChange={(e) => {
              setQuery(e.currentTarget.value);
              setIsLoading(true);
            }}
          />
          <div className="search-loader">
            {isLoading && <SpinnerLoader size="40px" color={"green"} />}
          </div>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Salary</th>
                <th>Age</th>
                <th>Email Id</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((item: any, index: number) => {
                return (
                  <TableBody
                    key={index}
                    objectId={item._id}
                    firstName={item.firstName}
                    lastName={item.lastName}
                    salary={item.salary}
                    age={item.age}
                    emailId={item.emailId}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
