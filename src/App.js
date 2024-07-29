// import logo from "./logo.svg";
import { Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ThemedWrapper from "./Theme/ThemedWrapper";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <ThemedWrapper />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
