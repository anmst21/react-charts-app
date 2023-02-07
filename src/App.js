import Sidebar from "./components/Sidebar";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Landing from "./components/Landing";

function App() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://charts-db-default-rtdb.europe-west1.firebasedatabase.app/options.json"
      );
      setOptions(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/charts">
          <div className="flex flex-wrap ">
            <div className="mr-5 mb-10">
              <DropdownPage options={options} chartType={"line"} />
            </div>
            <div className="mr-5 mb-10">
              <DropdownPage options={options} chartType={"bar"} />
            </div>
            <div className="mr-5 mb-10 ">
              <DropdownPage options={options} chartType={"radar"} />
            </div>
          </div>
        </Route>
        <Route path="/buttons">
          <ButtonPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
        <Route path="/counter">
          <CounterPage initialCount={0} />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </div>
    </div>
  );
}

export default App;
