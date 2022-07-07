import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
     
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<div>
            <Header /><Home /> </div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
