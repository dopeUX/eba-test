import "./App.css";
import EmployeeAdd from "./Components/EmployeeAdd/EmployeeAdd";
import DashBoard from "./Components/DashBoard/DashBoard";
import EmployeeUpdate from "./Components/EmployeeUpdate/EmployeeUpdate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogBox from "./Components/DialogBox/DialogBox";
import GlobalStateProvider from "./Store/GlobalStateProvider";
import { useContext } from "react";
import Context from "./Store/Context";
import { Dialog } from "@reach/dialog";

function App() {
  const { state, dispatch }: any = useContext(Context);
  return (
    <BrowserRouter>
      <div className="App">
        {state.dialog && <DialogBox />}
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/employee-add" element={<EmployeeAdd />} />
          <Route path="/employee-update" element={<EmployeeUpdate />} />
        </Routes>
        {/* {state.dialog && <DialogBox />} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
