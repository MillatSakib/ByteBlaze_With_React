import { useState } from "react";
import viteLogo from "/vite.svg";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar></Navbar>
      </div>
    </>
  );
}

export default App;
