import React, { useContext } from "react";
import "./tableBody.css";
import { Link } from "react-router-dom";
import Context from "../../Store/Context";

interface employeeProps {
  objectId: string;
  firstName: string;
  lastName: string;
  salary: number;
  age: number;
  emailId: string;
}
const TableBody: React.FC<employeeProps> = ({
  objectId,
  firstName,
  lastName,
  salary,
  age,
  emailId,
}) => {
  const { state, dispatch }: any = useContext(Context);

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{salary}</td>
      <td>{age}</td>
      <td>{emailId}</td>
      <td>
        <div className="action-btns">
          <Link
            to="/employee-update"
            onClick={() => {
              dispatch({
                type: "CHANGE_OBJECT_ID",
                payload: objectId,
              });
              dispatch({
                type: "CHANGE_SAVE_BUTTON_STATE",
                payload: "update",
              });
            }}
          >
            <img src="assets/edit.svg" alt="" />
          </Link>
          <img
            src="assets/delete.svg"
            alt=""
            onClick={() => {
              dispatch({
                type: "CHANGE_DIALOG_STATE",
              });
              dispatch({
                type: "CHANGE_OBJECT_ID",
                payload: objectId,
              });
            }}
          />
        </div>
      </td>
    </tr>
  );
};

export default TableBody;
