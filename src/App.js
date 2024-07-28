// import logo from "./logo.svg";
import { Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesContainer from "./Routes/RoutesContainer";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <RoutesContainer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
