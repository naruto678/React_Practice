import React from "react";
import "./styles.css";
import Greet from "./components/Greet";
import { Count } from "./components/Count";
import Toggle from "./components/Toggle";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Greet />
      <Count />
      <Toggle />
    </div>
  );
}
