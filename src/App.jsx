import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Flowers from "./pages/Flowers";
import "./pages/Flowers.scss";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-right" />{" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/flowersPage" element={<Flowers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
