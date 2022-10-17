import { SpinnerLoader } from "breakfast-ui";
import React, { useContext, useState } from "react";
import deleteEmployee from "../../apis/deleteEmployee.api";
import Context from "../../Store/Context";
import "./dialogBox.css";

const DialogBox: React.FC<any> = ({}) => {
  const { state, dispatch }: any = useContext(Context);
  const [isLoading, setLoading] = useState(false);
  return (
    <div className="dialog-wrapper">
      <section className="dialog-box">
        <h2>Do you want to remove this employee from the database?</h2>
        <div className="action-btns">
          <button
            className="cancel-btn"
            onClick={() => {
              dispatch({
                type: "CHANGE_DIALOG_STATE",
              });
              dispatch({
                type: "CHANGE_OBJECT_ID",
                payload: "",
              });
            }}
          >
            Cancel
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                deleteEmployee(state.objectId).then((res: any) => {
                  dispatch({
                    type: "CHANGE_DIALOG_STATE",
                  });
                  dispatch({
                    type: "CHANGE_OBJECT_ID",
                    payload: "",
                  });
                  dispatch({
                    type: "UPDATE_EMPLOYEES",
                  });
                  setLoading(false);
                  console.log(res.data);
                });
              }, 2000);
            }}
          >
            Delete
          </button>
          {isLoading && (
            <div className="dialog-loader">
              <SpinnerLoader size="40px" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DialogBox;
