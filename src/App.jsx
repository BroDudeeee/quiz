import { Routes, BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Result from "./pages/result/Result";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/quiz"} element={<Quiz />} />
          <Route path={"/result"} element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
